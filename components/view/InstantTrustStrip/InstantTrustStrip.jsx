"use client";

import { 
  RiTimeLine, 
  RiMapPin2Line, 
  RiShieldCheckLine, 
  RiPriceTag3Line, 
  RiCarLine,
  RiStarFill,
  RiCustomerService2Line
} from "@remixicon/react";

export default function InstantTrustStrip() {
  // Trust metrics with icons
  const trustItems = [
    {
      icon: RiTimeLine,
      label: "24/7",
      description: "Emergency Availability",
    },
    {
      icon: RiMapPin2Line,
      label: "All Dubai",
      description: "Mobile Coverage",
    },
    {
      icon: RiShieldCheckLine,
      label: "100%",
      description: "Genuine Batteries",
    },
    {
      icon: RiPriceTag3Line,
      label: "Upfront",
      description: "Honest Pricing",
    },
    {
      icon: RiCarLine,
      label: "All Cars",
      description: "Standard to Luxury",
    },
  ];

  return (
    <section className="w-full bg-linear-to-br from-[#090B0D] via-[#0D1117] to-[#090B0D] border-y border-[#FFC400]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Dubai Drivers Count On Us When Their Battery Lets Them Down
          </h2>
          <div className="w-20 h-1 bg-[#FFC400] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 border border-white/5 hover:border-[#FFC400]/30 hover:scale-105 hover:shadow-lg hover:shadow-[#FFC400]/10"
            >
              {/* Icon */}
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="p-2.5 sm:p-3 bg-[#FFC400]/10 rounded-xl group-hover:bg-[#FFC400]/20 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC400]" />
                </div>
              </div>

              {/* Label */}
              <div className="text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1">
                {item.label}
              </div>

              {/* Description */}
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Future Stats Placeholder - Shown when data is available */}
        {/* Uncomment when you have real data
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="text-2xl sm:text-3xl font-bold text-[#FFC400]">5,000+</div>
              <div className="text-sm sm:text-base text-gray-400">Batteries Replaced</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-[#FFC400]">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC400] fill-[#FFC400]" />
                  ))}
                </div>
              </div>
              <div className="text-sm sm:text-base text-gray-400">Customer Rating</div>
            </div>
            <div className="flex items-center gap-3">
              <RiCustomerService2Line className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFC400]" />
              <div className="text-sm sm:text-base text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
        */}

        {/* Subtle bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/20 to-transparent"></div>
      </div>
    </section>
  );
}