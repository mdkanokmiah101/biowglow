'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Sun,
  Sparkles,
  Droplets,
  CircleDot,
  CheckCheck,
  Frown,
  Palette,
  HeartCrack,
  Star,
  SearchX,
  AlertTriangle,
  Clock,
} from 'lucide-react';
import { productData } from '@/data/product';

/* ─── ScrollReveal ─────────────────────────────────────────── */
function ScrollReveal({ children }: { children: ReactNode }) {
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

/* ─── Icon map ──────────────────────────────────────────────── */
const ICON_MAP: Record<string, ReactNode> = {
  Sun: <Sun className="h-7 w-7" />,
  Sparkles: <Sparkles className="h-7 w-7" />,
  Droplets: <Droplets className="h-7 w-7" />,
  CircleDot: <CircleDot className="h-7 w-7" />,
};

/* ─── Problem Agitation Icons ───────────────────────────────── */
const PROBLEM_ICONS = [
  <Frown className="h-6 w-6 text-rose-500" />,
  <Palette className="h-6 w-6 text-rose-500" />,
  <Star className="h-6 w-6 text-rose-500" />,
  <HeartCrack className="h-6 w-6 text-rose-500" />,
  <SearchX className="h-6 w-6 text-rose-500" />,
  <Clock className="h-6 w-6 text-rose-500" />,
  <Droplets className="h-6 w-6 text-rose-500" />,
  <Sun className="h-6 w-6 text-rose-500" />,
  <CircleDot className="h-6 w-6 text-rose-500" />,
  <AlertTriangle className="h-6 w-6 text-rose-500" />,
  <SearchX className="h-6 w-6 text-rose-500" />,
];

/* ─── Problems data ──────────────────────────────────────────── */
const PROBLEMS = [
  { icon: PROBLEM_ICONS[0], text: 'মুখে ব্রণের পুরনো কালো দাগ (Acne Marks)' },
  { icon: PROBLEM_ICONS[1], text: 'চোখের নিচে কালো দাগ (Dark Circles)' },
  { icon: PROBLEM_ICONS[2], text: 'রোদে পোড়া ও কালচে ত্বক (Sun Tan)' },
  { icon: PROBLEM_ICONS[3], text: 'মুখের ত্বক নিস্তেজ, প্রাণহীন ও ক্লান্ত দেখায়' },
  { icon: PROBLEM_ICONS[4], text: 'অসম স্কিন টোন—কোথাও কালো, কোথাও তুলনামূলক উজ্জ্বল' },
  { icon: PROBLEM_ICONS[5], text: 'বয়সের ছাপ, সূক্ষ্ম রেখা ও ক্লান্ত চেহারা আপনাকে আরও বয়স্ক দেখায়' },
  { icon: PROBLEM_ICONS[6], text: 'ত্বক রুক্ষ, শুষ্ক এবং আগের মতো মসৃণ নেই' },
  { icon: PROBLEM_ICONS[7], text: 'ত্বকের স্বাভাবিক উজ্জ্বলতা (Natural Glow) হারিয়ে গেছে' },
  { icon: PROBLEM_ICONS[8], text: 'ছবি তুলতে বা আয়নায় নিজের মুখ দেখতে আত্মবিশ্বাস কমে গেছে' },
  { icon: PROBLEM_ICONS[9], text: 'বাইরে বের হওয়ার আগে বারবার মেকআপ দিয়ে দাগ ঢাকতে হয়' },
  { icon: PROBLEM_ICONS[10], text: 'অনেক ক্রিম বা স্কিন কেয়ার প্রোডাক্ট ব্যবহার করেও সন্তোষজনক পরিবর্তন পাননি' },
];

/* ─── Benefit Images ─────────────────────────────────────────── */
const BENEFIT_IMAGES: Record<string, string> = {
  'Skin Brightening': 'https://gmaclinic.com/wp-content/uploads/2022/10/Microneedling-768x768.jpeg',
  'Dark Spot Care': 'https://tse1.explicit.bing.net/th/id/OIP.ttn0zpLL2tD0lok7rtc1swAAAA?r=0&w=439&h=396&rs=1&pid=ImgDetMain',
  'Fresh Looking Skin': 'https://blog.bigbasket.com/wp-content/uploads/2019/05/Fresh-looking-skin-1024x674.jpg',
  'Double Glow': 'https://www.massnews.com/wp-content/uploads/2023/09/Tips_for_Keeping_Your_Skin_Looking_Fresh-780x405.png',
};

/* ─── Benefits Section ─────────────────────────────────────── */
export default function Benefits() {
  const { benefits } = productData;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════╗
         ║  PART 1 — HOPE  ║
         ╚═══════════════════════════════════════════════════════ */}
      <section id="benefits" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-[#198754]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#198754]">
                আশার আলো
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                ত্বক কি আবার আগের মতো উজ্জ্বল হতে পারে?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                হ্যাঁ, পারে!{' '}
                <strong className="text-[#198754]">BioGlow 4 in 1 স্কিন গ্লো কম্বো</strong>{' '}
                নিয়মিত ব্যবহার করলে অনেক ব্যবহারকারীই তাদের ত্বকে লক্ষণীয় পরিবর্তন দেখতে পেয়েছেন।
                প্রতিটি প্রোডাক্টই ত্বকের যত্নে বিশেষভাবে তৈরি — ত্বককে আরও উজ্জ্বল, মসৃণ ও ফ্রেশ
                দেখাতে সহায়ক। সময় দিন, নিয়মিত ব্যবহার করুন, পরিবর্তন নিজের চোখেই দেখুন।
              </p>
              <p className="mt-2 text-xs text-gray-400">
                *ফলাফল ব্যক্তি ভেদে ভিন্ন হতে পারে
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid — Benefits */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const imageUrl = BENEFIT_IMAGES[benefit.title];

              return (
                <ScrollReveal key={benefit.title}>
                  <div
                    className="group rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#198754]/10 overflow-hidden"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    {imageUrl && (
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={imageUrl}
                          alt={benefit.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900">
                        {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Hopeful closing line */}
          <ScrollReveal>
            <div className="mx-auto mt-12 max-w-xl text-center">
              <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#198754]/10 to-[#FFD400]/10 px-5 py-3">
                <CheckCheck className="h-5 w-5 text-[#198754]" />
                <span className="text-sm font-semibold text-gray-800">
                  নিয়মিত ব্যবহারে ত্বক ফিরে পায় তার স্বাভাবিক উজ্জ্বলতা
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════╗
         ║  PART 2 — PROBLEM AGITATION  ║
         ╚═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 lg:py-24">
        {/* Dark decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-rose-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-300">
                আপনি কি একা?
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                এই সমস্যাগুলো কি আপনারও?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-400">
                আপনি যদি নিচের কোনও সমস্যার মুখোমুখি হন, জেনে রাখুন — আপনি একা নন। হাজার হাজার মানুষ
                এই একই সমস্যায় ভুগছেন। কিন্তু সমাধান আপনার হাতের কাছেই।
              </p>
            </div>
          </ScrollReveal>

          {/* Problem Cards */}
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {PROBLEMS.map((problem, index) => (
              <ScrollReveal key={index}>
                <div
                  className="group flex items-start gap-4 rounded-2xl border border-gray-700/50 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-rose-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-rose-500/5"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Icon container */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 transition-colors group-hover:bg-rose-500/20">
                    {problem.icon}
                  </div>

                  {/* Text */}
                  <div className="pt-2">
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {problem.text}
                    </p>
                  </div>

                  {/* Check indicator */}
                  <div className="ml-auto flex shrink-0 items-center pt-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-gray-600 text-gray-500 transition-colors group-hover:border-amber-400 group-hover:text-amber-400">
                      <AlertTriangle className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Emotional bridge to solution */}
          <ScrollReveal>
            <div className="mx-auto mt-12 max-w-2xl text-center">
              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-rose-500/10 p-6 backdrop-blur-sm">
                <p className="text-base leading-relaxed text-gray-300">
                  💖 চিন্তা নয়, সঠিক স্কিন কেয়ার রুটিনই পারে আপনার ত্বকের যত্ন নেওয়ার যাত্রা শুরু করতে।
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-300">
                  <strong className="text-amber-400">BioGlow 4 in 1 Skin Glow Combo</strong>-তে রয়েছে ৪টি প্রিমিয়াম স্কিন কেয়ার প্রোডাক্ট, যা নিয়মিত ব্যবহারে ত্বককে আরও উজ্জ্বল, সতেজ, মসৃণ ও সমান টোনের দেখাতে সহায়তা করে।
                </p>
                <p className="mt-3 text-base leading-relaxed text-gray-300">
                  আজই আপনার স্কিন কেয়ার রুটিন শুরু করুন এবং বিশেষ অফারে অর্ডার করুন। ✨
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  *ফলাফল ব্যক্তি ভেদে ভিন্ন হতে পারে
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export { ScrollReveal };
