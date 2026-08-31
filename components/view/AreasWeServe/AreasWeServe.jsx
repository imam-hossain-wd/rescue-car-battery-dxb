"use client";

import { 
  RiMapPin2Line, 
  RiBuildingLine, 
  RiLandscapeLine, 
  RiCommunityLine,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiTimeLine,
  RiCarLine,
  RiCustomerService2Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AreasWeServe() {
  const areas = [
    {
      id: "central",
      icon: RiBuildingLine,
      title: "Central & SZR",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      locations: ["Downtown Dubai", "Business Bay", "DIFC", "Al Satwa", "Zaa'beel First", "City Walk"],
    },
    {
      id: "coastal",
      icon: RiLandscapeLine,
      title: "Coastal & Marina",
      color: "from-cyan-500/20 to-cyan-500/5",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      locations: ["Dubai Marina", "Jumeirah", "Al Hudaiba", "Al Raffa", "JLT", "Palm Jumeirah"],
    },
    {
      id: "old",
      icon: RiCommunityLine,
      title: "Old Dubai & Creek",
      color: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      locations: ["Deira", "Al Rigga", "Al Mankhool", "Al Karama", "Dubai Creek", "Al Jadaf"],
    },
    {
      id: "suburbs",
      icon: RiBuildingLine,
      title: "Suburbs & Business Parks",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
      locations: ["Damac Hills", "Dubai Silicon Oasis", "Dubai Festival City", "Al Quoz", "Al Jafiliya"],
    },
  ];

  const allLocations = areas.flatMap(area => area.locations);

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiMapPin2Line className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Coverage Areas</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Mobile Emergency Battery Fleet <span className="text-[#FFC400]">Stationed Across All Dubai Areas</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Our mobile mechanics are parked in key regional zones across Dubai, ensuring 5 to 15-minute dispatch times no matter where you are stranded.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className={`group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 transition-all duration-300 border ${area.borderColor} hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${area.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${area.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>

                  {/* Location tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {area.locations.map((location, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${area.borderColor} bg-white/5 text-gray-600 dark:text-gray-300`}
                      >
                        <RiMapPin2Line className={`w-3 h-3 ${area.iconColor}`} />
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Bar */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-10">
          <div className="bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC400]/20 flex items-center justify-center shrink-0">
                  <RiFlashlightLine className="w-5 h-5 text-[#FFC400]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#090B0D] dark:text-white">
                    Don't see your exact neighborhood listed?
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Our mobile fleet covers 100% of Dubai including residential driveways, basement car parks, highways, and office towers.
                  </p>
                </div>
              </div>
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group shrink-0">
                <Link href="#" className="flex items-center gap-2 text-sm">
                  <RiCustomerService2Line className="w-4 h-4" />
                  Call Now for Immediate Arrival
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-center gap-1.5">
                <RiMapPin2Line className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-sm font-bold text-[#090B0D] dark:text-white">
                  {allLocations.length}+
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Areas Covered</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-center gap-1.5">
                <RiTimeLine className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-sm font-bold text-[#090B0D] dark:text-white">
                  5-15
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Min Response Time</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-center gap-1.5">
                <RiCarLine className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-sm font-bold text-[#090B0D] dark:text-white">
                  100%
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Dubai Coverage</p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-center gap-1.5">
                <RiCheckboxCircleLine className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-sm font-bold text-[#090B0D] dark:text-white">
                  24/7
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Emergency Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}