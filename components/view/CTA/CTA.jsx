"use client";

import { 
  RiWhatsappLine, 
  RiCustomerService2Line, 
  RiFlashlightLine,
  RiMapPin2Line,
  RiShieldCheckLine,
  RiSettings4Line,
  RiArrowRightLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Dark Background with subtle gradient */}
      <div className="absolute inset-0 bg-[#090B0D]"></div>
      
      {/* Background pattern/grid */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">
              24/7 EMERGENCY BATTERY RESCUE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
            Dead Battery? <br className="sm:hidden" />
            <span className="text-[#FFC400]">Don't Wait for a Tow Truck.</span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
            Send us your location and vehicle details. We'll help you find the right battery and dispatch the nearest available mobile technician.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-10">
            <Button  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 group w-full sm:w-auto">
              <Link href="#" className="flex items-center justify-center gap-2">
                <RiWhatsappLine className="w-5 h-5 sm:w-6 sm:h-6" />
                WhatsApp for Immediate Help
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg shadow-lg shadow-[#FFC400]/30 hover:shadow-[#FFC400]/50 transition-all duration-200 group w-full sm:w-auto">
              <Link href="#" className="flex items-center justify-center gap-2">
                <RiCustomerService2Line className="w-5 h-5 sm:w-6 sm:h-6" />
                Call Rescue Team
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Available 24/7
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <RiMapPin2Line className="w-4 h-4 text-[#FFC400]" />
              All Dubai
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <RiShieldCheckLine className="w-4 h-4 text-[#FFC400]" />
              Genuine Batteries
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <RiSettings4Line className="w-4 h-4 text-[#FFC400]" />
              Mobile Installation
            </span>
          </div>

          {/* Emergency Note */}
          <p className="text-xs text-gray-500 mt-6">
            🚨 Emergency response available 24/7 • Average response time 5-15 minutes*
          </p>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/30 to-transparent"></div>
    </section>
  );
}