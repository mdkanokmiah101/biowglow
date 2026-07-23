"use client";

import { Phone, MessageCircle, ShoppingCart } from "lucide-react";
import { config } from "@/lib/config";
import { trackPixel } from "@/lib/track";

export default function MobileStickyBar() {
  const scrollToOrder = () => {
    const el = document.getElementById("order");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 block border-t border-green-700 bg-green-600 md:hidden">
      <div className="flex items-stretch">
        {/* Call Button */}
        <a
          href={`tel:${config.contact.phone}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-white transition-colors hover:bg-green-700 active:bg-green-800"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-semibold leading-tight">কল করুন</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${config.whatsapp.number.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 border-x border-green-700 py-2.5 text-white transition-colors hover:bg-green-700 active:bg-green-800"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-semibold leading-tight">WhatsApp</span>
        </a>

        {/* Order Now Button */}
        <button
          type="button"
          onClick={() => {
            trackPixel('AddToCart', { content_name: 'Mobile Sticky Bar', value: 650, currency: 'BDT' });
            scrollToOrder();
          }}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-yellow-500 py-2.5 text-gray-900 transition-colors hover:bg-yellow-400 active:bg-yellow-600"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-[11px] font-bold leading-tight">অর্ডার করুন</span>
        </button>
      </div>
    </div>
  );
}
