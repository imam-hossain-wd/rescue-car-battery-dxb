"use client";

import { Button } from "@/components/ui/button";
import { RiWhatsappLine, RiCustomerService2Line, RiFlashlightLine, RiShieldCheckLine, RiAwardLine, RiTimeLine } from "@remixicon/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white dark:bg-[#090B0D] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left w-full lg:w-1/2">
            {/* Eyebrow Badge */}
            <div className="inline-flex text items-center gap-2 bg-[#FFC400]/10 dark:bg-[#FFC400]/20 text-[#090B0D] dark:text-[#FFC400] px-4 py-2 rounded-full text-xs  font-semibold tracking-wide uppercase border border-[#FFC400]/30 dark:border-[#FFC400]/40 mb-3">
              <RiFlashlightLine className="w-4 h-4" />
             <span className=""> 24/7 MOBILE CAR BATTERY SERVICE • ALL DUBAI</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight text-[#090B0D] dark:text-white mb-4">
              Emergency Car Battery Replacement in Dubai <span className="text-[#FFC400]">We Come to You</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
              Dead battery at home, work, parking or roadside? Our mobile battery rescue team delivers, tests and professionally installs the right battery at your location anywhere in Dubai. Genuine batteries, upfront pricing and fast 24/7 assistance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-6 h-auto text-base rounded-full transition-all duration-200 shadow-lg shadow-[#FFC400]/30 hover:shadow-[#FFC400]/50">
                <Link href="#" className="flex items-center gap-2">
                  <RiWhatsappLine className="w-5 h-5" />
                  Get Battery Rescue Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-6 py-6 h-auto text-base rounded-full font-semibold transition-all duration-200">
                <Link href="#" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-5 h-5" />
                  Call 24/7
                </Link>
              </Button>
            </div>

            {/* Trust Items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-center gap-2">
                <RiTimeLine className="w-5 h-5 text-[#FFC400]" />
                <span className="text-sm font-medium text-[#090B0D] dark:text-white">Fast Mobile Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="w-5 h-5 text-[#FFC400]" />
                <span className="text-sm font-medium text-[#090B0D] dark:text-white">Genuine Batteries</span>
              </div>
              <div className="flex items-center gap-2">
                <RiAwardLine className="w-5 h-5 text-[#FFC400]" />
                <span className="text-sm font-medium text-[#090B0D] dark:text-white">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="w-5 h-5 text-[#FFC400]" />
                <span className="text-sm font-medium text-[#090B0D] dark:text-white">Warranty Included</span>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 mt-6 bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-full border border-green-200 dark:border-green-800/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                Mobile Rescue Team Available Now
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <div className="aspect-4/3 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl sm:text-7xl mb-4">🚗</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Branded Service Van</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Coming Soon</p>
                  </div>
                </div>
                {/* Optional: Overlay Badge */}
                <div className="absolute top-4 right-4 bg-[#FFC400] text-[#090B0D] px-3 py-1 rounded-full text-xs font-bold">
                  ⚡ On-Demand
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}