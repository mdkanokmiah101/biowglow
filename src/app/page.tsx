"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import TrustBar from "@/components/TrustBar";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import { ShoppingCart, ArrowRight, Sparkles } from "lucide-react";
import { trackPixel } from "@/lib/track";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  return (
    <>
      {/* Scarcity Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center text-xs sm:text-sm py-2 px-4 font-medium tracking-wide">
        ⚡️ মুখের কালো দাগ, রোদে পোড়া ত্বক বা নিস্তেজ স্কিনের কারণে কি আত্মবিশ্বাস হারিয়ে ফেলছেন? দেরি না করে নিচের অর্ডার ফর্মটি পূরণ করুন অথবা এখনই WhatsApp-এ যোগাযোগ করে আপনার অর্ডার নিশ্চিত করুন। ⚡️
      </div>

      <Header />
      <Hero />

      {/* Section 2 — Hope + Problem Agitation */}
      <Benefits />

      {/* Section 3 — Features: Solution */}
      <Features />

      {/* Section 4 — ProductShowcase: Product Breakdown */}
      <ProductShowcase />

      {/* Section 5 — Price Anchoring + Package Includes */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#FFD400]/20 text-[#198754] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              🎁 প্যাকেজে কী কী আছে?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              এই কম্বোতে পাচ্ছেন <span className="text-[#198754]">৪টি প্রিমিয়াম</span> প্রোডাক্ট
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              আলাদাভাবে কিনতে খরচ হতো <span className="line-through font-bold">১,২৯০+ টাকা</span>। কিন্তু আজ আপনি পুরো সেটটি পাচ্ছেন মাত্র...
            </p>
          </div>

          {/* Products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Lemonvate Skin Brightening Cream", desc: "ত্বক উজ্জ্বলকারী ও দাগ দূর করে", emoji: "✨" },
              { name: "Clop -G Cream (30gm)", desc: "ত্বককে করবে বেবি সফট ও এলার্জি মুক্ত", emoji: "🧁" },
              { name: "Aceso Body Whitening Cream 300g", desc: "সারা শরীরের ত্বক ফর্সা করে", emoji: "🧴" },
              { name: "VC Injection Serum", desc: "ভিটামিন সি সিরাম দূর করে পিগমেন্টেশন", emoji: "💉" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#198754] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Price Anchoring */}
          <div className="mt-10 text-center bg-white rounded-2xl p-8 shadow-lg border border-green-100 max-w-xl mx-auto">
            <p className="text-sm text-gray-500 mb-2">আলাদা আলাদাভাবে কিনলে মূল্য</p>
            <p className="text-2xl text-gray-400 line-through font-bold">৳১,২৯০+</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-4xl font-bold text-[#198754]">৬৫০</span>
              <span className="text-gray-500">টাকা</span>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">৫০% ছাড়</span>
            </div>
            <p className="text-sm text-[#198754] font-semibold mt-2">সাথে সারাদেশে ফ্রি ডেলিভারি 🚚</p>
            <a
              href="#order"
              onClick={() => trackPixel('AddToCart', { content_name: 'BioGlow 4 in 1 Combo Price Anchor', value: 650, currency: 'BDT' })}
              className="mt-6 inline-flex items-center gap-2 bg-[#198754] text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-[#198754]/30"
            >
              <ShoppingCart className="w-5 h-5" />
              এখনই অর্ডার করুন
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6 — FOMO (Fear of Missing Out) */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            ⏳ সীমিত সময়ের অফার
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            এখনই সিদ্ধান্ত নিন — <span className="text-yellow-400">অফার শেষ হওয়ার আগে</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            প্রতিদিন শত শত মানুষ অর্ডার করছেন। যারা দেরি করছেন, তারা পরে আফসোস করছেন — 
            &quot;কেন আগে অর্ডার করলাম না?&quot; এই অফারটি সীমিত সময়ের জন্য, তাই আজই অর্ডার করুন।
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { stat: "৫০%+", label: "ছাড়" },
              { stat: "ফ্রি", label: "ডেলিভারি" },
              { stat: "COD", label: "পেমেন্ট" },
              { stat: "৭ দিনে", label: "রেজাল্ট" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <p className="text-2xl font-bold text-yellow-400">{item.stat}</p>
                <p className="text-xs text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#order"
            onClick={() => trackPixel('AddToCart', { content_name: 'FOMO BioGlow Combo', value: 650, currency: 'BDT' })}
            className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 animate-pulse"
          >
            <Sparkles className="w-5 h-5" />
            হ্যাঁ, আমি অর্ডার করতে চাই!
          </a>
          <p className="text-xs text-gray-500 mt-4">🔒 আপনার তথ্য নিরাপদ। অর্ডার কনফার্ম করতে WhatsApp এ যোগাযোগ করা হবে।</p>
        </div>
      </section>

      {/* Section 7 — Trust Bar */}
      <TrustBar />

      {/* Section 8 — Why Choose */}
      <WhyChoose />

      {/* Section 9 — Reviews (Social Proof) */}
      <Reviews />

      {/* Section 10 — Gallery (Before/After) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>

      {/* Section 11 — FAQ */}
      <FAQ />

      {/* Section 12 — Order Form + Final CTA */}
      <OrderForm />

      <Footer />
      <MobileStickyBar />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "") || "8801310012097"}?text=${encodeURIComponent("Hi! I want to order BioGlow 4 in 1 Skin Glow Combo.")}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPixel('Contact', { content_name: 'Floating WhatsApp' })}
        className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.096-1.012-1.837-2.262-2.052-2.644-.215-.382-.023-.589.163-.78.166-.166.372-.432.558-.648.186-.216.248-.36.372-.6.124-.24.062-.44-.028-.61-.091-.17-.67-1.615-.92-2.212-.241-.582-.487-.574-.67-.584-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
