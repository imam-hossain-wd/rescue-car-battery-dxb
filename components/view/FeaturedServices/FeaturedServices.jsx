import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { services } from "@/data/service";
import { RiArrowRightLine, RiBankCardLine, RiShieldCheckLine, RiToolsLine } from "@remixicon/react";


export default function FeaturedServicesSection() {
  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <RiToolsLine className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Complete Mobile Car Battery & <span className="text-[#FFC400] relative">
              Auto-Electrical Services
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            From quick emergency roadside jumpstarts to dealer-level computer coding, our mobile garage brings total auto-electrical repair straight to your door.
          </p>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
          {services.slice(0,8).map((service, index) => (
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
        {services.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-600 dark:text-gray-300">No services found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                <RiShieldCheckLine className="w-4 h-4" />
                View All Services
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiBankCardLine className="w-4 h-4" />
                Get Instant Quote
              </Link>
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            {services.length} services available • 24/7 emergency support
          </p>
        </div>
      </div>
    </section>
  );
}