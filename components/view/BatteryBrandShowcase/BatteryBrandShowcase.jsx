"use client";

import { 
  RiBattery2Line, 
  RiArrowRightLine,
  RiQuestionLine,
  RiCheckboxCircleLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function BatteryBrandShowcase() {
  const brands = [
    { name: "VARTA", logo: "/brands/varta.svg", color: "from-blue-600/20 to-blue-600/5" },
    { name: "Bosch", logo: "/brands/bosch.svg", color: "from-red-600/20 to-red-600/5" },
    { name: "ACDelco", logo: "/brands/acdelco.svg", color: "from-blue-500/20 to-blue-500/5" },
    { name: "Amaron", logo: "/brands/amaron.svg", color: "from-green-600/20 to-green-600/5" },
    { name: "Energizer", logo: "/brands/energizer.svg", color: "from-yellow-500/20 to-yellow-500/5" },
    { name: "Exide", logo: "/brands/exide.svg", color: "from-red-500/20 to-red-500/5" },
    { name: "Solite", logo: "/brands/solite.svg", color: "from-blue-400/20 to-blue-400/5" },
    { name: "Hankook", logo: "/brands/hankook.svg", color: "from-orange-500/20 to-orange-500/5" },
    { name: "Delkor", logo: "/brands/delkor.svg", color: "from-teal-500/20 to-teal-500/5" },
    { name: "Optima", logo: "/brands/optima.svg", color: "from-purple-500/20 to-purple-500/5" },
  ];

  // Split brands into two rows for better display
  const firstRow = brands.slice(0, 5);
  const secondRow = brands.slice(5);

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiBattery2Line className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Premium Brands</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Trusted Battery Brands
          </h2>
          
          <p className="text-lg sm:text-xl font-medium text-[#FFC400] mb-2">
            The Right Battery for Every Car & Budget
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            We stock only genuine, factory-sealed batteries from the world's most trusted manufacturers. Each battery comes with a warranty and is matched perfectly to your vehicle.
          </p>
        </div>

        {/* Brand Grid - Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto mb-4 sm:mb-6">
          {firstRow.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${brand.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Brand Logo Placeholder */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{brand.name}</span>
                </div>
                
                {/* Brand Name */}
                <h3 className="text-sm font-bold text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Grid - Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {secondRow.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${brand.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Brand Logo Placeholder */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{brand.name}</span>
                </div>
                
                {/* Brand Name */}
                <h3 className="text-sm font-bold text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Cards */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#0D1117] rounded-2xl p-6 border border-[#FFC400]/20 hover:shadow-lg hover:shadow-[#FFC400]/5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center shrink-0">
                  <RiCheckboxCircleLine className="w-5 h-5 text-[#FFC400]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#090B0D] dark:text-white mb-1">Expert Recommendations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We match the perfect battery to your vehicle's specifications and driving needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0D1117] rounded-2xl p-6 border border-[#FFC400]/20 hover:shadow-lg hover:shadow-[#FFC400]/5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center shrink-0">
                  <RiQuestionLine className="w-5 h-5 text-[#FFC400]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#090B0D] dark:text-white mb-1">Need Help Choosing?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Not sure which battery fits your car? Send us your vehicle details—we'll recommend the correct option.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                Get Battery Recommendation
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}