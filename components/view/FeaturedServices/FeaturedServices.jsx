"use client";

import { useState } from "react";
import { 
  RiFlashlightLine, 
  RiCarLine, 
  RiTestTubeLine, 
  RiTruckLine,
  RiToolsLine,
  RiSettings4Line,
  RiCpuLine,
  RiBattery2Line,
  RiBatteryChargeLine,
  RiLeafLine,
  RiRecycleLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiSearchLine,
  RiPlugLine,
  RiBankCardLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedServices() {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      icon: RiFlashlightLine,
      title: "24/7 Emergency Mobile Car Battery Replacement",
      description: "Rapid dispatch and complete removal/installation of dead batteries anywhere in Dubai at any hour.",
      category: "emergency",
      popular: true,
    },
    {
      id: 2,
      icon: RiCarLine,
      title: "Emergency Roadside Jumpstart & Boost",
      description: "Safe, high-power anti-surge boosting to jumpstart flat batteries without damaging sensitive car electronics.",
      category: "emergency",
    },
    {
      id: 3,
      icon: RiTestTubeLine,
      title: "Doorstep Battery Health & Load Testing",
      description: "Professional digital CCA (Cold Cranking Amps) and voltage diagnostic checks performed before any replacement decision.",
      category: "diagnostics",
    },
    {
      id: 4,
      icon: RiTruckLine,
      title: "Mobile Battery Delivery & Drop-off",
      description: "Express delivery of specialized or pre-charged battery units directly to your home or office.",
      category: "delivery",
    },
    {
      id: 5,
      icon: RiToolsLine,
      title: "Onsite Terminal Cleaning & Anti-Corrosion Treatment",
      description: "Clearing acid oxidation, burnishing post connectors, and applying protective seals to extend battery lifespan.",
      category: "maintenance",
    },
    {
      id: 6,
      icon: RiSettings4Line,
      title: "Onsite Battery Clamp, Tray, & Cable Fastening",
      description: "Re-securing loose mount brackets, replacing degraded hold-down clamps, and preventing engine vibration damage.",
      category: "maintenance",
    },
    {
      id: 7,
      icon: RiSearchLine,
      title: "Deep Electrical System & Parasitic Drain Diagnostics",
      description: "Tracing hidden off-key electrical current draws that drain your battery overnight.",
      category: "diagnostics",
    },
    {
      id: 8,
      icon: RiPlugLine,
      title: "Starter Motor & Alternator Charging Diagnostics",
      description: "Comprehensive testing of your alternator's charging output voltage and starter motor draw under load.",
      category: "diagnostics",
    },
    {
      id: 9,
      icon: RiBatteryChargeLine,
      title: "Auxiliary Power / Memory Saver Battery Replacement",
      description: "Supplying continuous 12V backup power during battery swaps to preserve radio, seat, clock, and dashboard settings.",
      category: "replacement",
      premium: true,
    },
    {
      id: 10,
      icon: RiCpuLine,
      title: "BMS ECU Battery Registration & Computer Coding",
      description: "Dealer-level scanner diagnostic coding to register new battery specs into the vehicle computer system.",
      category: "coding",
      premium: true,
    },
    {
      id: 11,
      icon: RiBattery2Line,
      title: "Standard Flooded Lead-Acid (SLI) Battery Replacement",
      description: "High-cranking original replacement batteries for traditional, non-start-stop engines.",
      category: "replacement",
    },
    {
      id: 12,
      icon: RiBattery2Line,
      title: "Enhanced Flooded Battery (EFB) Replacement",
      description: "Reinforced, high-durability battery installations engineered for entry-level start-stop vehicles.",
      category: "replacement",
    },
    {
      id: 13,
      icon: RiBatteryChargeLine,
      title: "Absorbent Glass Mat (AGM) Battery Replacement",
      description: "Premium valve-regulated AGM battery replacements required for luxury, European, and advanced start-stop engines.",
      category: "replacement",
      premium: true,
    },
    {
      id: 14,
      icon: RiBatteryChargeLine,
      title: "GEL & Deep-Cycle Heavy-Duty Battery Replacement",
      description: "Specialist high-capacity batteries installed for off-road SUVs, campervans, and commercial fleet vehicles.",
      category: "replacement",
      premium: true,
    },
    {
      id: 15,
      icon: RiCarLine,
      title: "Hybrid & EV 12V Auxiliary Starter Replacement",
      description: "Specialized 12V low-voltage auxiliary starter battery replacements required to boot electric and hybrid vehicle computers.",
      category: "replacement",
      premium: true,
    },
    {
      id: 16,
      icon: RiFlashlightLine,
      title: "Lightweight Lithium-Ion (LiFePO4) Performance Installation",
      description: "Ultra-lightweight high-discharge performance battery fitting for sports cars and track builds.",
      category: "replacement",
      premium: true,
    },
    {
      id: 17,
      icon: RiToolsLine,
      title: "Battery Cable, Main Fuse, & Ground Strap Replacement",
      description: "Replacing oxidized heavy-duty power cables, main inline fuses, and engine ground straps onsite.",
      category: "maintenance",
    },
    {
      id: 18,
      icon: RiSettings4Line,
      title: "Slow Bench Charging & Battery Reconditioning",
      description: "Workshop-grade desulfation and slow-charge reconditioning cycles for deeply discharged batteries.",
      category: "maintenance",
    },
    {
      id: 19,
      icon: RiToolsLine,
      title: "Custom Battery Tray & Hold-Down Fabrication",
      description: "Custom bracket and battery tray modifications for high-performance retrofits and dual-battery setups.",
      category: "maintenance",
      premium: true,
    },
    {
      id: 20,
      icon: RiRecycleLine,
      title: "Used Battery Core Pickup & Eco Recycling",
      description: "Safe collection and environmentally compliant recycling of hazardous old lead-acid battery cores.",
      category: "eco",
    },
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "emergency", label: "Emergency" },
    { id: "diagnostics", label: "Diagnostics" },
    { id: "replacement", label: "Replacement" },
    { id: "maintenance", label: "Maintenance" },
    { id: "coding", label: "Coding" },
    { id: "delivery", label: "Delivery" },
    { id: "eco", label: "Eco" },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiToolsLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Complete Mobile Car Battery & <span className="text-[#FFC400]">Auto-Electrical Services</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            From quick emergency roadside jumpstarts to dealer-level computer coding, our mobile garage brings total auto-electrical repair straight to your door.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/30"
                  : "bg-white dark:bg-[#0D1117] text-gray-600 dark:text-gray-300 hover:bg-[#FFC400]/10 hover:text-[#FFC400] border border-gray-200 dark:border-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-5 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1"
            >
              {/* Popular/Premium Badge */}
              {(service.popular || service.premium) && (
                <div className={`absolute -top-2 -right-2 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg ${
                  service.popular 
                    ? "bg-[#FFC400] text-[#090B0D] shadow-[#FFC400]/30" 
                    : "bg-purple-500 text-white shadow-purple-500/30"
                }`}>
                  {service.popular ? "Popular" : "Premium"}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FFC400]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#FFC400]/20 transition-all duration-300">
                <service.icon className="w-6 h-6 text-[#FFC400]" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-[#090B0D] dark:text-white mb-1.5 group-hover:text-[#FFC400] transition-colors duration-300 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                <RiShieldCheckLine className="w-4 h-4" />
                View All Services
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiBankCardLine className="w-4 h-4" />
                Get Instant Quote
              </Link>
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            {filteredServices.length} services available • 24/7 emergency support
          </p>
        </div>
      </div>
    </section>
  );
}