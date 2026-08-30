"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  RiShieldCheckLine, 
  RiAwardLine, 
  RiTeamLine,
  RiTruckLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiFlashlightLine,
  RiCustomerService2Line,
  RiMapPin2Line,
  RiToolsLine,
  RiCarLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function WhoWeAre() {
  const trustBadges = [
    {
      icon: RiShieldCheckLine,
      label: "RTA-Compliant",
      description: "Fully certified auto electricians",
    },
    {
      icon: RiAwardLine,
      label: "100% Genuine Batteries",
      description: "GCC-rated original batteries",
    },
    {
      icon: RiTeamLine,
      label: "Expert Team",
      description: "Specialized in luxury & hybrid vehicles",
    },
    {
      icon: RiTruckLine,
      label: "Mobile Fleet",
      description: "Dealer-grade diagnostic equipment",
    },
  ];

  const stats = [
    {
      value: "15,000+",
      label: "Batteries Replaced",
      icon: RiCarLine,
    },
    {
      value: "4.9/5",
      label: "Customer Rating",
      icon: RiAwardLine,
    },
    {
      value: "24/7",
      label: "Emergency Support",
      icon: RiCustomerService2Line,
    },
    {
      value: "134+",
      label: "Areas Covered",
      icon: RiMapPin2Line,
    },
  ];

  const values = [
    "No hidden call-out fees",
    "No unnecessary sales pitches",
    "No guesswork",
    "Test battery, starter & alternator in front of you",
    "Explain exact diagnostic readings",
    "Only replace what is necessary",
  ];

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                <div className="aspect-4/3 bg-linear-to-br from-[#090B0D] to-gray-800 flex items-center justify-center relative">
                  <div className="text-center p-8">
                    {/* Fleet Icon */}
                    <div className="w-24 h-24 mx-auto mb-4 bg-[#FFC400]/10 rounded-2xl flex items-center justify-center">
                      <RiTruckLine className="w-12 h-12 text-[#FFC400]" />
                    </div>
                    <p className="text-white font-bold text-lg">Dubai's Premier Mobile Fleet</p>
                    <p className="text-gray-400 text-sm">Dealer-Grade Equipment • Certified Technicians</p>
                    
                    {/* Branding overlays */}
                    <div className="absolute top-4 left-4 bg-[#FFC400] text-[#090B0D] px-3 py-1 rounded-full text-xs font-bold">
                      ⚡ Since 2020
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#090B0D]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        15,000+ Rescues
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#0D1117] rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-white/10 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                    <RiToolsLine className="w-5 h-5 text-[#FFC400]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#090B0D] dark:text-white">Dealer-Level Diagnostics</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">BMS/ECU Coding Included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
              <RiAwardLine className="w-4 h-4 text-[#FFC400]" />
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-4">
              Dubai's Premier Mobile Auto-Electrical & <span className="text-[#FFC400]">Emergency Battery Authority</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded with a vision to eliminate the frustration, long waiting times, and towing costs associated with roadside breakdowns, our company has grown into Dubai's most trusted mobile car battery replacement network.
              </p>
              <p>
                We operate a fleet of mobile service units equipped with the latest diagnostic technology, dealer-grade computer scanning equipment, and 100% original GCC-rated batteries. Our team consists of RTA-compliant, fully certified auto electricians trained specifically to handle high-end European luxury vehicles, Japanese daily drivers, American muscle cars, and modern Hybrids/EVs.
              </p>
              <p className="font-medium text-[#090B0D] dark:text-white">
                We believe in complete transparency:
              </p>
            </div>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-2">
                  <RiCheckboxCircleLine className="w-4 h-4 text-[#FFC400] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 my-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-white/10">
                  <badge.icon className="w-4 h-4 text-[#FFC400] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#090B0D] dark:text-white">
                      {badge.label}
                    </p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">
                      {badge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-center gap-1.5">
                    <stat.icon className="w-3.5 h-3.5 text-[#FFC400]" />
                    <span className="text-sm font-bold text-[#090B0D] dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
                <Link href="#" className="flex items-center gap-2">
                  Learn More About Us
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-6 py-3 rounded-full font-semibold transition-all duration-200">
                <Link href="#" className="flex items-center gap-2">
                  <RiFlashlightLine className="w-4 h-4" />
                  Emergency Help
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}