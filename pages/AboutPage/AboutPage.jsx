// app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RiShieldCheckLine,
  RiAwardLine,
  RiTeamLine,
  RiTruckLine,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiCustomerService2Line,
  RiMapPin2Line,
  RiToolsLine,
  RiCarLine,
  RiTimeLine,
  RiStarFill,
  RiHeartPulseLine,
  RiBattery2Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { SiteConfig } from "@/config/siteConfig";


const { brandName,
  description,
  displayNumber,
  numberCallLink,
  whatsappCallLink,
  location,
  email,
  foundedYear,
  serviceAreas,
  socialLinks,
  city,
  country} = SiteConfig

export default function AboutPage() {
  const stats = [
    {
      value: "15,000+",
      label: "Batteries Replaced",
      icon: RiCarLine,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400"
    },
    {
      value: "4.9/5",
      label: "Customer Rating",
      icon: RiStarFill,
      color: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-400"
    },
    {
      value: "24/7",
      label: "Emergency Support",
      icon: RiCustomerService2Line,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400"
    },
    {
      value: `${serviceAreas.length}+`,
      label: "Areas Covered",
      icon: RiMapPin2Line,
      color: "from-[#FFC400]/20 to-[#FFC400]/5",
      iconColor: "text-[#FFC400]"
    },
  ];

  const values = [
    "No hidden call-out fees",
    "No unnecessary sales pitches",
    "No guesswork",
    "Test battery, starter & alternator in front of you",
    "Explain exact diagnostic readings",
    "Only replace what is necessary",
  ];

  const trustBadges = [
    {
      icon: RiShieldCheckLine,
      label: "RTA-Compliant",
      description: "Fully certified auto electricians",
    },
    {
      icon: RiAwardLine,
      label: "100% Genuine Batteries",
      description: "GCC-rated original batteries",
    },
    {
      icon: RiTeamLine,
      label: "Expert Team",
      description: "Specialized in luxury & hybrid vehicles",
    },
    {
      icon: RiTruckLine,
      label: "Mobile Fleet",
      description: "Dealer-grade diagnostic equipment",
    },
  ];

  return (
    <main className="w-full bg-white dark:bg-[#090B0D] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[#090B0D] overflow-hidden min-h-[60vh] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <RiHeartPulseLine className="w-4 h-4" />
              About Us
            </Badge>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Dubai's Premier Mobile Auto-Electrical &{" "}
              <span className="text-[#FFC400] relative">
                Emergency Battery Authority
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
                <Link href="/contact" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-4 h-4" />
                  Get in Touch
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
                <Link href={whatsappCallLink} target="_blank" className="flex items-center gap-2">
                  <RiFlashlightLine className="w-4 h-4" />
                  Emergency Help
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                Our Story
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Founded in {foundedYear} with a <span className="text-[#FFC400]">Vision to Eliminate Roadside Frustration</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded with a vision to eliminate the frustration, long waiting times, and towing costs associated with roadside breakdowns, <span className="text-white font-medium">{brandName}</span> has grown into Dubai's most trusted mobile car battery replacement network.
              </p>
              <p>
                We operate a fleet of mobile service units equipped with the latest diagnostic technology, dealer-grade computer scanning equipment, and 100% original GCC-rated batteries. Our team consists of RTA-compliant, fully certified auto electricians trained specifically to handle high-end European luxury vehicles, Japanese daily drivers, American muscle cars, and modern Hybrids/EVs.
              </p>
              <p className="text-[#FFC400] font-medium">
                We believe in complete transparency: no hidden call-out fees, no unnecessary sales pitches, and no guesswork. We test your battery, starter motor, and alternator right in front of you, explain the exact diagnostic reading, and only replace what is necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Trust Section */}
      <section className="w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] py-16 sm:py-20 lg:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Values List */}
            <div>
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <RiShieldCheckLine className="w-4 h-4" />
                Our Values
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                What Sets Us Apart
              </h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300">
                    <RiCheckboxCircleLine className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div>
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <RiAwardLine className="w-4 h-4" />
                Trust & Credibility
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Why Dubai Drivers Trust Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-[#FFC400]" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{badge.label}</h4>
                      <p className="text-xs text-gray-400">{badge.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-16 sm:py-20 lg:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <RiMapPin2Line className="w-4 h-4" />
              Coverage Areas
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Serving <span className="text-[#FFC400]">{serviceAreas.length}+ Areas</span> Across {city}, {country}
            </h2>
            <p className="text-gray-400 text-sm">
              Our mobile fleet is stationed across Dubai for rapid 5-15 minute response times
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-all duration-200"
              >
                <RiMapPin2Line className="w-3 h-3 text-[#FFC400]" />
                {area.name}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-2 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200">
              <Link href="/areas" className="flex items-center gap-2 text-sm">
                View All Areas
                <RiArrowRightLine className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#090B0D] border-t border-white/5 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">24/7 Emergency Support</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Experience the <span className="text-[#FFC400]">Rescue Difference?</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Get professional mobile battery service at your doorstep. We're available 24/7 across Dubai.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 group">
                <Link href={whatsappCallLink} target="_blank" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-5 h-5" />
                  Contact Us Now
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200">
                <Link href={numberCallLink} className="flex items-center gap-2">
                  <RiFlashlightLine className="w-5 h-5" />
                  Call {displayNumber}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}