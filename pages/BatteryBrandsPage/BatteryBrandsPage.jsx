// app/battery-brands/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RiBattery2Line,
  RiShieldCheckLine,
  RiAwardLine,
  RiFlashlightLine,
  RiArrowRightLine,
  RiSearchLine,
  RiTimeLine,
  RiMapPin2Line,
  RiCustomerService2Line,
  RiBatteryChargeLine,
  RiSettings4Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { batteryBrands } from "@/data/batteryBrands";
import { SiteConfig } from "@/config/siteConfig";


const {displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;
export default function BatteryBrandsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

 

  const categories = [
    { id: "all", label: "All Brands", icon: RiBattery2Line },
    { id: "premium", label: "Premium", icon: RiAwardLine },
    { id: "standard", label: "Standard", icon: RiShieldCheckLine },
    { id: "performance", label: "Performance", icon: RiFlashlightLine },
    { id: "local", label: "Local UAE", icon: RiMapPin2Line }
  ];

  const filteredBrands = batteryBrands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          brand.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          brand.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const technologyTypes = [
    { name: "SMF", description: "Sealed Maintenance-Free" },
    { name: "AGM", description: "Absorbent Glass Mat" },
    { name: "EFB", description: "Enhanced Flooded Battery" },
    { name: "GEL", description: "Gel Cell Lead-Acid" },
    { name: "SLI", description: "Starting, Lighting, Ignition" },
    { name: "VRLA", description: "Valve-Regulated Lead-Acid" },
    { name: "LiFePO4", description: "Lithium Iron Phosphate" },
    { name: "Li-Ion", description: "Lithium-Ion Auxiliary" },
    { name: "Deep Cycle", description: "Deep Cycle Battery" }
  ];

  const sizeCodes = [
    "55D23L", "80D26L", "95D31R", "105D31L", "46B24L",
    "DIN55", "DIN66", "DIN74", "DIN88", "DIN100",
    "H5/L2", "H6/L3", "H7/L4", "H8/L5"
  ];

  return (
    <main className="w-full bg-white dark:bg-[#090B0D] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[#090B0D] overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <RiBattery2Line className="w-4 h-4" />
              Premium Battery Brands
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Genuine OEM & Premium Battery Brands <span className="text-[#FFC400] relative">
                We Stock & Install
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              100% Authentic GCC-Spec stock featuring fresh manufacturing dates and manufacturer warranty certificates. From premium AGM to reliable SMF batteries.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <RiAwardLine className="w-4 h-4 text-[#FFC400]" />
                <span>{batteryBrands.length}+ Brands</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <RiShieldCheckLine className="w-4 h-4 text-[#FFC400]" />
                <span>100% Genuine</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <RiTimeLine className="w-4 h-4 text-[#FFC400]" />
                <span>Fresh Stock</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search & Filter */}
      <section className="w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] -mt-8 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by brand name, origin, or technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/30"
                            : "bg-white/5 text-gray-400 hover:bg-[#FFC400]/10 hover:text-[#FFC400] border border-white/10"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {category.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Brands Grid */}
      <section className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-12 sm:py-16 lg:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
                  <RiBattery2Line className="w-3 h-3" />
                  Available Brands
                </Badge>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {filteredBrands.length} Battery Brands <span className="text-gray-400 text-sm font-normal">in Stock</span>
                </h2>
              </div>
              <div className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                {searchQuery || selectedCategory !== "all" ? "Filtered Results" : "All Brands"}
              </div>
            </div>

            {filteredBrands.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No Brands Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredBrands.map((brand, index) => (
                  <div
                    key={brand.id}
                    className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 transition-all duration-500 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-2xl hover:shadow-[#FFC400]/10 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-linear-to-br ${brand.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-transparent via-white/5 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {brand.popular && (
                      <div className="absolute -top-2 -right-2 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg z-10 bg-[#FFC400] text-[#090B0D] shadow-[#FFC400]/40">
                        🔥 Most Popular
                      </div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${brand.iconColor}`}>
                          <RiBattery2Line className="w-7 h-7" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white">{brand.rating}</span>
                          <span className="text-xs text-gray-400">⭐</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-gray-400 mb-1">{brand.origin}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                        {brand.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {brand.technologies.map((tech, idx) => (
                          <span key={idx} className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${brand.borderColor} bg-white/5`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs border-t border-gray-200 dark:border-white/10 pt-3">
                        <span className="text-gray-500 dark:text-gray-400">
                          <RiShieldCheckLine className="inline w-3 h-3 mr-1 text-[#FFC400]" />
                          {brand.warranty} Warranty
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {brand.types.join(" • ")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Battery Technology Guide */}
      <section className="w-full bg-[#0D1117] py-16 sm:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <RiBatteryChargeLine className="w-4 h-4" />
                Battery Technology Guide
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Understanding Your <span className="text-[#FFC400]">Battery Technology</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2">Choose the right battery chemistry for your vehicle</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologyTypes.map((tech, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-sm font-bold text-white">{tech.name}</h4>
                  <p className="text-xs text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Battery Size Codes */}
      <section className="w-full bg-[#090B0D] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <RiSettings4Line className="w-4 h-4" />
              Common Battery Size Codes (UAE)
            </Badge>
            <h3 className="text-lg font-bold text-white mb-4">Popular Battery Size Classifications</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {sizeCodes.map((code, index) => (
                <span key={index} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-all duration-200">
                  {code}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">Not sure which battery fits your car? Contact us for expert advice.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#090B0D] border-t border-white/5 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Need Help Choosing?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure Which Battery Fits Your Car? <span className="text-[#FFC400]">We'll Help You</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Share your vehicle details and we'll recommend the perfect battery from our premium brand selection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 group">
                <Link href={whatsappCallLink} target="_blank" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-5 h-5" />
                  Get Expert Advice
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200">
                <Link href={numberCallLink} className="flex items-center gap-2">
                  <RiFlashlightLine className="w-5 h-5" />
                  Call {displayNumber}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}