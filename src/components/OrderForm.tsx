"use client";

import { useState, type FormEvent } from "react";
import { ShoppingCart, Phone, MapPin, Minus, Plus, ShieldCheck, Truck, Wallet } from "lucide-react";
import { config } from "@/lib/config";
import { formatPrice, generateOrderMessage } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackPixel, trackOrder } from "@/lib/track";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    quantity: 1,
    extraQty: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Price calculations
  const unitPrice = config.product.price;
  const extraPrice = 349;
  const deliveryCharge = config.delivery.insideDhaka;
  const subtotal = unitPrice * formData.quantity;
  const extraTotal = extraPrice * formData.extraQty;
  const total = subtotal + extraTotal + deliveryCharge;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "আপনার নাম লিখুন";
    }

    const bdMobileRegex = /^01[3-9]\d{8}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "মোবাইল নম্বর দিন";
    } else if (!bdMobileRegex.test(formData.mobile.trim())) {
      newErrors.mobile = "সঠিক BD নম্বর দিন (যেমন: 017XXXXXXXX)";
    }

    if (!formData.address.trim()) {
      newErrors.address = "পূর্ণ ঠিকানা লিখুন";
    }

    if (formData.quantity < 1) {
      newErrors.quantity = "সর্বনিম্ন ১ সেট";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Meta Pixel: InitiateCheckout + Purchase
    trackOrder(
      formData.name.trim(),
      formData.mobile.trim(),
      formData.quantity,
      formData.extraQty
    );

    try {
      // Call API — sends email to bioglow.bd@gmail.com
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          mobile: formData.mobile.trim(),
          address: formData.address.trim(),
          quantity: formData.quantity,
          extraQty: formData.extraQty,
        }),
      });

      const data = await res.json();

      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        mobile: "",
        address: "",
        quantity: 1,
        extraQty: 0,
      });
    } catch (err) {
      console.error("Submit error:", err);
      // Fallback: open WhatsApp directly
      const message = generateOrderMessage({
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        address: formData.address.trim(),
        quantity: formData.quantity,
        extraQty: formData.extraQty,
      });
      const waUrl = getWhatsAppUrl(message);
      window.open(waUrl, "_blank");
    }

    setIsSubmitting(false);
  };

  const updateQuantity = (delta: number) => {
    setFormData((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta),
    }));
  };

  return (
    <section id="order" className="w-full bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#FFD400]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#198754]">
            📦 অর্ডার ফর্ম
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            আজই অর্ডার করুন <span className="text-[#198754]">BioGlow</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            নিচের ফর্মটি পূরণ করুন — আমরা WhatsApp এ অর্ডার কনফার্ম করব 📱
          </p>
        </div>

        {/* Split Layout: Image Left + Form Right */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left — Product Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative mx-auto max-w-xs lg:max-w-md">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-4 shadow-xl">
                <img
                  src="/prod-3.webp"
                  alt="অর্ডার করুন BioGlow"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
              {/* Decorative elements - hide on mobile */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-[#198754]/10 blur-2xl hidden lg:block" />
              <div className="absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full bg-[#FFD400]/20 blur-xl hidden lg:block" />

              {/* Floating price badge - smaller on mobile */}
              <div className="absolute -top-2 -right-2 z-20 flex h-16 w-16 lg:h-20 lg:w-20 animate-pulse items-center justify-center rounded-full bg-[#FFD400] shadow-lg">
                <div className="text-center">
                  <span className="block text-[10px] lg:text-xs font-bold leading-tight text-gray-900">+</span>
                  <span className="block text-sm lg:text-lg font-bold leading-tight text-gray-900">৩৪৯</span>
                  <span className="block text-[8px] lg:text-xs font-semibold leading-tight text-gray-700">টাকা</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Order Form */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"
        >
          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
              আপনার নাম <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                type="text"
                placeholder="যেমন: মো. রহমান"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-200 ${
                  errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="mb-5">
            <label
              htmlFor="mobile"
              className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
              মোবাইল নম্বর <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                id="mobile"
                type="tel"
                placeholder="01XXXXXXXXX"
                maxLength={11}
                value={formData.mobile}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "");
                  if (val.length <= 11) {
                    setFormData((prev) => ({ ...prev, mobile: val }));
                  }
                }}
                className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-200 ${
                  errors.mobile ? "border-red-400 bg-red-50" : "border-gray-300"
                }`}
              />
            </div>
            {errors.mobile && (
              <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-5">
            <label
              htmlFor="address"
              className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
              পূর্ণ ঠিকানা <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <textarea
                id="address"
                rows={3}
                placeholder="রাস্তা, এলাকা, জেলা — ল্যান্ডমার্ক থাকলে দিন"
                value={formData.address}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, address: e.target.value }))
                }
                className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-200 resize-none ${
                  errors.address
                    ? "border-red-400 bg-red-50"
                    : "border-gray-300"
                }`}
              />
            </div>
            {errors.address && (
              <p className="mt-1 text-xs text-red-500">{errors.address}</p>
            )}
          </div>

          {/* Products — Combo + Extra */}
          <div className="mb-6 space-y-3">
            {/* Combo */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/prod-5.webp" alt="" className="w-12 h-12 object-contain rounded-lg bg-white" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">4 in 1 স্কিন গ্লো কম্বো</p>
                    <p className="text-xs text-gray-500">{formatPrice(unitPrice)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                    disabled={formData.quantity <= 1}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-green-50 hover:border-green-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-lg font-bold text-gray-900">{formData.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-green-50 hover:border-green-400"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Extra Product — Aceso Night Cream */}
            <div className={`rounded-xl border p-4 transition-all duration-300 ${formData.extraQty > 0 ? 'border-amber-300 bg-amber-50' : 'border-dashed border-gray-200 bg-white'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/prod-3.webp" alt="" className="w-12 h-12 object-contain rounded-lg bg-white" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">🧴 Aceso Night Cream 300g</p>
                    <p className="text-xs text-gray-500">{formatPrice(extraPrice)} (অতিরিক্ত)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, extraQty: Math.max(0, prev.extraQty - 1) }))}
                    disabled={formData.extraQty <= 0}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-green-50 hover:border-green-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center text-lg font-bold text-gray-900">{formData.extraQty}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, extraQty: prev.extraQty + 1 }))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-green-50 hover:border-green-400"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm">
              <div className="space-y-1.5">
                <div className="flex justify-between text-gray-600">
                  <span>4 in 1 কম্বো ({formatPrice(unitPrice)}) × {formData.quantity}</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {formData.extraQty > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Aceso Night Cream ({formatPrice(extraPrice)}) × {formData.extraQty}</span>
                    <span>{formatPrice(extraTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>ডেলিভারি (সারাদেশে ফ্রি)</span>
                  <span className="text-green-600 font-semibold">{formatPrice(deliveryCharge)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-bold text-green-700">
                  <span>সর্বমোট</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center mb-4">
              <p className="text-green-700 font-bold text-lg">✅ অর্ডার সফল হয়েছে!</p>
              <p className="text-green-600 text-sm mt-1">আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || submitSuccess}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-green-700 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ShoppingCart className="h-5 w-5" />
            {isSubmitting ? "প্রসেসিং..." : submitSuccess ? "অর্ডার কনফার্ম হয়েছে ✅" : "অর্ডার কনফার্ম করুন"}
          </button>

          <p className="mt-3 text-center text-xs text-gray-400">
            ফর্ম সাবমিট করলে আপনার তথ্য ইমেইলে পাঠানো হবে এবং WhatsApp এ নোটিফিকেশন যাবে
          </p>

          {/* Trust Badges */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-gray-100 pt-6">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <span className="text-xs font-medium text-gray-600">
                ১০০% অরিজিনাল
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <Wallet className="h-5 w-5 text-green-600" />
              <span className="text-xs font-medium text-gray-600">
                ক্যাশ অন ডেলিভারি
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <Truck className="h-5 w-5 text-green-600" />
              <span className="text-xs font-medium text-gray-600">
                ফ্রি ডেলিভারি
              </span>
            </div>
          </div>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
}
