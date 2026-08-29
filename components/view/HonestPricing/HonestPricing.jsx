"use client";

import { 
  RiBattery2Line, 
  RiTruckLine, 
  RiSettings4Line, 
  RiTestTubeLine,
  RiShieldCheckLine,
  RiPriceTag3Line,
  RiCheckboxCircleLine
} from "@remixicon/react";


export default function HonestPricing() {
  const pricingSteps = [
    {
      icon: RiBattery2Line,
      label: "Battery",
      description: "Genuine battery matched to your car",
    },
    {
      icon: RiTruckLine,
      label: "Delivery",
      description: "Free mobile delivery to your location",
    },
    {
      icon: RiSettings4Line,
      label: "Installation",
      description: "Professional fitting by trained technicians",
    },
    {
      icon: RiTestTubeLine,
      label: "Testing",
      description: "Full battery & charging system check",
    },
    {
      icon: RiShieldCheckLine,
      label: "Warranty",
      description: "Manufacturer warranty included",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
              <RiPriceTag3Line className="w-4 h-4 text-[#FFC400]" />
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Transparent Pricing</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
              No Surprises. <span className="text-[#FFC400]">No Hidden Charges.</span>
            </h2>
            
            <p className="text-lg font-medium text-[#FFC400] mb-2">
              Know Your Battery Price Before We Install It
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Pricing depends on your vehicle, battery technology, capacity, brand and warranty. We'll confirm the recommended battery options and total price before installation begins.
            </p>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-white dark:bg-[#0D1117] rounded-3xl border border-gray-200 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl mb-8 sm:mb-10">
            {/* Steps Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {pricingSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FFC400]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFC400]/20 transition-all duration-300">
                    <step.icon className="w-5 h-5 text-[#FFC400]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#090B0D] dark:text-white mb-0.5">
                    {step.label}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-[#0D1117] px-4 text-sm font-bold text-[#FFC400]">
                  = One Clear Quote
                </span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-2xl px-6 py-3 sm:px-8 sm:py-4">
                <RiCheckboxCircleLine className="w-5 h-5 text-[#FFC400]" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Full price confirmed before any work begins
                </span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center gap-3 bg-white dark:bg-[#0D1117] rounded-xl p-4 border border-gray-200 dark:border-white/10">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <RiCheckboxCircleLine className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#090B0D] dark:text-white">No Hidden Fees</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">What you see is what you pay</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-[#0D1117] rounded-xl p-4 border border-gray-200 dark:border-white/10">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <RiPriceTag3Line className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#090B0D] dark:text-white">Upfront Quote</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Price confirmed before arrival</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-[#0D1117] rounded-xl p-4 border border-gray-200 dark:border-white/10">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                <RiShieldCheckLine className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#090B0D] dark:text-white">Warranty Included</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Protected by manufacturer warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}