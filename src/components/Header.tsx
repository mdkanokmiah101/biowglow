'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#198754] to-emerald-400 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#198754]/20 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-[#198754]">Bio</span>
            <span className="text-emerald-500">Glow</span>
          </span>
        </Link>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+8801310012097"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#198754] px-3 py-2 text-sm font-semibold text-[#198754] transition-colors hover:bg-[#198754] hover:text-white"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">কল করুন</span>
          </a>
          <a
            href="https://wa.me/8801310012097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
          <Link
            href="#order"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#FFD400] px-4 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-[#e6bf00]"
          >
            <ShoppingCart className="h-4 w-4" />
            অর্ডার করুন
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          <div className="flex flex-col gap-2">
            <a
              href="tel:+8801310012097"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#198754] px-4 py-2.5 text-sm font-semibold text-[#198754] transition-colors hover:bg-[#198754] hover:text-white"
            >
              <Phone className="h-4 w-4" />
              কল করুন
            </a>
            <a
              href="https://wa.me/8801310012097"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              href="#order"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFD400] px-4 py-2.5 text-sm font-bold text-gray-900 transition-colors hover:bg-[#e6bf00]"
              onClick={() => setMobileOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              অর্ডার করুন
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
