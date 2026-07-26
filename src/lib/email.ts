export interface OrderData {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
  extraQty?: number;
}

/**
 * Send order notification to bioglow.bd@gmail.com via FormSubmit.co
 * No SMTP / App Password needed — completely free, zero config.
 */
export async function sendOrderEmail(data: OrderData): Promise<void> {
  const extraQty = data.extraQty || 0;
  const unitPrice = 650;
  const extraPrice = 349;
  const subtotal = unitPrice * data.quantity;
  const extraTotal = extraPrice * extraQty;
  const total = subtotal + extraTotal;

  const formData = new URLSearchParams();
  formData.append("_to", "bioglow.bd@gmail.com");
  formData.append("_subject", `🛒 নতুন অর্ডার — ${data.name} (${data.mobile})`);
  formData.append("_template", "table");
  formData.append("_autoresponse", "আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");

  formData.append("👤 নাম", data.name);
  formData.append("📱 মোবাইল", data.mobile);
  formData.append("📍 ঠিকানা", data.address);
  formData.append("📦 পরিমাণ (4 in 1 কম্বো)", `${data.quantity} সেট`);
  if (extraQty > 0) {
    formData.append("🧴 Aceso Night Cream", `${extraQty} পিস`);
  }
  formData.append("💰 মোট মূল্য", `৳${total.toLocaleString()}`);
  formData.append("🆔 অর্ডার ID", `BIO-${Date.now().toString(36).toUpperCase()}`);
  formData.append("🌐 সোর্স", "BioGlow Landing Page - skincare-landing-amber.vercel.app");

  const res = await fetch("https://formsubmit.co/ajax/bioglow.bd@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: formData.toString(),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "unknown");
    console.error("FormSubmit error:", res.status, text);
    throw new Error(`Email send failed: ${res.status}`);
  }
}
