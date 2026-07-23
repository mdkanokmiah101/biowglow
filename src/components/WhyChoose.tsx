'use client';

import { productData } from '@/data/product';
import { Award, Globe, Wallet, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7 text-white" />,
  Globe: <Globe className="w-7 h-7 text-white" />,
  Wallet: <Wallet className="w-7 h-7 text-white" />,
  Sparkles: <Sparkles className="w-7 h-7 text-white" />,
};

const whyChooseItems = [
  {
    title: '১০০% অরিজিনাল — গ্যারান্টি সহ',
    desc: 'বাজারের নকল প্রোডাক্টের ভিড়ে আসল চেনা কঠিন? আমরা দিচ্ছি গ্যারান্টি কার্ডসহ প্রতিটি প্রোডাক্ট। ভুল প্রোডাক্টের ঝামেলা নেই — কোয়ালিটি নিয়ে আমাদের আস্থাই আপনার আস্থা। অর্ডার করলেই নিশ্চিন্ত থাকুন!',
    icon: 'Award',
    color: 'from-amber-500 to-orange-500',
    stat: '১০,০০০+',
    statLabel: 'সন্তুষ্ট গ্রাহক',
  },
  {
    title: '🚚 ফ্রি হোম ডেলিভারি',
    desc: 'ঢাকা হোক বা চট্টগ্রাম, সিলেট বা বরিশাল — সারাদেশে ফ্রি ডেলিভারি! অর্ডার করলেই পণ্য পৌঁছে যাবে আপনার দোরগোড়ায়। ডেলিভারি চার্জ নিয়ে কোনো টেনশন নেই। অফারটি সীমিত সময়ের জন্য — আজই অর্ডার করুন!',
    icon: 'Globe',
    color: 'from-sky-500 to-blue-500',
    stat: '৬৪ জেলা',
    statLabel: 'সারাদেশে ডেলিভারি',
  },
  {
    title: '💵 ক্যাশ অন ডেলিভারি',
    desc: 'প্রোডাক্ট হাতে পেয়ে, দেখে — তারপর পেমেন্ট। কোনো আগাম টাকা নয়, কোনো ঝুঁকি নয়। পণ্য ভালো লাগলেই কেবল টাকা দেবেন। এটাই সবচেয়ে নিরাপদ কেনাকাটা। অনলাইনে পেমেন্টের ঝামেলা নেই — নগদ, বিকাশ বা কার্ডের দরকার নেই।',
    icon: 'Wallet',
    color: 'from-emerald-500 to-teal-500',
    stat: 'COD',
    statLabel: 'নিরাপদ পেমেন্ট',
  },
  {
    title: '⚡ ৭ দিনেই রেজাল্ট',
    desc: 'শুধু কথা নয় — কাজ দেখানোর আমরা। আমাদের প্রোডাক্ট ব্যবহার করে মাত্র ৭ দিনের মধ্যেই ত্বকের পরিবর্তন টের পাবেন। হাজার হাজার গ্রাহক ইতিমধ্যেই পেয়েছেন ম্যাজিক্যাল রেজাল্ট। আপনি কেন পিছিয়ে থাকবেন? এখনই ট্রাই করুন — নিজের চোখে দেখুন!',
    icon: 'Sparkles',
    color: 'from-purple-500 to-pink-500',
    stat: '৯৭%',
    statLabel: 'সন্তুষ্ট গ্রাহক',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-gradient-to-r from-[#198754] to-emerald-500 text-white text-xs font-bold px-5 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-md">
            💚 বিশ্বস্ততার প্রতিশ্রুতি
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            কেন <span className="text-[#198754]">BioGlow</span> বেছে নেবেন?
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            হাজার হাজার গ্রাহকের আস্থা — কেন তারা আমাদের বিশ্বাস করেন? জেনে নিন এই ৪টি কারণ।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {whyChooseItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 p-6 md:p-7 text-center border border-gray-100 flex flex-col"
            >
              {/* Icon with gradient */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-5 mx-auto shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                {iconMap[item.icon] ?? <Award className="w-7 h-7 text-white" />}
              </div>

              {/* Stat badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-full shadow-md border border-gray-100 px-3 py-1 text-xs font-bold text-[#198754]">
                {item.stat}
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed flex-1">
                {item.desc}
              </p>

              {/* Stat Label at Bottom */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-10 py-4 md:py-5">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold text-lg">★★★★★</span>
              <span className="text-xs md:text-sm text-gray-600">
                <span className="font-bold text-gray-900">৪.৯</span> রেটিং
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="text-xs md:text-sm text-gray-600">
                <span className="font-bold text-gray-900">১০,০০০+</span> সন্তুষ্ট গ্রাহক
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-xs md:text-sm text-gray-600">
                <span className="font-bold text-gray-900">১০০%</span> অরিজিনাল গ্যারান্টি
              </span>
            </div>
          </div>

          {/* Urgency CTA */}
          <div className="mt-6">
            <a
              href="https://wa.me/8801310012097?text=Hi!%20I%20want%20to%20order%20BioGlow."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#198754] to-emerald-500 text-white px-8 py-3.5 rounded-full text-sm md:text-base font-bold hover:from-emerald-600 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-[#198754]/25 group/btn animate-pulse hover:animate-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.096-1.012-1.837-2.262-2.052-2.644-.215-.382-.023-.589.163-.78.166-.166.372-.432.558-.648.186-.216.248-.36.372-.6.124-.24.062-.44-.028-.61-.091-.17-.67-1.615-.92-2.212-.241-.582-.487-.574-.67-.584-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>এখনই অর্ডার করুন — সীমিত সময়ের অফার!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
