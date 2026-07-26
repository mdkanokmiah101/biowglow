export interface OrderData {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
  extraQty?: number;
}

/**
 * Send order notification to bioglow.bd@gmail.com via FormSubmit.co
 * Must include browser-like headers (Origin, Referer) for FormSubmit to accept.
 */
export async function sendOrderEmail(data: OrderData): Promise<{ success: boolean }> {
  const extraQty = data.extraQty || 0;
  const unitPrice = 650;
  const extraPrice = 349;
  const subtotal = unitPrice * data.quantity;
  const extraTotal = extraPrice * extraQty;
  const total = subtotal + extraTotal;

  const payload = {
    _to: "bioglow.bd@gmail.com",
    _subject: `🛒 নতুন অর্ডার — ${data.name} (${data.mobile})`,
    _template: "table",
    _captcha: "false",
    _autoresponse: "আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    "👤 নাম": data.name,
    "📱 মোবাইল": data.mobile,
    "📍 ঠিকানা": data.address,
    "📦 পরিমাণ (4 in 1 কম্বো)": `${data.quantity} সেট`,
    ...(extraQty > 0 ? { "🧴 Aceso Night Cream": `${extraQty} পিস` } : {}),
    "💰 মোট মূল্য": `৳${total.toLocaleString()}`,
    "🆔 অর্ডার ID": `BIO-${Date.now().toString(36).toUpperCase()}`,
    "🌐 সোর্স": "BioGlow Landing Page",
  };

  const res = await fetch("https://formsubmit.co/ajax/bioglow.bd@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://skincare-landing-amber.vercel.app",
      Referer: "https://skincare-landing-amber.vercel.app/",
      "User-Agent": "Mozilla/5.0 (compatible; VercelServerless/1.0)",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let result: any;
  try {
    result = JSON.parse(text);
  } catch {
    result = { success: false, message: text };
  }

  if (result.success === "true" || result.success === true) {
    return { success: true };
  }

  // If FormSubmit says "needs activation", the first email was delivered as activation
  // Subsequent submissions will work normally
  console.warn("FormSubmit response:", result);
  return { success: false };
}
