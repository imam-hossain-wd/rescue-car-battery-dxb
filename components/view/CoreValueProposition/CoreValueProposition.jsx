"use client";

import { 
  RiFlashlightLine, 
  RiShieldCheckLine, 
  RiToolsLine, 
  RiPriceTag3Line, 
  RiTimeLine, 
  RiMapPin2Line,
  RiArrowRightLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoreValueProposition() {
  const uspItems = [
    {
      icon: RiFlashlightLine,
      title: "Fast Response",
      description: "Nearest available mobile technician dispatched immediately.",
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-[#FFC400]",
    },
    {
      icon: RiShieldCheckLine,
      title: "Genuine Batteries",
      description: "Factory-sealed batteries sourced from trusted brands.",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
    },
    {
      icon: RiToolsLine,
      title: "Professional Installation",
      description: "Correct battery fitting and terminal installation.",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
    },
    {
      icon: RiPriceTag3Line,
      title: "Honest Pricing",
      description: "Know the price before installation begins.",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
    },
    {
      icon: RiTimeLine,
      title: "24/7 Emergency Support",
      description: "Day, night, weekend or holiday.",
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-400",
    },
    {
      icon: RiMapPin2Line,
      title: "Dubai-Wide Coverage",
      description: "Home, roadside, office, mall parking or basement.",
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Battery Trouble Shouldn't <span className="text-[#FFC400]">Ruin Your Day</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            We built our service around one simple idea: when your battery fails, help should come to you—not the other way around. No towing. No garage waiting. No confusing prices. Just fast mobile support from trained technicians carrying trusted batteries for almost every vehicle.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 sm:p-8 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${item.iconColor}`}>
                  <item.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-[#FFC400]/30 group-hover:w-full transition-all duration-500 mt-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
            <Link href="#" className="flex items-center gap-2">
              Get Battery Rescue Now
              <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}