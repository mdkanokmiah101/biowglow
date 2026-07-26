import nodemailer from "nodemailer";

export interface OrderData {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
  extraQty?: number;
}

export async function sendOrderEmail(data: OrderData): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.EMAIL_TO || "bioglow.bd@gmail.com";

  if (!smtpUser || !smtpPass) {
    console.warn("SMTP not configured — email not sent");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const extraQty = data.extraQty || 0;
  const unitPrice = 650;
  const extraPrice = 349;
  const subtotal = unitPrice * data.quantity;
  const extraTotal = extraPrice * extraQty;
  const total = subtotal + extraTotal;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: #198754; color: white; padding: 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; }
    .body { padding: 20px; }
    .field { margin-bottom: 14px; }
    .field-label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .field-value { font-size: 16px; color: #333; font-weight: 600; }
    .divider { border-top: 1px solid #eee; margin: 16px 0; }
    .order-table { width: 100%; border-collapse: collapse; }
    .order-table th, .order-table td { padding: 10px; text-align: left; border-bottom: 1px solid #eee; }
    .order-table th { background: #f8f9fa; font-size: 13px; color: #666; font-weight: 600; }
    .total-row { font-weight: bold; font-size: 18px; color: #198754; }
    .footer { text-align: center; padding: 16px; color: #999; font-size: 12px; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🛒 নতুন অর্ডার</h1>
      <p style="margin: 4px 0 0; opacity: 0.9;">BioGlow Landing Page</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">👤 গ্রাহকের নাম</div>
        <div class="field-value">${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">📱 মোবাইল</div>
        <div class="field-value">${data.mobile}</div>
      </div>
      <div class="field">
        <div class="field-label">📍 ঠিকানা</div>
        <div class="field-value" style="font-weight: 400;">${data.address}</div>
      </div>
      <div class="divider"></div>
      <table class="order-table">
        <tr>
          <th>প্রোডাক্ট</th>
          <th>পরিমাণ</th>
          <th>মূল্য</th>
        </tr>
        <tr>
          <td>4 in 1 স্কিন গ্লো কম্বো</td>
          <td>${data.quantity} সেট</td>
          <td>৳${subtotal.toLocaleString()}</td>
        </tr>
        ${extraQty > 0 ? `<tr>
          <td>Aceso Night Cream (অতিরিক্ত)</td>
          <td>${extraQty} পিস</td>
          <td>৳${extraTotal.toLocaleString()}</td>
        </tr>` : ""}
        <tr>
          <td colspan="2"><strong>ডেলিভারি</strong></td>
          <td>ফ্রি</td>
        </tr>
        <tr class="total-row">
          <td colspan="2">সর্বমোট</td>
          <td>৳${total.toLocaleString()}</td>
        </tr>
      </table>
      <p style="color: #666; font-size: 13px; margin-top: 16px;">
        ⏱ অর্ডার সময়: ${new Date().toLocaleString("bn-BD", { timeZone: "Asia/Dhaka" })}
      </p>
    </div>
    <div class="footer">
      BioGlow — 4 in 1 স্কিন গ্লো কম্বো
    </div>
  </div>
</body>
</html>`;

  const text = `🛑 নতুন অর্ডার
==================
নাম: ${data.name}
মোবাইল: ${data.mobile}
ঠিকানা: ${data.address}
পরিমাণ: ${data.quantity}${extraQty ? `\nঅতিরিক্ত: ${extraQty}` : ""}
==================`;

  await transporter.sendMail({
    from: smtpUser,
    to: toEmail,
    subject: `🛒 নতুন অর্ডার — ${data.name} (${data.mobile})`,
    text,
    html,
  });
}
