/**
 * Send order notification email to bioglow.bd@gmail.com
 * Uses FormSubmit.co AJAX API (works from browser context only)
 */

export interface OrderData {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
  extraQty?: number;
}

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
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  return { success: result.success === "true" || result.success === true };
}
