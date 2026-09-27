// components/sections/BatteryBrandsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RiBattery2Line,
  RiShieldCheckLine,
  RiAwardLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiCustomerService2Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { batteryImages } from "@/config/imageConfig";
// import { batteryImages } from "@/data/batteryImages";

export default function BatteryBrandsSection() {
  // Duplicate for seamless marquee effect
  const marqueeBrands = [...batteryImages, ...batteryImages];

  return (
    <section className="w-full bg-[#090B0D] py-16 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>

      {/* Ambient spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FFC400]/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Border glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400] animate-pulse"></span>
            <RiBattery2Line className="w-3.5 h-3.5 text-[#FFC400]" />
            <span className="text-[10px] font-bold text-[#FFC400] uppercase tracking-widest">
              Premium Battery Brands
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Genuine OEM & Premium Battery Brands{" "}
            <span className="text-[#FFC400] relative inline-block">
              We Stock & Install
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4C50 8 150 8 200 4"
                  stroke="#FFC400"
                  strokeWidth="2"
                  opacity="0.4"
                />
              </svg>
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            100% Authentic GCC-Spec stock featuring fresh manufacturing dates
            and manufacturer warranty certificates.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-colors duration-300">
              <RiAwardLine className="w-3 h-3 text-[#FFC400]" />
              {batteryImages.length}+ Brands
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-colors duration-300">
              <RiShieldCheckLine className="w-3 h-3 text-[#FFC400]" />
              100% Genuine
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-colors duration-300">
              <RiFlashlightLine className="w-3 h-3 text-[#FFC400]" />
              Fresh Stock
            </span>
          </div>
        </div>

        {/* Brands Grid - Desktop */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4 max-w-7xl mx-auto mb-10">
          {batteryImages.slice(0,21).map((image, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-3 border border-white/8 hover:border-[#FFC400]/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFC400]/10 flex items-center justify-center aspect-[4/3]"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#FFC400]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Diagonal shine sweep */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/[0.08] to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></div>
              </div>

              {/* Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Battery brand ${index + 1}`}
                  width={120}
                  height={90}
                  className="object-contain w-auto h-auto max-w-full max-h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          ))}
        </div>

        {/* Brands Marquee - Mobile */}
        <div className="md:hidden relative mb-10 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-[#090B0D] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-[#090B0D] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-3 animate-[scroll_40s_linear_infinite] w-max">
            {marqueeBrands.map((image, index) => (
              <div
                key={index}
                className="shrink-0 bg-linear-to-b from-white/[0.06] to-white/[0.02] rounded-xl p-4 border border-white/8 flex items-center justify-center w-32 h-24"
              >
                <Image
                  src={image}
                  alt={`Battery brand mobile ${index + 1}`}
                  width={100}
                  height={60}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          <div className="bg-linear-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-4 border border-white/8 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FFC400]/10 flex items-center justify-center shrink-0">
              <RiShieldCheckLine className="w-4 h-4 text-[#FFC400]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-0.5">
                Factory Sealed
              </h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Fresh stock with manufacturing date guarantee
              </p>
            </div>
          </div>

          <div className="bg-linear-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-4 border border-white/8 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FFC400]/10 flex items-center justify-center shrink-0">
              <RiAwardLine className="w-4 h-4 text-[#FFC400]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-0.5">
                Warranty Certified
              </h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                12 to 48-month manufacturer warranty
              </p>
            </div>
          </div>

          <div className="bg-linear-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-4 border border-white/8 flex items-start gap-3 sm:col-span-2 lg:col-span-1">
            <div className="w-9 h-9 rounded-lg bg-[#FFC400]/10 flex items-center justify-center shrink-0">
              <RiCustomerService2Line className="w-4 h-4 text-[#FFC400]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white mb-0.5">
                Expert Matching
              </h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Correct battery for your vehicle guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-7 py-3 rounded-full shadow-lg shadow-[#FFC400]/30 hover:shadow-[#FFC400]/60 transition-all duration-300 group text-sm"
            >
              <Link href="/battery-brands" className="flex items-center gap-2">
                <RiBattery2Line className="w-4 h-4" />
                View All Brands
                <RiArrowRightLine className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white/20 hover:bg-white/10 hover:border-white/40 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 text-sm backdrop-blur-sm"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <RiCustomerService2Line className="w-4 h-4" />
                Get Battery Advice
              </Link>
            </Button>
          </div>

          <p className="text-[11px] text-gray-500 mt-6 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
            <span className="font-medium text-gray-400">
              {batteryImages.length} brands available
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span>Free BMS coding included with every install</span>
          </p>
        </div>
      </div>

      {/* Marquee keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}