'use client';

import { productData } from '@/data/product';
import { ShieldCheck, MapPin, Clock, Heart, Star } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? 'text-[#FFD400]' : 'text-gray-200'
          }`}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function Reviews() {
  const reviews = productData.reviews;

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block bg-[#198754]/10 text-[#198754] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            গ্রাহকদের মতামত
          </h2>
        </div>

        {/* Emotional Intro Paragraph */}
        <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 bg-[#198754] rounded-full items-center justify-center flex-shrink-0 mt-1">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                <span className="font-bold text-[#198754]">হাজারো গ্রাহকের বিশ্বাস</span> অর্জন করেছে BioGlow। 
                প্রতিদিন শত শত মানুষ তাদের ত্বকের পরিবর্তন দেখছেন — 
                দাগ কমছে, উজ্জ্বলতা বাড়ছে, আত্মবিশ্বাস ফিরে আসছে। 
                নিচের রিভিউগুলো পড়ে দেখুন, এরা কিন্তু একসময় আপনার মতোই দ্বিধায় ছিলেন।
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <Star className="w-4 h-4 text-[#FFD400] fill-[#FFD400]" />
                <span className="font-semibold text-gray-700">৪.৮/৫</span>
                <span className="text-gray-400">— ৫০০০+ যাচাইকৃত রিভিউ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#198754] p-6"
            >
              {/* Header: name + location */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    {review.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {review.location}
                  </span>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-xs text-[#198754] bg-green-50 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    যাচাইকৃত
                  </span>
                )}
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Days ago */}
              <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                {review.daysAgo} দিন আগে
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
