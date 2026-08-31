"use client";

import { useState } from "react";
import {
  RiCarLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiCpuLine,
  RiBattery2Line,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiAwardLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CarBrands() {
  const [activeTab, setActiveTab] = useState("european");

  const tabs = [
    {
      id: "european",
      label: "European & Luxury",
      icon: RiAwardLine,
    },
    {
      id: "japanese",
      label: "Japanese & Asian",
      icon: RiCarLine,
    },
    {
      id: "american",
      label: "American Muscle & SUVs",
      icon: RiFlashlightLine,
    },
    {
      id: "hybrid",
      label: "Hybrids, EVs & Supercars",
      icon: RiCpuLine,
    },
  ];

  const tabContent = {
    european: {
      title: "European & Luxury Vehicles",
      makes: ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Range Rover", "Jaguar", "Volkswagen", "Volvo", "Bentley", "Maserati"],
      specialty: "Full AGM/EFB battery replacement with complete computerized Battery Management System (BMS) registration, sensor diagnostics, and zero-downtime memory saver protection.",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      image: "🚗",
    },
    japanese: {
      title: "Japanese & Asian Vehicles",
      makes: ["Toyota", "Nissan", "Honda", "Lexus", "Infiniti", "Hyundai", "Kia", "Mazda", "Mitsubishi", "Subaru"],
      specialty: "High-heat resistant GCC-spec battery installation, terminal post corrosion cleanup, bracket adjustment, and charging system testing.",
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-400",
      borderColor: "border-red-500/30",
      image: "🚙",
    },
    american: {
      title: "American Muscle & SUVs",
      makes: ["Ford", "GMC", "Chevrolet", "Jeep", "Dodge", "Cadillac", "Lincoln", "RAM"],
      specialty: "Heavy-duty high-CCA battery swaps, dual-battery setups, off-road hold-down bracket fabrication, and alternator load testing.",
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/30",
      image: "🏎️",
    },
    hybrid: {
      title: "Hybrids, EVs & Exotic Supercars",
      makes: ["Tesla", "Porsche Taycan", "Lexus Hybrid", "Ferrari", "Lamborghini", "McLaren", "Aston Martin"],
      specialty: "12V auxiliary starter battery replacement for EV computer boots, lightweight LiFePO4 battery installation, and specialized low-voltage diagnostics.",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      image: "⚡",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiCarLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">All Makes & Models</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Specialized Battery Replacement & <span className="text-[#FFC400]">ECU Registration By Car Make</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Every vehicle has unique electrical requirements. We're experts in all makes and models.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/30 scale-105"
                      : "bg-white dark:bg-[#0D1117] text-gray-600 dark:text-gray-300 hover:bg-[#FFC400]/10 hover:text-[#FFC400] border border-gray-200 dark:border-white/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#090B0D]" : ""}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-[#0D1117] rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left - Content */}
                <div>
                  {/* Title with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${currentContent.color} flex items-center justify-center text-2xl`}>
                      {currentContent.image}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#090B0D] dark:text-white">
                      {currentContent.title}
                    </h3>
                  </div>

                  {/* Makes grid */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentContent.makes.map((make, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${currentContent.borderColor} bg-white/5 text-[#090B0D] dark:text-white`}
                      >
                        <RiCheckboxCircleLine className={`w-3 h-3 ${currentContent.iconColor}`} />
                        {make}
                      </span>
                    ))}
                  </div>

                  {/* Specialty */}
                  <div className={`bg-linear-to-br ${currentContent.color} rounded-xl p-4 border ${currentContent.borderColor} mt-4`}>
                    <div className="flex items-start gap-3">
                      <RiShieldCheckLine className={`w-5 h-5 ${currentContent.iconColor} shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-xs font-semibold text-[#090B0D] dark:text-white">Technical Specialty</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {currentContent.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Visual / Stats */}
                <div className="flex flex-col justify-center">
                  <div className="bg-[#090B0D] rounded-2xl p-6 border border-white/10">
                    <div className="text-center">
                      <div className="text-5xl mb-3">{currentContent.image}</div>
                      <h4 className="text-white font-bold text-lg mb-2">Expert Service for Your Vehicle</h4>
                      <p className="text-gray-400 text-sm">
                        Our certified technicians are trained specifically for {currentContent.title.toLowerCase()}.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                          <div className="text-[#FFC400] font-bold text-lg">{currentContent.makes.length}+</div>
                          <div className="text-xs text-gray-400">Makes Supported</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[#FFC400] font-bold text-lg">100%</div>
                          <div className="text-xs text-gray-400">BMS Coding Included</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gray-50 dark:bg-[#0D1117]/50 border-t border-gray-200 dark:border-white/10 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-[#FFC400]">✓</span> All makes & models covered • Dealer-level diagnostics included
              </p>
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-2 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group shrink-0">
                <Link href="#" className="flex items-center gap-2 text-sm">
                  Get Expert Help
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}