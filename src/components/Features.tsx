'use client';

import type { ReactNode } from 'react';
import { FlaskConical, Hand, Heart, ShieldCheck, ShoppingCart, ArrowRight } from 'lucide-react';
import { productData } from '@/data/product';
import { ScrollReveal } from './Benefits';
import Link from 'next/link';
import { trackPixel } from '@/lib/track';

/* ─── Icon map ──────────────────────────────────────────────── */
const ICON_MAP: Record<string, ReactNode> = {
  FlaskConical: <FlaskConical className="h-6 w-6" />,
  Hand: <Hand className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
};

/* ─── Features Section ─────────────────────────────────────── */
export default function Features() {
  const { features } = productData;

  return (
    <section id="features" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#FFD400]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#198754]">
              বৈশিষ্ট্য
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
              পণ্যের বিশেষ বৈশিষ্ট্য
            </h2>
            <p className="mt-3 text-base text-gray-600">
              কী কী কারণে এই প্রোডাক্ট সবার থেকে আলাদা
            </p>
          </div>
        </ScrollReveal>

        {/* Split Layout: Image Left + Text Right */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left — Product Image */}
          <ScrollReveal>
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-2 shadow-xl">
                <img
                  src="/prod-5.webp"
                  alt="4 in 1 স্কিন গ্লো কম্বো"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-[#198754]/10 blur-2xl" />
              <div className="absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full bg-[#FFD400]/20 blur-xl" />
            </div>
          </ScrollReveal>

          {/* Right — Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = ICON_MAP[feature.icon] || (
                <ShieldCheck className="h-6 w-6" />
              );

              return (
                <ScrollReveal key={feature.title}>
                  <div
                    className="group flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#198754]/20 hover:shadow-xl hover:shadow-[#198754]/10"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#198754]/10 to-[#FFD400]/10 text-[#198754] transition-all duration-300 group-hover:scale-110 group-hover:from-[#198754] group-hover:to-[#FFD400] group-hover:text-white">
                      {Icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="#order"
              onClick={() => trackPixel('AddToCart', { content_name: 'BioGlow 4 in 1 Combo', value: 650, currency: 'BDT' })}
              className="inline-flex items-center gap-2 bg-[#198754] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-[#198754]/30 hover:shadow-xl hover:shadow-[#198754]/40 active:scale-[0.97]"
            >
              <ShoppingCart className="w-5 h-5" />
              অর্ডার করুন এখনই
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-3 text-xs text-gray-400">🔒 সারাদেশে ফ্রি ডেলিভারি | ক্যাশ অন ডেলিভারি</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
