"use client";

import { 
  RiTimeLine, 
  RiCarLine, 
  RiCustomerService2Line,
  RiStarFill,
  RiMapPin2Line,
  RiFlashlightLine,
  RiArrowRightLine,
  RiShieldCheckLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmergencyTrustBanner() {
  const trustMetrics = [
    {
      icon: RiTimeLine,
      value: "5–15 Mins",
      label: "Average Onsite Arrival Time",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
    },
    {
      icon: RiCarLine,
      value: "100% Onsite",
      label: "Zero Towing or Garage Visit Required",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      icon: RiCustomerService2Line,
      value: "15,000+",
      label: "Dead Batteries Rescued Across Dubai",
      color: "from-[#FFC400]/20 to-[#FFC400]/5",
      iconColor: "text-[#FFC400]",
      borderColor: "border-[#FFC400]/30",
    },
    {
      icon: RiStarFill,
      value: "4.9 / 5.0",
      label: "Verified Google Customer Rating",
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-500/30",
    },
  ];

  const majorRoads = ["SZR", "Sheikh Mohammed Bin Zayed Road", "Al Khail Road"];

  return (
    <section className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      {/* Animated pulse ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-[#FFC400]/5 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 border border-[#FFC400]/10 rounded-full animate-pulse delay-300"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">🚨 Emergency Response</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-white mb-4 leading-tight">
            Stuck on{" "}
            <span className="text-[#FFC400] relative">
              SZR
              <svg className="absolute -bottom-1 left-0 w-full h-1" viewBox="0 0 100 4" fill="none">
                <path d="M0 2C25 4 75 4 100 2" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
              </svg>
            </span>
            {" "}or In Your Driveway? Our Mobile Mechanics Are On Standby Near You
          </h2>

          {/* Body Text */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Extreme UAE summer temperatures are the number one cause of sudden automotive battery failure. When your engine refuses to crank, do not pay expensive towing fees or wait hours for a breakdown truck. Our fleet of fully equipped mobile service vans is stationed across Dubai's major hubs—from Downtown and Dubai Marina to Deira and Al Barsha—ready to jumpstart or replace your battery on the spot in under 15 minutes.
          </p>

          {/* Major Roads Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs text-gray-400 font-medium">📍 Major Roads:</span>
            {majorRoads.map((road, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-gray-300"
              >
                <RiMapPin2Line className="w-3 h-3 text-[#FFC400]" />
                {road}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className={`group relative bg-[#0D1117] rounded-2xl p-6 text-center transition-all duration-300 border ${metric.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/10 hover:-translate-y-1 hover:border-[#FFC400]/50`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${metric.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                </div>

                {/* Value */}
                <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFC400] transition-colors duration-300">
                  {metric.value}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-tight">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                <RiFlashlightLine className="w-4 h-4" />
                Get Emergency Help Now
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#FFC400]/50 hover:bg-[#FFC400]/10 text-white hover:text-[#FFC400] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiShieldCheckLine className="w-4 h-4" />
                View Service Coverage
              </Link>
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Emergency response available 24/7 • Average arrival 5-15 minutes*
          </p>
        </div>
      </div>
    </section>
  );
}