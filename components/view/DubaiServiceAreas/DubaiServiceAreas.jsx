"use client";

import { 
  RiMapPin2Line, 
  RiCheckLine,
  RiArrowRightLine,
  RiTimeLine,
  RiCarLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DubaiServiceAreas() {
  const areas = [
    { name: "Dubai Marina", slug: "dubai-marina", eta: "5-10 min" },
    { name: "JBR", slug: "jbr", eta: "5-10 min" },
    { name: "JLT", slug: "jlt", eta: "5-10 min" },
    { name: "Palm Jumeirah", slug: "palm-jumeirah", eta: "8-12 min" },
    { name: "Downtown Dubai", slug: "downtown", eta: "5-10 min" },
    { name: "Business Bay", slug: "business-bay", eta: "5-10 min" },
    { name: "DIFC", slug: "difc", eta: "5-10 min" },
    { name: "Sheikh Zayed Road", slug: "sheikh-zayed-road", eta: "5-10 min" },
    { name: "Al Barsha", slug: "al-barsha", eta: "8-12 min" },
    { name: "Barsha Heights", slug: "barsha-heights", eta: "8-12 min" },
    { name: "Al Quoz", slug: "al-quoz", eta: "10-15 min" },
    { name: "Jumeirah", slug: "jumeirah", eta: "8-12 min" },
    { name: "Umm Suqeim", slug: "umm-suqeim", eta: "10-15 min" },
    { name: "Dubai Hills", slug: "dubai-hills", eta: "10-15 min" },
    { name: "JVC", slug: "jvc", eta: "10-15 min" },
    { name: "JVT", slug: "jvt", eta: "10-15 min" },
    { name: "Arabian Ranches", slug: "arabian-ranches", eta: "12-18 min" },
    { name: "Motor City", slug: "motor-city", eta: "10-15 min" },
    { name: "Sports City", slug: "sports-city", eta: "10-15 min" },
    { name: "Dubai Silicon Oasis", slug: "dubai-silicon-oasis", eta: "12-18 min" },
    { name: "International City", slug: "international-city", eta: "12-18 min" },
    { name: "Mirdif", slug: "mirdif", eta: "15-20 min" },
    { name: "Deira", slug: "deira", eta: "10-15 min" },
    { name: "Bur Dubai", slug: "bur-dubai", eta: "10-15 min" },
    { name: "Karama", slug: "karama", eta: "10-15 min" },
    { name: "Oud Metha", slug: "oud-metha", eta: "10-15 min" },
    { name: "Al Nahda", slug: "al-nahda", eta: "12-18 min" },
    { name: "Al Qusais", slug: "al-qusais", eta: "15-20 min" },
    { name: "Dubai South", slug: "dubai-south", eta: "15-20 min" },
  ];

  // Split areas into columns for better display
  const column1 = areas.slice(0, 10);
  const column2 = areas.slice(10, 20);
  const column3 = areas.slice(20);

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
            <RiMapPin2Line className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Coverage Areas</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Dubai-Wide <span className="text-[#FFC400]">Mobile Battery Coverage</span>
          </h2>
          
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
            Wherever You Are in Dubai, Rescue Comes to You
          </p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We serve every corner of Dubai with rapid response times. Our mobile rescue team is strategically positioned across the city for quick dispatch.
          </p>
        </div>

        {/* Map-style UI with grid */}
        <div className="relative bg-white dark:bg-[#0D1117] rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden">
          {/* Header with stats */}
          <div className="bg-[#FFC400]/5 border-b border-gray-200 dark:border-white/10 px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC400]/20 flex items-center justify-center">
                  <RiMapPin2Line className="w-5 h-5 text-[#FFC400]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#090B0D] dark:text-white">
                    {areas.length}+ Areas Covered
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Rapid response across Dubai
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  24/7 Active
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <RiTimeLine className="w-3.5 h-3.5" />
                  ETA varies by location
                </span>
              </div>
            </div>
          </div>

          {/* Areas Grid */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="space-y-1.5">
                {column1.map((area, index) => (
                  <Link
                    key={index}
                    href={`/dubai/${area.slug}`}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFC400]/5 transition-all duration-200 border border-transparent hover:border-[#FFC400]/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <RiMapPin2Line className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FFC400] transition-colors duration-200" />
                      <span className="text-sm font-medium text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-200">
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 group-hover:text-[#FFC400] transition-colors duration-200">
                        {area.eta}
                      </span>
                      <RiArrowRightLine className="w-3 h-3 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#FFC400] transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-1.5">
                {column2.map((area, index) => (
                  <Link
                    key={index}
                    href={`/dubai/${area.slug}`}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFC400]/5 transition-all duration-200 border border-transparent hover:border-[#FFC400]/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <RiMapPin2Line className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FFC400] transition-colors duration-200" />
                      <span className="text-sm font-medium text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-200">
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 group-hover:text-[#FFC400] transition-colors duration-200">
                        {area.eta}
                      </span>
                      <RiArrowRightLine className="w-3 h-3 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#FFC400] transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-1.5">
                {column3.map((area, index) => (
                  <Link
                    key={index}
                    href={`/dubai/${area.slug}`}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#FFC400]/5 transition-all duration-200 border border-transparent hover:border-[#FFC400]/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <RiMapPin2Line className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FFC400] transition-colors duration-200" />
                      <span className="text-sm font-medium text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-200">
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 group-hover:text-[#FFC400] transition-colors duration-200">
                        {area.eta}
                      </span>
                      <RiArrowRightLine className="w-3 h-3 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#FFC400] transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="bg-gray-50 dark:bg-[#0D1117]/50 border-t border-gray-200 dark:border-white/10 px-4 sm:px-6 py-3">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              <RiTimeLine className="inline w-3 h-3 mr-1" />
              ETA depends on technician location, traffic and your Dubai area. Exact time confirmed after location sharing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}