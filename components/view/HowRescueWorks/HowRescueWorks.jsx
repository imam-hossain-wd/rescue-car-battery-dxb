"use client";

import { 
  RiWhatsappLine, 
  RiBattery2Line, 
  RiTruckLine, 
  RiSettings4Line, 
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowRescueWorks() {
  const steps = [
    {
      number: "01",
      icon: RiWhatsappLine,
      title: "Call or WhatsApp",
      description: "Tell us your car and location.",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
    },
    {
      number: "02",
      icon: RiBattery2Line,
      title: "We Find the Right Battery",
      description: "We match your vehicle with compatible battery options.",
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-[#FFC400]",
      borderColor: "border-[#FFC400]/30",
    },
    {
      number: "03",
      icon: RiTruckLine,
      title: "Technician Comes to You",
      description: "Nearest available mobile mechanic is dispatched.",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      number: "04",
      icon: RiSettings4Line,
      title: "Test & Replace",
      description: "We check the battery/charging system and install professionally.",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      number: "05",
      icon: RiCheckboxCircleLine,
      title: "You're Ready to Drive",
      description: "Receive your battery warranty and get back on the road.",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
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
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Simple Process</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            From Dead Battery to <span className="text-[#FFC400]">Back on the Road</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            No stress. No confusion. Just a simple 5-step process to get you back on the road quickly.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#FFC400]/20 via-[#FFC400]/40 to-[#FFC400]/20 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-6 lg:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Desktop Layout - Alternating sides */}
                <div className={`hidden lg:flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8`}>
                  {/* Content */}
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white dark:bg-[#0D1117] rounded-2xl p-6 border ${step.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/5 transition-all duration-300 group`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-[#FFC400]">{step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#090B0D] dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFC400] shadow-lg shadow-[#FFC400]/30 flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-[#090B0D]">{step.number}</span>
                  </div>

                  {/* Empty spacer */}
                  <div className="w-[calc(50%-2rem)]"></div>
                </div>

                {/* Mobile Layout - Stacked */}
                <div className="lg:hidden relative pl-16 pb-8 last:pb-0">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#FFC400]/30 via-[#FFC400]/50 to-[#FFC400]/30"></div>
                  
                  {/* Dot */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#FFC400] shadow-lg shadow-[#FFC400]/30 flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-[#090B0D]">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className={`bg-white dark:bg-[#0D1117] rounded-2xl p-5 border ${step.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/5 transition-all duration-300 group`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#090B0D] dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-11">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps on mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 bottom-0 transform translate-y-1/2 text-[#FFC400]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Arrow between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center py-4">
                    <svg className="w-6 h-6 text-[#FFC400]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
            <Link href="#" className="flex items-center gap-2">
              Start My Rescue
              <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}