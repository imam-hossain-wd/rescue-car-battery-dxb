"use client";

import { 
  RiCarLine, 
  RiArrowRightLine,
  RiStarLine,
  RiMarkdownLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AllCarBrands() {
  const standardBrands = [
    "Toyota", "Nissan", "Honda", "Mitsubishi", "Mazda",
    "Hyundai", "Kia", "Ford", "Chevrolet", "Jeep",
    "Lexus", "Infiniti"
  ];

  const premiumBrands = [
    "Mercedes-Benz", "BMW", "Audi", "Porsche", "Range Rover",
    "Jaguar", "Bentley", "Rolls-Royce", "Ferrari",
    "Lamborghini", "Maserati", "McLaren"
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiCarLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">All Makes & Models</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Any Car. <span className="text-[#FFC400]">One Rescue Team.</span>
          </h2>
          
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
            Battery Replacement for All Major Car Brands
          </p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            From everyday commuters to luxury supercars, we have the right battery for every vehicle.
          </p>
        </div>

        {/* Standard Brands */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <RiStarLine className="w-3.5 h-3.5" />
              Popular Brands
            </span>
            <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {standardBrands.map((brand, index) => (
              <Link
                key={index}
                href={`/car-brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-white dark:bg-[#0D1117] rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-lg hover:shadow-[#FFC400]/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{brand.substring(0, 3)}</span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                  {brand}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Premium Brands */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <RiMarkdownLine className="w-3.5 h-3.5 text-[#FFC400]" />
              Luxury & Performance
            </span>
            <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {premiumBrands.map((brand, index) => (
              <Link
                key={index}
                href={`/car-brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-white dark:bg-[#0D1117] rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-lg hover:shadow-[#FFC400]/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-[#FFC400]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <RiMarkdownLine className="w-5 h-5 text-[#FFC400]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                  {brand}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                Find Battery for My Car
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#">View All Brands</Link>
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            * Don't see your car? We support all makes and models. Contact us for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}