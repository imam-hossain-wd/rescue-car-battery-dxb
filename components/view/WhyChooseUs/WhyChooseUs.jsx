import {
  RiTimeLine,
  RiComputerLine,
  RiShieldCheckLine,
  RiBattery2Line,
  RiPriceTag3Line,
  RiTestTubeLine,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiMapPin2Line,
  RiCarLine,
  RiAwardLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: RiTimeLine,
      title: "5–15 Minute Response Time",
      description:
        "Mobile mechanics stationed strategically in key Dubai zones (SZR, Marina, Business Bay, Deira, Al Barsha) for fast dispatch.",
      accent: "from-green-500 to-emerald-400",
      glow: "shadow-green-500/30",
      iconColor: "text-green-400",
    },
    {
      icon: RiComputerLine,
      title: "Dealer-Grade BMS Coding",
      description:
        "European & luxury vehicles (BMW, Mercedes, Audi, Porsche) require ECU battery registration. We include it free.",
      accent: "from-blue-500 to-cyan-400",
      glow: "shadow-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      icon: RiShieldCheckLine,
      title: "100% Genuine GCC Batteries",
      description:
        "Fresh, factory-sealed batteries (Varta, Amaron, Bosch, Solite, ACDelco) built for extreme Middle East heat.",
      accent: "from-[#FFC400] to-yellow-300",
      glow: "shadow-[#FFC400]/30",
      iconColor: "text-[#FFC400]",
      featured: true,
    },
    {
      icon: RiBattery2Line,
      title: "Zero Memory-Loss Install",
      description:
        "Auxiliary power saver keeps your radio presets, seat memories, clock & navigation calibrations intact.",
      accent: "from-purple-500 to-fuchsia-400",
      glow: "shadow-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      icon: RiPriceTag3Line,
      title: "Transparent Honest Pricing",
      description:
        "Quote over phone or WhatsApp is what you pay. No hidden surge charges or surprise call-out fees.",
      accent: "from-orange-500 to-amber-400",
      glow: "shadow-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      icon: RiTestTubeLine,
      title: "Diagnostics & Guarantee",
      description:
        "Full load test of battery, starter & alternator before install — backed by 12 to 24-month warranty.",
      accent: "from-red-500 to-rose-400",
      glow: "shadow-red-500/30",
      iconColor: "text-red-400",
    },
  ];

  return (
    <section className="w-full bg-[#090B0D] py-10 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>

      {/* Ambient spotlights */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-[#FFC400]/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Border glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400] animate-pulse"></span>
            <RiAwardLine className="w-3.5 h-3.5 text-[#FFC400]" />
            <span className="text-[10px] font-bold text-[#FFC400] uppercase tracking-widest">
              Why Choose Us
            </span>
          </div> */}

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Why Dubai Drivers Trust Us Over{" "}
            <span className="text-[#FFC400] relative inline-block">
              Traditional Garages
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
            We've redefined car battery replacement with speed, expertise, and
            transparency. Here's why thousands of Dubai drivers choose us.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/8 hover:border-[#FFC400]/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFC400]/10"
            >
              {/* Top gradient bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Corner glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${reason.accent} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`}
              ></div>

              {/* Diagonal shine sweep */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></div>
              </div>

              {/* Number watermark */}
              <span className="absolute top-3 right-4 text-5xl font-black text-white/[0.03] group-hover:text-[#FFC400]/10 transition-colors duration-500 select-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Icon with dual-layer */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${reason.accent} p-[1.5px] mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${reason.glow}`}
                >
                  <div className="w-full h-full rounded-[10px] bg-[#090B0D] flex items-center justify-center">
                    <reason.icon className={`w-5 h-5 ${reason.iconColor}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#FFC400] transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Footer accent */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div
                    className={`h-0.5 w-8 rounded-full bg-linear-to-r ${reason.accent} group-hover:w-full transition-all duration-700`}
                  ></div>
                </div>
              </div>

              {/* Featured badge */}
              {reason.featured && (
                <div className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest text-[#FFC400] bg-[#FFC400]/10 border border-[#FFC400]/30 px-2 py-0.5 rounded-full">
                  ★ Core Promise
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <Button
              className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-7 py-3 rounded-full shadow-lg shadow-[#FFC400]/30 hover:shadow-[#FFC400]/60 transition-all duration-300 group text-sm"
            >
              <Link href="#" className="flex items-center gap-2">
                <RiCheckboxCircleLine className="w-4 h-4" />
                Experience the Difference
                <RiArrowRightLine className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button

              variant="outline"
              className="border-2 border-white/20 hover:bg-white/10 hover:border-white/40 text-black hover:text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 text-sm backdrop-blur-sm"
            >
              <Link href="#" className="flex items-center gap-2">
                <RiMapPin2Line className="w-4 h-4" />
                Check Availability
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
              <span className="font-medium text-gray-400">24/7 Emergency</span>
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              <RiCarLine className="w-3.5 h-3.5 text-[#FFC400]" />
              All Makes & Models
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              <RiShieldCheckLine className="w-3.5 h-3.5 text-[#FFC400]" />
              100% Genuine Parts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}