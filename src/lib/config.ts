// 📦 Product Configuration — Edit these values to customize the landing page
export const config = {
  // ── Product ──
  product: {
    name: "4 in 1 স্কিন গ্লো কম্বো",
    tagline: "গ্লোয়িং ও দাগহীন ত্বক — মাত্র ৬৫০ টাকায়!",
    headline: "৪টি প্রিমিয়াম প্রোডাক্ট = ১টি প্যাকেজ",
    subheadline:
      "ACESO Body Cream + Lemonvate Gel + Clop-G Cream + VC Injection Serum — সাথে ফ্রি ডেলিভারি সারাদেশে!",
    price: 650,
    oldPrice: 1290,
    currency: "৳",
    discount: 50,
    image: "/product-main.webp",
    gallery: [
      "/product-1.webp",
      "/product-2.webp",
      "/product-3.webp",
      "/product-4.webp",
    ],
  },

  // ── WhatsApp ──
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+8801310012097",
    message: (data: {
      name: string;
      mobile: string;
      address: string;
      quantity: number;
    }) =>
      `🛒 *নতুন অর্ডার*%0a%0aনাম: ${data.name}%0aমোবাইল: ${data.mobile}%0aঠিকানা: ${data.address}%0aপরিমাণ: ${data.quantity}%0a%0aSource: Landing Page`,
  },

  // ── Delivery ──
  delivery: {
    insideDhaka: 0,
    outsideDhaka: 0,
    freeAbove: 0,
    note: "পুরো বাংলাদেশে ফ্রি ডেলিভারি (লিমিটেড টাইম অফার!)",
  },

  // ── Trust ──
  trust: {
    guarantee: "১০০% Original Product",
    payment: "Cash On Delivery",
    delivery: "Free Delivery Bangladesh",
    packaging: "Secure Packaging",
  },

  // ── SEO ──
  seo: {
    title: "4 in 1 Skin Glow Combo — ৬৫০ টাকায় গ্লোয়িং ত্বক | Official Store",
    description:
      "মাত্র ৬৫০ টাকায় ৪টি প্রিমিয়াম প্রোডাক্ট: ACESO Body Cream, Lemonvate Gel, Clop-G Cream, VC Injection Serum। ফ্রি ডেলিভারি সারাদেশে। ৭ দিনের গ্যারান্টিযুক্ত রেজাল্ট!",
    canonical: "https://skincare-landing-rouge.vercel.app",
  },

  // ── Contact ──
  contact: {
    phone: "+880 13100-12097",
    whatsapp: "+8801310012097",
  },
};
