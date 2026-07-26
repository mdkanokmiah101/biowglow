"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { config } from "@/lib/config";

const socialLinks = [
  { label: "Facebook", href: "https://web.facebook.com/bioglowbangladesh/", icon: "facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-3">
              <img
                src="https://i.postimg.cc/TYc2LBv0/file-0000000099a88230b1470036d1ca89f6-edit-223370318576091.png"
                alt="BioGlow"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              প্রাকৃতিক উপাদানে তৈরি প্রিমিয়াম স্কিনকেয়ার। ত্বকের যত্নে বিশ্বস্ত নাম BioGlow।
            </p>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Follow Us
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#198754]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="text-sm text-gray-400 transition-colors hover:text-yellow-400"
                >
                  📞 {config.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; {year} BioGlow. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-500">
            Made with <Heart className="h-3 w-3 text-red-400" /> for your skin
          </p>
        </div>
      </div>
    </footer>
  );
}
