// Utility functions
export function formatPrice(price: number, currency = "৳"): string {
  return `${currency}${price.toLocaleString("bn-BD")}`;
}

export function calculateDiscount(oldPrice: number, newPrice: number): number {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getDeliveryCharge(
  insideDhaka: number,
  outsideDhaka: number,
  isInsideDhaka: boolean
): number {
  return isInsideDhaka ? insideDhaka : outsideDhaka;
}

export function generateOrderMessage(params: {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
  extraQty?: number;
}): string {
  let msg = `🛒 *নতুন অর্ডার*\n\nনাম: ${params.name}\nমোবাইল: ${params.mobile}\nঠিকানা: ${params.address}\n`;

  if (params.extraQty && params.extraQty > 0) {
    msg += `4 in 1 কম্বো: ${params.quantity} সেট\n➕ Aceso Night Cream 300g: ${params.extraQty} টি (+৩৪৯/পিস)\n`;
  } else {
    msg += `পরিমাণ: ${params.quantity} সেট\n`;
  }

  msg += `\nSource: Landing Page`;
  return msg;
}
