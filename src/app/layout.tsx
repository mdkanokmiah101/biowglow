import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "4 in 1 স্কিন গ্লো কম্বো — ৬৫০ টাকায় গ্লোয়িং ত্বক | Official Store",
  description:
    "মাত্র ৬৫০ টাকায় ৪টি প্রিমিয়াম প্রোডাক্ট: ACESO Body Cream, Lemonvate Gel, Clop-G Cream, VC Injection Serum। ফ্রি ডেলিভারি সারাদেশে। ৭ দিনের গ্যারান্টিযুক্ত রেজাল্ট!",
  keywords:
    "skin glow combo, vitamin c serum, skincare Bangladesh, ACESO, Lemonvate, Clop-G, glow cream, beauty product, skin brightening",
  authors: [{ name: "BioGlow" }],
  openGraph: {
    title: "4 in 1 স্কিন গ্লো কম্বো — ৬৫০ টাকায় গ্লোয়িং ত্বক",
    description:
      "মাত্র ৬৫০ টাকায় ৪টি প্রিমিয়াম প্রোডাক্ট: ACESO Body Cream, Lemonvate Gel, Clop-G Cream, VC Injection Serum। ফ্রি ডেলিভারি!",
    url: "https://skincare-landing-rouge.vercel.app",
    siteName: "BioGlow",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "BioGlow Vitamin C Serum",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 in 1 স্কিন গ্লো কম্বো",
    description:
      "মাত্র ৬৫০ টাকায় ৪টি প্রিমিয়াম প্রোডাক্ট। ফ্রি ডেলিভারি সারাদেশে। অর্ডার করুন এখনই!",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* JSON-LD Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "4 in 1 স্কিন গ্লো কম্বো",
              description:
                "মাত্র ৬৫০ টাকায় ৪টি প্রিমিয়াম প্রোডাক্ট: ACESO Body Cream, Lemonvate Gel, Clop-G Cream, VC Injection Serum। ফ্রি ডেলিভারি সারাদেশে।",
              image: [
                "https://skincare-landing-rouge.vercel.app/product-main.webp",
              ],
              sku: "GB-COMBO-001",
              mpn: "GBCOMBO001",
              brand: {
                "@type": "Brand",
                name: "BioGlow",
              },
              offers: {
                "@type": "Offer",
                url: "https://skincare-landing-rouge.vercel.app",
                priceCurrency: "BDT",
                price: "650",
                priceValidUntil: new Date(
                  Date.now() + 365 * 24 * 60 * 60 * 1000
                ).toISOString(),
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: "BD",
                  },
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "125",
              },
            }),
          }}
        />
        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "এই 4 in 1 কম্বো প্যাকেজে কী কী আছে?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "মোট ৪টি প্রোডাক্ট: ACESO Body Cream, Lemonvate Gel, Clop-G Cream, VC Injection Serum — একটি প্যাকেজেই সম্পূর্ণ স্কিনケয়র সলিউশন।",
                  },
                },
                {
                  "@type": "Question",
                  name: "কতদিন ব্যবহার করলে ফল পাওয়া যায়?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "নিয়মিত ব্যবহারের ৭ দিনের মধ্যেই ত্বকে পরিবর্তন দেখতে পাবেন। তবে ফলাফল ব্যক্তি ভেদে ভিন্ন হতে পারে।",
                  },
                },
                {
                  "@type": "Question",
                  name: "ডেলিভারি চার্জ কত?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "বর্তমানে চলছে লিমিটেড টাইম অফার — পুরো বাংলাদেশে ফ্রি ডেলিভারি!",
                  },
                },
              ],
            }),
          }}
        />
        {/* JSON-LD Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://glowbright.com.bd",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "BioGlow Vitamin C Serum",
                  item: "https://glowbright.com.bd",
                },
              ],
            }),
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1360960746174672');
fbq('track', 'PageView');
`
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1360960746174672&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
