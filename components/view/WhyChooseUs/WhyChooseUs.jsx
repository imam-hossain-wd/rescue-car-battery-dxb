"use client";

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
  RiAwardLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: RiTimeLine,
      title: "5–15 Minute Response Time",
      description: "Our mobile mechanics are stationed strategically in key Dubai zones (SZR, Marina, Business Bay, Deira, Al Barsha) for fast dispatch.",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
    },
    {
      icon: RiComputerLine,
      title: "Dealer-Grade BMS Computer Coding",
      description: "Modern European and luxury vehicles (BMW, Mercedes, Audi, Porsche) require ECU battery registration to prevent alternator overcharging. We include this service for free.",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      icon: RiShieldCheckLine,
      title: "100% Genuine GCC-Spec Batteries",
      description: "We stock fresh, factory-sealed batteries (Varta, Amaron, Bosch, Solite, ACDelco) engineered with thick lead plates built for extreme Middle East summer heat.",
      color: "from-[#FFC400]/20 to-[#FFC400]/5",
      iconColor: "text-[#FFC400]",
      borderColor: "border-[#FFC400]/30",
    },
    {
      icon: RiBattery2Line,
      title: "Zero Memory-Loss Installation",
      description: "We attach an auxiliary power saver during the battery change so you never lose your radio presets, seat memories, clock times, or navigation calibrations.",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      icon: RiPriceTag3Line,
      title: "Transparent, Honest Pricing",
      description: "What we quote over the phone or WhatsApp is what you pay. No hidden roadside surge charges or surprise technician call-out fees.",
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/30",
    },
    {
      icon: RiTestTubeLine,
      title: "Onsite Diagnostics & Guarantee",
      description: "Full load test of your battery, starter, and alternator before installation, backed by an official 12 to 24-month doorstep replacement warranty.",
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-400",
      borderColor: "border-red-500/30",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiAwardLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Why Dubai Drivers Trust Us Over <span className="text-[#FFC400]">Traditional Garages & Towing Services</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            We've redefined car battery replacement with speed, expertise, and transparency. Here's why thousands of Dubai drivers choose us.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${reason.iconColor}`}>
                  <reason.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative line */}
                <div className={`w-12 h-0.5 bg-[#FFC400]/30 group-hover:w-full transition-all duration-500 mt-4 ${reason.borderColor}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                <RiCheckboxCircleLine className="w-4 h-4" />
                Experience the Difference
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiMapPin2Line className="w-4 h-4" />
                Check Availability
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              24/7 Emergency
            </span>
            <span className="w-px h-3 bg-gray-300 dark:bg-gray-700"></span>
            <span className="flex items-center gap-1.5">
              <RiCarLine className="w-3.5 h-3.5 text-[#FFC400]" />
              All Makes & Models
            </span>
            <span className="w-px h-3 bg-gray-300 dark:bg-gray-700"></span>
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