"use client";

import { 
  RiBattery2Line, 
  RiArrowRightLine,
  RiShieldCheckLine,
  RiAwardLine,
  RiRocket2Line,
  RiCheckLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BatteryCategories() {
  const categories = [
    {
      name: "Essential",
      icon: RiBattery2Line,
      description: "Reliable everyday performance",
      subDescription: "Best for budget-conscious drivers.",
      price: "Affordable",
      features: [
        "Standard battery technology",
        "Reliable starting power",
        "12-18 month warranty",
        "Ideal for older vehicles",
        "Budget-friendly option",
      ],
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      buttonColor: "hover:border-blue-500 hover:text-blue-500",
      popular: false,
    },
    {
      name: "Standard",
      icon: RiShieldCheckLine,
      description: "Balanced performance & warranty",
      subDescription: "Most popular choice.",
      price: "Mid-Range",
      features: [
        "Enhanced battery technology",
        "Superior starting power",
        "24-30 month warranty",
        "Best value for money",
        "Suitable for most vehicles",
      ],
      color: "from-[#FFC400]/20 to-[#FFC400]/5",
      borderColor: "border-[#FFC400]/30",
      iconColor: "text-[#FFC400]",
      buttonColor: "bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D]",
      popular: true,
    },
    {
      name: "Premium",
      icon: RiRocket2Line,
      description: "High-performance / AGM / EFB",
      subDescription: "For luxury, Start-Stop and high-electrical-demand vehicles.",
      price: "Premium",
      features: [
        "AGM / EFB technology",
        "Maximum starting power",
        "36-48 month warranty",
        "For Start-Stop vehicles",
        "Ideal for luxury & performance cars",
      ],
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      buttonColor: "hover:border-purple-500 hover:text-purple-500",
      popular: false,
    },
  ];

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
            <RiAwardLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Battery Options</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Choose the Right Battery for <span className="text-[#FFC400]">Your Car & Budget</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            We offer three battery tiers to match your vehicle's requirements and your budget. Every option comes with professional installation and warranty.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                category.popular 
                  ? 'border-[#FFC400] shadow-2xl shadow-[#FFC400]/10 scale-100 md:scale-105' 
                  : 'border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50'
              } hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1`}
            >
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFC400] text-[#090B0D] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#FFC400]/30">
                  Most Popular Choice
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center mb-4 ${category.iconColor}`}>
                <category.icon className="w-7 h-7" />
              </div>

              {/* Name */}
              <h3 className="text-xl lg:text-2xl font-bold text-[#090B0D] dark:text-white mb-1">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-sm font-medium text-[#FFC400] mb-1">
                {category.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {category.subDescription}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <RiCheckLine className={`w-4 h-4 mt-0.5 ${
                      category.popular ? 'text-[#FFC400]' : 'text-gray-400'
                    } shrink-0`} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
                category.popular 
                  ? 'bg-[#FFC400]/10 text-[#FFC400] border-[#FFC400]/30' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10'
              } mb-4`}>
                {category.price}
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full font-bold py-3 rounded-xl transition-all duration-200 ${
                  category.popular 
                    ? 'bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40' 
                    : 'bg-transparent border-2 border-gray-300 dark:border-gray-600 text-[#090B0D] dark:text-white hover:border-[#FFC400] hover:text-[#FFC400]'
                }`}
              >
                <Link href="#" className="flex items-center justify-center gap-2">
                  {category.popular ? 'Choose Standard' : `Choose ${category.name}`}
                  <RiArrowRightLine className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                Compare Battery Options
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}