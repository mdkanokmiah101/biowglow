import { NextRequest, NextResponse } from "next/server";

interface OrderBody {
  name: string;
  mobile: string;
  address: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: OrderBody = await request.json();
    const { name, mobile, address, quantity } = body;

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

    // ── Generate WhatsApp message ──
    const message = `🛒 *নতুন অর্ডার*

নাম: ${name.trim()}
মোবাইল: ${mobile.trim()}
ঠিকানা: ${address.trim()}
পরিমাণ: ${qty}

Source: Landing Page`;

    const whatsappNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "") || "";

    if (!whatsappNumber) {
      return NextResponse.json(
        { error: "WhatsApp number not configured" },
        { status: 500 }
      );
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
      message: "অর্ডার সফল হয়েছে!",
    });
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json(
      { error: "অর্ডার প্রক্রিয়াকরণে সমস্যা হয়েছে। আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}
