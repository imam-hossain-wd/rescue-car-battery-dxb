"use client";

import { 
  RiCloseLine, 
  RiCheckLine,
  RiArrowRightLine,
  RiCarLine,
  RiTimeLine,
  RiMapPin2Line,
  RiBattery2Line,
  RiCustomerService2Line,
  RiRefreshLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComparisonSection() {
  const comparisons = [
    {
      icon: RiCarLine,
      label: "Service Location",
      traditional: "Drive/tow your vehicle to garage",
      rescue: "We come to your location",
    },
    {
      icon: RiTimeLine,
      label: "Waiting Time",
      traditional: "Wait at workshop for hours",
      rescue: "Service at your location, no waiting",
    },
    {
      icon: RiCustomerService2Line,
      label: "Availability",
      traditional: "Limited opening times",
      rescue: "24/7 emergency support",
    },
    {
      icon: RiMapPin2Line,
      label: "Convenience",
      traditional: "Travel required to get service",
      rescue: "Mobile service comes to you",
    },
    {
      icon: RiBattery2Line,
      label: "Battery Availability",
      traditional: "Uncertain battery availability",
      rescue: "Battery matched before dispatch",
    },
    {
      icon: RiRefreshLine,
      label: "Installation",
      traditional: "Workshop waiting & delays",
      rescue: "On-site replacement done fast",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Why Choose Mobile Rescue</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Why Call a <span className="text-[#FFC400]">Mobile Battery Rescue Service?</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Compare the difference between traditional garage service and our modern mobile rescue solution.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#0D1117] rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#FFC400]/5 border-b border-gray-200 dark:border-white/10">
              <div className="col-span-3 px-4 sm:px-6 py-4 sm:py-5">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Feature
                </span>
              </div>
              <div className="col-span-4 px-4 sm:px-6 py-4 sm:py-5 border-l border-gray-200 dark:border-white/10">
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  Traditional Garage
                </span>
              </div>
              <div className="col-span-5 px-4 sm:px-6 py-4 sm:py-5 border-l border-gray-200 dark:border-white/10 bg-[#FFC400]/5">
                <span className="text-sm font-bold text-[#FFC400] flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC400] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC400]"></span>
                  </span>
                  Rescue Car Battery Dubai
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 ${
                  index !== comparisons.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''
                } hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200`}
              >
                <div className="col-span-3 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#090B0D] dark:text-white">
                    {item.label}
                  </span>
                </div>
                
                <div className="col-span-4 px-4 sm:px-6 py-3 sm:py-4 border-l border-gray-100 dark:border-white/5 flex items-center gap-2">
                  <RiCloseLine className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {item.traditional}
                  </span>
                </div>
                
                <div className="col-span-5 px-4 sm:px-6 py-3 sm:py-4 border-l border-gray-100 dark:border-white/5 bg-[#FFC400]/5 flex items-center gap-2">
                  <RiCheckLine className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#090B0D] dark:text-white">
                    {item.rescue}
                  </span>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="bg-[#FFC400]/5 border-t border-gray-200 dark:border-white/10 px-4 sm:px-6 py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-[#FFC400]">✓</span> Choose convenience, speed, and reliability
                </p>
                <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-2 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group shrink-0">
                  <Link href="#" className="flex items-center gap-2 text-sm">
                    Experience the Difference
                    <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            No towing. No waiting. Just fast, professional battery service at your location.
          </p>
        </div>
      </div>
    </section>
  );
}