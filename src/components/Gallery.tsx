'use client';

import { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';

const beforeAfterPairs = [
  {
    id: 1,
    before: '/gallery-before-3.webp',
    after: '/gallery-after-3.webp',
    title: 'স্কিন হোয়াইটনিং',
    desc: '৪ সপ্তাহের ফলাফল',
  },
  {
    id: 2,
    before: '',
    after: 'https://img.magnific.com/premium-photo/before-after-woman-showing-skin-brightening-results-from-cosmetic-procedures_321694-435.jpg',
    title: 'স্কিন ব্রাইটনিং',
    desc: '৩ সপ্তাহের ফলাফল',
    isComposite: true,
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#198754]/10 text-[#198754] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Before & After
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            বাস্তব <span className="text-[#198754]">ফলাফল</span> দেখুন
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            আমাদের গ্রাহকদের ত্বকে BioGlow 4-in-1 কম্বোর অসাধারণ পরিবর্তন
          </p>
        </div>

        {/* Emotional Intro Paragraph */}
        <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 bg-[#198754] rounded-full items-center justify-center flex-shrink-0 mt-1">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                <span className="font-bold text-[#198754]">একটি ছবি হাজার কথার চেয়ে বেশি বলে।</span>{' '}
                নিচের ছবিগুলো আমাদের গ্রাহকদের বাস্তব পরিবর্তন — কোনো এডিটিং নয়, কোনো ফিল্টার নয়। 
                BioGlow 4-in-1 কম্বো ব্যবহারের মাত্র কয়েক সপ্তাহের ব্যবধানেই ত্বক কেমন বদলে যেতে পারে, 
                তা নিজের চোখে দেখুন। আপনার ত্বকও কি এমন উজ্জ্বলতা পেতে চায়?
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <Sparkles className="w-4 h-4 text-[#198754]" />
                <span>বাস্তব ব্যবহারকারী — বাস্তব ফলাফল</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfterPairs.map((pair) => (
            <div
              key={pair.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              onMouseEnter={() => setHoveredId(pair.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Composite image (single before-after) */}
              {pair.isComposite ? (
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={pair.after}
                    alt={pair.title}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[8/5]"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Before → After
                  </span>
                </div>
              ) : (
              /* Side-by-side comparison */
              <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                {/* Before */}
                <div className="relative">
                  <img
                    src={pair.before}
                    alt={`Before ${pair.title}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative">
                  <img
                    src={pair.after}
                    alt={`After ${pair.title}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-[#198754]/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
              )}

              {/* Info */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-gray-900">{pair.title}</h3>
                <p className="text-sm text-gray-500">{pair.desc}</p>
              </div>

              {/* Hover effect arrow */}
              <div
                className={`absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#198754] rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 ${
                  hoveredId === pair.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-0'
                }`}
              >
                →
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          * ফলাফল ব্যক্তি ভেদে ভিন্ন হতে পারে। নিয়মিত ব্যবহার এবং সঠিক স্কিন কেয়ার রুটিন মেনে চললে সর্বোত্তম ফলাফল পাওয়া যায়।
        </p>
      </div>
    </section>
  );
}
