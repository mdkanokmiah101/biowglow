"use client";

import { ShieldCheck, Wallet, Truck, Lock } from "lucide-react";
import { config } from "@/lib/config";

const trustItems = [
  { icon: ShieldCheck, label: config.trust.guarantee },
  { icon: Wallet, label: config.trust.payment },
  { icon: Truck, label: config.trust.delivery },
  { icon: Lock, label: config.trust.packaging },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-green-600 py-4 md:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5 text-white"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span className="text-sm font-semibold leading-tight sm:text-base">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
