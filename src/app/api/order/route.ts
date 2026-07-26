import { NextRequest, NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email";

interface OrderBody {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
  extraQty?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: OrderBody = await request.json();
    const { name, mobile, address, quantity, extraQty } = body;

    // ── Validation ──
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "নাম দিন (অন্তত ২ অক্ষর)" },
        { status: 400 }
      );
    }

    if (!mobile || !/^01[3-9]\d{8}$/.test(mobile.trim())) {
      return NextResponse.json(
        { error: "সঠিক মোবাইল নম্বর দিন (01XXXXXXXXX)" },
        { status: 400 }
      );
    }

    if (!address || address.trim().length < 5) {
      return NextResponse.json(
        { error: "পূর্ণ ঠিকানা দিন" },
        { status: 400 }
      );
    }

    const qty = Math.max(1, Math.min(quantity || 1, 99));
    const extQty = Math.max(0, Math.min(extraQty || 0, 99));

    // ── Send Email to bioglow.bd@gmail.com ──
    const emailPromise = sendOrderEmail({
      name: name.trim(),
      mobile: mobile.trim(),
      address: address.trim(),
      quantity: qty,
      extraQty: extQty,
    });

    // ── WhatsApp URL as fallback ──
    const message = `🛒 *নতুন অর্ডার*

নাম: ${name.trim()}
মোবাইল: ${mobile.trim()}
ঠিকানা: ${address.trim()}
পরিমাণ: ${qty}
${extQty > 0 ? `অতিরিক্ত (Aceso Night Cream): ${extQty}\n` : ""}
Source: Landing Page`;

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "") || "";

    const whatsappUrl = whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : null;

    // Wait for email (timeout 10s so API doesn't hang forever)
    await Promise.race([
      emailPromise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Email timeout")), 10000)
      ),
    ]);

    return NextResponse.json({
      success: true,
      whatsappUrl,
      message: "অর্ডার সফল হয়েছে! ইমেইল নোটিফিকেশন পাঠানো হয়েছে।",
    });
  } catch (error) {
    console.error("Order error:", error);
    // Still return success to user even if email fails
    return NextResponse.json({
      success: true,
      whatsappUrl: null,
      message: "অর্ডার গ্রহণ করা হয়েছে!",
    });
  }
}
