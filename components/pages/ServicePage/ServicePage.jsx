// app/services/page.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiFlashlightLine,
  RiTestTubeLine,
  RiTruckLine,
  RiToolsLine,
  RiCpuLine,
  RiBattery2Line,
  RiRecycleLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiFilter3Line,
  RiCustomerService2Line,
  RiTimeLine,
  RiMapPin2Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/config/siteConfig";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { services } from "@/data/service";


const {brandName, description, displayNumber, numberCallLink, whatsappCallLink, city, country }= SiteConfig;

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Services", icon: RiFilter3Line, count: services.length },
    { id: "emergency", label: "Emergency", icon: RiFlashlightLine, count: services.filter(s => s.category === "emergency").length },
    { id: "diagnostics", label: "Diagnostics", icon: RiTestTubeLine, count: services.filter(s => s.category === "diagnostics").length },
    { id: "replacement", label: "Replacement", icon: RiBattery2Line, count: services.filter(s => s.category === "replacement").length },
    { id: "maintenance", label: "Maintenance", icon: RiToolsLine, count: services.filter(s => s.category === "maintenance").length },
    { id: "coding", label: "Coding", icon: RiCpuLine, count: services.filter(s => s.category === "coding").length },
    { id: "delivery", label: "Delivery", icon: RiTruckLine, count: services.filter(s => s.category === "delivery").length },
    { id: "eco", label: "Eco", icon: RiRecycleLine, count: services.filter(s => s.category === "eco").length },
  ];

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return services;
    return services.filter(service => service.category === activeCategory);
  }, [activeCategory]);

  // Get popular and premium services for featured section
  const featuredServices = services.filter(s => s.popular || s.premium).slice(0, 6);

  return (
    <main className="w-full bg-white dark:bg-[#090B0D] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[#090B0D] overflow-hidden min-h-[50vh] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <RiToolsLine className="w-4 h-4" />
              Our Services
            </Badge>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Complete Mobile Car Battery &{" "}
              <span className="text-[#FFC400] relative">
                Auto-Electrical Services
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              From quick emergency roadside jumpstarts to dealer-level computer coding, our mobile garage brings total auto-electrical repair straight to your door across {city}, {country}.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-[#FFC400] font-bold text-lg">{services.length}+</span>
                <span>Services</span>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-[#FFC400] font-bold text-lg">24/7</span>
                <span>Emergency Support</span>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-[#FFC400] font-bold text-lg">5-15</span>
                <span>Min Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] -mt-8 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
                  <RiFlashlightLine className="w-3 h-3" />
                  Featured Services
                </Badge>
                <h2 className="text-lg sm:text-xl font-bold text-white">Popular & Premium Services</h2>
              </div>
              <Link href="#all-services" className="text-[#FFC400] text-sm font-medium hover:gap-2 transition-all duration-200 flex items-center gap-1">
                View All
                <RiArrowRightLine className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  popular={service.popular}
                  premium={service.premium}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="all-services" className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-16 sm:py-20 lg:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <RiToolsLine className="w-4 h-4" />
                All Services
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Every Battery & Auto-Electrical Service <span className="text-[#FFC400]">You Need</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                Browse our complete range of mobile services designed to keep you on the road.
              </p>
            </div>

            {/* Category Filters - Desktop */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/30 scale-105"
                        : "bg-white/5 text-gray-400 hover:bg-[#FFC400]/10 hover:text-[#FFC400] border border-white/10"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#090B0D]" : ""}`} />
                    {category.label}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive 
                        ? "bg-[#090B0D]/10 text-[#090B0D]" 
                        : "bg-white/5 text-gray-500"
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Filter Toggle */}
            <div className="sm:hidden flex items-center justify-center mb-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC400]/10 border border-[#FFC400]/20 text-[#FFC400] text-sm font-medium"
              >
                <RiFilter3Line className="w-4 h-4" />
                Filter Services
                <span className="text-[10px] bg-[#FFC400] text-[#090B0D] px-1.5 py-0.5 rounded-full">
                  {filteredServices.length}
                </span>
              </button>
            </div>

            {/* Mobile Filter Dropdown */}
            {isFilterOpen && (
              <div className="sm:hidden flex flex-wrap items-center justify-center gap-2 mb-6 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-lg animate-in slide-in-from-top-2 duration-300">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/30"
                          : "bg-white/5 text-gray-400 hover:bg-[#FFC400]/10 hover:text-[#FFC400] border border-white/10"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      {category.label}
                      <span className="text-[10px] opacity-60">{category.count}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  popular={service.popular}
                  premium={service.premium}
                  index={index}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-400">No services found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="w-full bg-[#0D1117] py-16 sm:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <RiShieldCheckLine className="w-4 h-4" />
                Why Choose Our Services
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Professional, Reliable & <span className="text-[#FFC400]">Always On Time</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                  <RiTimeLine className="w-6 h-6 text-[#FFC400]" />
                </div>
                <h3 className="text-sm font-bold text-white">Fast Response</h3>
                <p className="text-xs text-gray-400 mt-1">5-15 minute arrival</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                  <RiShieldCheckLine className="w-6 h-6 text-[#FFC400]" />
                </div>
                <h3 className="text-sm font-bold text-white">100% Genuine Parts</h3>
                <p className="text-xs text-gray-400 mt-1">GCC-spec batteries</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                  <RiCustomerService2Line className="w-6 h-6 text-[#FFC400]" />
                </div>
                <h3 className="text-sm font-bold text-white">24/7 Support</h3>
                <p className="text-xs text-gray-400 mt-1">Always available</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                  <RiMapPin2Line className="w-6 h-6 text-[#FFC400]" />
                </div>
                <h3 className="text-sm font-bold text-white">Dubai-Wide</h3>
                <p className="text-xs text-gray-400 mt-1">Full city coverage</p>
              </div>
            </div>
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
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Ready for Service?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Emergency Battery Service? <span className="text-[#FFC400]">We're Here 24/7</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Get professional mobile battery service at your doorstep. Our team is ready to help you now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 group">
                <Link href={whatsappCallLink} target="_blank" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-5 h-5" />
                  WhatsApp Us Now
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