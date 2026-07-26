'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { productData } from '@/data/product';
import { formatPrice } from '@/lib/utils';
import { trackPixel } from '@/lib/track';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const { name, description, price, oldPrice } = productData;
  const discountPercent = Math.round(
    ((oldPrice - price) / oldPrice) * 100
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#198754]/10 via-white to-[#FFD400]/10 py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#198754]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#FFD400]/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div
            className={`order-1 transition-all duration-700 ease-out ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD400]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#198754]">
              <Sparkles className="h-3.5 w-3.5" />
              সীমিত সময়ের অফার — {discountPercent}% ছাড়
            </span>

            {/* Emotional Headline */}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              বলুন তো, আর কতদিন&nbsp;
              <span className="text-[#198754]">মুখের কালো দাগ</span>
              &nbsp;আর&nbsp;
              <span className="text-[#198754]">নিস্তেজ ত্বক</span>
              &nbsp;নিয়ে থাকবেন?
            </h1>

            {/* Emotional Subheadline */}
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              অনেক ক্রিম, জেল, সিরাম ব্যবহার করেও কাঙ্ক্ষিত ফল না পেয়ে হতাশ?{' '}
              <strong className="text-gray-800">সমাধান আপনার হাতের কাছেই।</strong>
            </p>

            {/* BioGlow Introduction */}
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
              <strong className="text-[#198754]">BioGlow 4 in 1 স্কিন গ্লো কম্বো</strong> — ৪টি প্রিমিয়াম প্রোডাক্ট একসাথে, নিয়মিত ব্যবহারে ত্বককে আরও উজ্জ্বল ও ফ্রেশ দেখাতে সহায়তা করে।
            </p>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#198754] sm:text-4xl">
                {formatPrice(price)}
              </span>
              <span className="text-lg text-gray-400 line-through sm:text-xl">
                {formatPrice(oldPrice)}
              </span>
              <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600">
                -{discountPercent}%
              </span>
            </div>

            {/* Disclaimer */}
            <p className="mt-2 text-xs text-gray-400">
              *ফলাফল ব্যক্তি ভেদে ৭ থেকে ১০ দিন ভিন্ন হতে পারে
            </p>

            {/* CTA Buttons — side by side on mobile */}
            <div className="mt-8 flex gap-3">
              <Link
                href="#order"
                onClick={() => trackPixel('AddToCart', { content_name: 'BioGlow 4 in 1 Combo', value: 650, currency: 'BDT' })}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#198754] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#198754]/30 transition-all hover:bg-[#146c43] hover:shadow-xl active:scale-[0.97]"
              >
                <ShoppingCart className="h-4 w-4" />
                এখনই অর্ডার করুন
              </Link>
              <a
                href="https://wa.me/8801310012097"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixel('Contact', { content_name: 'BioGlow WhatsApp Inquiry' })}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#25D366] bg-[#25D366]/10 px-4 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-[#25D366]/30 active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp এ জানতে চান
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />
                ফ্রি ডেলিভারি সারা বাংলাদেশ
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />
                ১০০% অরিজিনাল প্রোডাক্ট
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />
                ক্যাশ অন ডেলিভারি
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />
                ৭ দিনের মধ্যে ফলাফল
              </span>
            </div>
          </div>

          {/* Facebook Video / Product Image */}
          <div
            className={`order-2 transition-all duration-700 delay-200 ease-out ${
              visible
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-8 scale-95 opacity-0'
            }`}
          >
            <div className="relative mx-auto max-w-[360px]">
              {/* Glow behind video */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#198754]/20 to-[#FFD400]/20 blur-3xl" />

              {/* YouTube Shorts Video Embed */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl aspect-[9/16] bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/BhEAoVsf5r0?autoplay=1&mute=1&loop=1&playlist=BhEAoVsf5r0&rel=0&showinfo=0&modestbranding=1"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  title="4 in 1 Skin Glow Combo - Product Video"
                />
              </div>

              {/* Floating discount badge */}
              <div className="absolute -top-2 -right-2 z-20 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-[#FFD400] shadow-lg sm:h-20 sm:w-20">
                <div className="text-center">
                  <span className="block text-[10px] font-bold leading-tight text-gray-900 sm:text-xs">
                    {discountPercent}%
                  </span>
                  <span className="block text-[8px] font-semibold leading-tight text-gray-700 sm:text-[10px]">
                    ছাড়
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
