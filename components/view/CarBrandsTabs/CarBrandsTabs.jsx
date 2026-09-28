"use client"

import { useState } from "react";
import Image from "next/image";
import {
  americanBrands,
  britishBrands,
  chineseBrands,
  japaneseBrands,
  otherBrands,
  allCarBrands,
} from "@/config/imageConfig";


export default function CarBrandsTabs() {
  const [activeTab, setActiveTab] = useState("japanese");

  const tabs = [
    {
      id: "british",
      label: "British & Luxury",
      count: britishBrands.length,
      brands: britishBrands,
      accent: "#A855F7",
      specialty:
        "Full AGM/EFB battery replacement with complete computerized Battery Management System (BMS) registration and sensor diagnostics.",
    },
    {
      id: "japanese",
      label: "Japanese & Asian",
      count: japaneseBrands.length,
      brands: japaneseBrands ,
      accent: "#EF4444",
      specialty:
        "High-heat resistant GCC-spec battery installation, terminal post corrosion cleanup, bracket adjustment, and charging system testing.",
    },
    {
      id: "other",
      label: "European & Korean",
      count: otherBrands.length,
      brands: otherBrands ,
      accent: "#10B981",
      specialty:
        "Dealer-level BMS coding, memory-saver installation, ECU registration, and full charging system diagnostics for all premium makes.",
    },
    {
      id: "american",
      label: "American Muscle & SUV",
      count: americanBrands.length,
      brands: americanBrands ,
      accent: "#3B82F6",
      specialty:
        "Heavy-duty high-CCA battery swaps, dual-battery setups, off-road hold-down bracket fabrication, and alternator load testing.",
    },
    {
      id: "chinese",
      label: "Chinese & EV",
      count: chineseBrands.length,
      brands: chineseBrands ,
      accent: "#FFC400",
      specialty:
        "12V auxiliary starter battery replacement for EV computer boots, lightweight LiFePO4 battery installation, and low-voltage diagnostics.",
    },
  ];

  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="relative w-full bg-[#090B0D] py-10 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FFC400]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top/bottom hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
            Specialized Battery Replacement &{" "}
            <span className="relative inline-block text-[#FFC400]">
              ECU Registration
              <svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4C50 8 150 8 200 4"
                  stroke="#FFC400"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </svg>
            </span>{" "}
            by Car Make
          </h2>
        </div>

        {/* ---------- Filter Tabs ---------- */}
        {/* <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-5xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                className={`group relative inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]/60 ${
                  isActive
                    ? "bg-[#FFC400] text-[#090B0D] shadow-[0_0_30px_-8px_rgba(255,196,0,0.6)]"
                    : "bg-white/[0.04] text-gray-400 border border-white/10 hover:border-[#FFC400]/30 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                {tab.label}
                <span
                  className={`inline-flex items-center justify-center text-[10px] font-bold min-w-[22px] h-[22px] px-1.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-[#090B0D]/15 text-[#090B0D]"
                      : "bg-white/8 text-gray-400 group-hover:bg-[#FFC400]/15 group-hover:text-[#FFC400]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div> */}

        {/* ---------- Showcase Panel ---------- */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] backdrop-blur-xl overflow-hidden">
            {/* Top accent line (animated by tab color) */}
            <div
              className="absolute top-0 inset-x-0 h-[2px] transition-colors duration-500 bg-yellow-400"

            />

            {/* Corner glows using active accent */}
            <div
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-[0.15] pointer-events-none transition-colors duration-50
              "
            />
            <div
              className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-[0.07] pointer-events-none transition-colors duration-500"
              style={{ background: active.accent }}
            />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              {/* Specialty note */}
              {/* <div className="flex items-start gap-3 mb-7 max-w-3xl">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500 bg-yellow-300"
                />
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-400">
                  {active.specialty}
                </p>
              </div> */}

              {/* Divider */}
              {/* <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-7" /> */}

              {/* Brand Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                {allCarBrands.map((brand, index) => (
                  <div
                    key={`${active.id}-${index}`}
                    className="group/logo relative flex flex-col items-center justify-center aspect-square rounded-2xl border border-white/[0.07] bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Hover accent glow */}
                    <div
                      className="absolute inset-0 opacity-100  duration-500 pointer-events-none"
                      // style={{
                      //   background: `radial-gradient(circle at 50% 0%, ${active.accent}22 0%, transparent 70%)`,
                      // }}
                    />

                    {/* Logo */}
                    <div className="relative z-10 flex items-center justify-center w-[65%] h-[55%]">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={90}
                        height={90}
                        className="object-contain w-auto h-auto max-w-full max-h-full opacity-100 group-hover/logo:scale-110 transition-all duration-500"
                      />
                    </div>

                    {/* Brand name */}
                    <span className="relative z-10 mt-1 text-xs md:text-sm font-medium text-white transition-colors duration-300 truncate max-w-[90%] text-center">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}