"use client";

import { 
  RiCarLine, 
  RiFlashlightLine, 
  RiTestTubeLine, 
  RiSettings4Line,
  RiHeartPulseLine,
  RiTruckLine,
  RiBattery2ChargeLine,
  RiRecycleLine,
  RiArrowRightLine,
  RiBatteryLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: RiCarLine,
      title: "Car Battery Replacement",
      description: "Dead or weak battery replaced at your location.",
      link: "/services/battery-replacement",
      popular: true,
    },
    {
      icon: RiFlashlightLine,
      title: "Emergency Jump Start",
      description: "Professional jump-start assistance when the battery still has usable life.",
      link: "/services/jump-start",
    },
    {
      icon: RiTestTubeLine,
      title: "Battery Testing",
      description: "Battery voltage, condition and starting performance inspection.",
      link: "/services/battery-testing",
    },
    {
      icon: RiSettings4Line,
      title: "Alternator & Charging Test",
      description: "Check whether the actual problem is battery or charging system.",
      link: "/services/alternator-testing",
    },
    {
      icon: RiHeartPulseLine,
      title: "Battery Health Check",
      description: "Early diagnosis before failure.",
      link: "/services/battery-health-check",
    },
    {
      icon: RiTruckLine,
      title: "Battery Delivery & Installation",
      description: "Correct battery delivered and professionally fitted.",
      link: "/services/battery-delivery",
    },
    {
      icon: RiBattery2ChargeLine,
      title: "AGM / EFB Battery Replacement",
      description: "For modern Start-Stop vehicles.",
      link: "/services/agm-efb-replacement",
      premium: true,
    },
    {
      icon: RiRecycleLine,
      title: "Old Battery Removal",
      description: "Responsible removal of the replaced battery.",
      link: "/services/old-battery-removal",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-10relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiBatteryLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Mobile Battery Services
          </h2>
          
          <p className="text-lg sm:text-xl font-medium text-[#FFC400] mb-2">
            Everything Your Car Battery Needs — At Your Location
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            From emergency replacement to comprehensive diagnostics, our mobile service covers every battery need without you leaving your spot.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1 ${
                service.popular ? 'border-[#FFC400]/30 dark:border-[#FFC400]/30' : ''
              } ${service.premium ? 'border-purple-500/30 dark:border-purple-500/30' : ''}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-2 -right-2 bg-[#FFC400] text-[#090B0D] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-[#FFC400]/30">
                  Most Popular
                </div>
              )}
              
              {/* Premium Badge */}
              {service.premium && (
                <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-purple-500/30">
                  Premium
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#FFC400]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFC400]/20 transition-all duration-300">
                <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#FFC400]" />
              </div>

              {/* Title */}
              <h3 className="text-base lg:text-lg font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#FFC400] hover:gap-2 transition-all duration-200 group/link"
              >
                Book Replacement
                <RiArrowRightLine className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                View All Services
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#">Get Emergency Help</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}