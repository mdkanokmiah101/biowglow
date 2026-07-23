'use client';

import { trackPixel } from '@/lib/track';

const products = [
  {
    id: 1,
    src: '/prod-1.webp',
    title: 'Lemonvate Skin Brightening Cream 30g',
    desc: 'প্রিমিয়াম লেমন এক্সট্র্যাক্ট ও ভিটামিন সি-র পাওয়ারফুল কম্বিনেশন। ত্বকের কালো দাগ, পিগমেন্টেশন ও ট্যানিং দূর করে এনে দেয় ন্যাচারাল গ্লো। রোজকার ব্যবহারে ত্বক হয় উজ্জ্বল, ফর্সা ও মসৃণ — স্পর্শ করলেই বোঝা যায় পার্থক্য!',
    badge: 'BEST SELLER',
    benefits: [
      '🌸 লেমন এক্সট্র্যাক্ট ও ভিটামিন সি-র সক্রিয় ফর্মুলা — দাগ দূর করে ত্বক করে উজ্জ্বল',
      '✨ নিয়মিত ব্যবহারে ত্বক হয় ফর্সা, মসৃণ ও প্রাকৃতিকভাবে গ্লোয়িং',
      '💧 ত্বকের গভীরে পৌঁছে ট্যানিং ও পিগমেন্টেশন দূর করে — দেখুন নিজের চোখে',
      '🌟 হালকা টেক্সচার — দ্রুত শোষিত হয়, ত্বকে চিটচিটে ভাব রাখে না',
      '✅ অরিজিনাল কোয়ালিটি — গ্যারান্টি কার্ডসহ প্রিমিয়াম প্যাকেজিংয়ে',
    ],
  },
  {
    id: 2,
    src: '/prod-2.webp',
    title: 'Clop -G Cream (30gm)',
    desc: 'ত্বকের যেকোনো অ্যালার্জি, চুলকানি ও র্যাশের জন্য কার্যকরী সমাধান। স্কিন ইনফেকশন প্রতিরোধে বিশেষ ফর্মুলা। প্রতিদিনের ব্যবহারে ত্বক থাকে সুস্থ, আরামদায়ক ও সংক্রমণমুক্ত।',
    badge: '🆕 নিউ',
    benefits: [
      '🛡️ অ্যালার্জি, র্যাশ ও চুলকানি দ্রুত উপশমে কার্যকরী প্রিমিয়াম ফর্মুলা',
      '🍃 হালকা ও নিরাপদ — সকল স্কিন টাইপের জন্য উপযুক্ত, সংবেদনশীল ত্বকেও ব্যবহারযোগ্য',
      '✨ ত্বকের সংক্রমণ প্রতিরোধে কাজ করে, রাখে সুস্থ ও আরামদায়ক',
      '💊 ডার্মাটোলজিস্ট-অ্যাপ্রুভড মানের — নিশ্চিত অরিজিনাল প্রোডাক্ট',
      '🌟 নিয়মিত ব্যবহারে ত্বক হয় মসৃণ, দাগমুক্ত ও স্বাস্থ্যোজ্জ্বল',
    ],
  },
  {
    id: 3,
    src: '/prod-4.webp',
    title: 'Aceso Whitening Night Cream 300g',
    desc: 'বড় সাইজের ৩০০ গ্রাম নাইট ক্রিম — দীর্ঘস্থায়ী! রাতের বেলায় ত্বকের স্পেশাল কেয়ার নেয় এই ক্রিম। ঘুমানোর সময় ত্বকের কোষ পুনর্গঠন করে, গভীর পুষ্টি যোগায় এবং সকালে ঘুম থেকে উঠেই দেখবেন উজ্জ্বল, ফ্রেশ ও গ্লোয়িং ত্বক।',
    badge: '✨ স্পেশাল',
    benefits: [
      '🌙 ঘুমানোর সময় রাতভর কাজ করে — ত্বকের কোষ পুনর্গঠন ও মেরামত করে',
      '✨ সকালে ঘুম থেকে উঠে দেখবেন ত্বক অনেক বেশি উজ্জ্বল ও ফ্রেশ লাগছে',
      '💎 ডিপ নাইট কেয়ার — ত্বকের গভীরে পৌঁছে পুষ্টি যোগায়, রাখে হাইড্রেটেড',
      '🌸 বলিরেখা ও ফাইন লাইনস কমাতে সহায়তা করে — ত্বক দেখায় তরুণ',
      '🌟 নিয়মিত ব্যবহারে স্কিন টোন উজ্জ্বল হয় — নিজের আয়নায় দেখুন পরিবর্তন',
    ],
  },
  {
    id: 4,
    src: '/prod-6.webp',
    title: 'VC Injection',
    desc: 'ভিটামিন সি-র কনসেনট্রেটেড পাওয়ার সরাসরি ত্বকে। এই সিরাম ত্বকের কালো দাগ, পিগমেন্টেশন ও বয়সের ছাপ দূর করে এনে দেয় ডাবল গ্লো। নিয়মিত ব্যবহারে ত্বক হয় উজ্জ্বল, সতেজ এবং অনেক বেশি ইভেন টোন — নিজের ত্বকের অবাক হবেন!',
    badge: '🆕 নতুন',
    benefits: [
      '💉 কনসেনট্রেটেড ভিটামিন সি সিরাম — সরাসরি ত্বকের গভীরে পৌঁছে কাজ করে',
      '✨ পিগমেন্টেশন ও কালো দাগ দূর করে — ত্বক হয় অনেক বেশি ইভেন ও উজ্জ্বল',
      '🌟 বয়সের ছাপ ও ফাইন লাইনস কমাতে সহায়তা করে — ত্বক দেখায় তারুণ্যময়',
      '💧 হালকা ফর্মুলা — ত্বকে দ্রুত শোষিত হয়, চিটচিটে ভাব নেই, মেকআপের নিচেও ব্যবহারযোগ্য',
      '🎯 ডাবল গ্লো ইফেক্ট — নিয়মিত ব্যবহারে ত্বক ঝলমলে, ফ্রেশ ও স্বাস্থ্যোজ্জ্বল থাকে',
    ],
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-gradient-to-r from-[#198754] to-emerald-500 text-white text-xs font-bold px-5 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-md">
            🛍️ BioGlow প্রোডাক্ট লাইনআপ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            আপনার ত্বকের জন্য <span className="text-[#198754]">সেরা সমাধান</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            প্রতিটি প্রোডাক্ট প্রিমিয়াম কোয়ালিটি ও অরিজিনাল certificed — গ্যারান্টি কার্ডসহ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <img
                  src={product.src}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-[#198754] to-emerald-500 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-md tracking-wide">
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {product.desc}
                </p>

                {/* Benefits List */}
                <ul className="mt-4 space-y-2 flex-1">
                  {product.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                    >
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/8801310012097?text=Hi!%20I%20want%20to%20order%20BioGlow."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPixel('AddToCart', { content_name: product.title, value: 650, currency: 'BDT' })}
                  className="mt-auto inline-flex items-center gap-2 bg-gradient-to-r from-[#198754] to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-[#198754]/25 w-full justify-center"
                >
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.096-1.012-1.837-2.262-2.052-2.644-.215-.382-.023-.589.163-.78.166-.166.372-.432.558-.648.186-.216.248-.36.372-.6.124-.24.062-.44-.028-.61-.091-.17-.67-1.615-.92-2.212-.241-.582-.487-.574-.67-.584-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp-এ অর্ডার করুন</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-6 py-3 rounded-full shadow-sm">
            <span className="text-amber-600 text-sm font-medium">📞</span>
            <p className="text-sm text-gray-600">
              অর্ডার করতে সমস্যা হচ্ছে? সরাসরি কল করুন:{' '}
              <a href="tel:+8801310012097" className="text-[#198754] font-bold hover:underline">
                +880 13100-12097
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
