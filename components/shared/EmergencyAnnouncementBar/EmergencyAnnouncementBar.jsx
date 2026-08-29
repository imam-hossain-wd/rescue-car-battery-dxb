"use client";

import { RiWhatsappLine, RiCustomerService2Line, RiFlashlightLine, RiTimeLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EmergencyAnnouncementBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full bg-[#090B0D] dark:bg-[#090B0D] border-b border-[#FFC400]/20 overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC400]/5 via-transparent to-[#FFC400]/5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3">
          {/* Left Side - Main Message */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="hidden sm:flex items-center gap-1.5 text-[#FFC400] flex-shrink-0">
              <RiFlashlightLine className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">24/7</span>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm font-medium text-white truncate">
                {isMobile ? (
                  "⚡ Battery Emergency? Call Now"
                ) : (
                  "24/7 Emergency Car Battery Rescue Across Dubai • Fast Mobile Dispatch • Call or WhatsApp Now"
                )}
              </span>
            </div>

            {/* Desktop ETA Badge - Hidden on mobile */}
            {/* <div className="hidden lg:flex items-center gap-2 ml-2 flex-shrink-0">
              <div className="flex items-center gap-1.5 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-3 py-1">
                <RiTimeLine className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-[11px] font-semibold text-[#FFC400] whitespace-nowrap">5–15 Min Rapid Response*</span>
              </div>
              <span className="text-[9px] text-gray-400 hidden xl:inline whitespace-nowrap">
                *ETA depends on location & traffic
              </span>
            </div> */}
          </div>

          {/* Right Side - Status & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Availability Status */}
            <div className="hidden sm:flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-medium text-green-400 whitespace-nowrap">Available Now</span>
              <span className="text-[11px] font-medium text-gray-400 hidden lg:inline">• 24 Hours</span>
            </div>

            {/* Mobile Simple Status */}
            <div className="sm:hidden flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-medium text-green-400">Available</span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-white/10"></div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="#"
                className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40"
              >
                <RiWhatsappLine className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">WhatsApp</span>
              </Link>
              
              <Link
                href="#"
                className="flex items-center gap-1.5 bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40"
              >
                <RiCustomerService2Line className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Call 24/7</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile ETA Indicator - Shown only on mobile */}
      <div className="lg:hidden border-t border-[#FFC400]/10 bg-[#FFC400]/5 px-4 py-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RiTimeLine className="w-3.5 h-3.5 text-[#FFC400]" />
            <span className="text-[10px] font-semibold text-[#FFC400]">5–15 Min Rapid Response*</span>
          </div>
          <span className="text-[8px] text-gray-400">*ETA depends on location & traffic</span>
        </div>
      </div>
    </div>
  );
}