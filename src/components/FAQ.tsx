"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { productData } from "@/data/product";
import { trackPixel } from "@/lib/track";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#198754]/10 text-[#198754] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            সচরাচর জিজ্ঞাসা
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            BioGlow 4-in-1 স্কিন গ্লো কম্বো সম্পর্কে আপনার মনে আসা সবচেয়ে সাধারণ প্রশ্নগুলোর উত্তর নিচে দেওয়া হলো। আরও কিছু জানতে চাইলে আমাদের WhatsApp এ বার্তা দিন।
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {productData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-green-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-green-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${
                    isOpen ? "max-h-80" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-100 px-6 py-4">
                    <p className="text-base leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500">
            আপনার প্রশ্নের উত্তর এখানে পাননি?{" "}
            <a
              href="https://wa.me/8801310012097"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixel('Contact', { content_name: 'FAQ WhatsApp' })}
              className="inline-flex items-center gap-2 font-medium text-green-600 underline underline-offset-2 transition-colors hover:text-green-700"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp এ সরাসরি কথা বলুন
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
