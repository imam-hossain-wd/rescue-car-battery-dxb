// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
// import { services } from "@/data/service";
// import { RiArrowRightLine, RiBankCardLine, RiShieldCheckLine, RiToolsLine } from "@remixicon/react";


// export default function FeaturedServicesSection() {
//   return (
//     <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-5 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
//           <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             <RiToolsLine className="w-4 h-4 text-[#FFC400]" />
//             <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Our Services</span>
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
//             Complete Mobile Car Battery & <span className="text-[#FFC400] relative">
//               Auto-Electrical Services
//               <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
//                 <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
//               </svg>
//             </span>
//           </h2>
          
//           <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
//             From quick emergency roadside jumpstarts to dealer-level computer coding, our mobile garage brings total auto-electrical repair straight to your door.
//           </p>
//         </div>


//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
//           {services.slice(0,8).map((service, index) => (
//             <ServiceCard
//               key={service.id}
//               icon={service.icon}
//               title={service.title}
//               description={service.description}
//               popular={service.popular}
//               premium={service.premium}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Empty State */}
//         {services.length === 0 && (
//           <div className="text-center py-12">
//             <div className="text-4xl mb-4">🔍</div>
//             <p className="text-gray-600 dark:text-gray-300">No services found in this category.</p>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         <div className="text-center mt-10 sm:mt-12">
//           <div className="inline-flex flex-wrap items-center justify-center gap-4">
//             <Button className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
//               <Link href="#" className="flex items-center gap-2">
//                 <RiShieldCheckLine className="w-4 h-4" />
//                 View All Services
//                 <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//               </Link>
//             </Button>
//             <Button variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
//               <Link href="#" className="flex items-center gap-2">
//                 <RiBankCardLine className="w-4 h-4" />
//                 Get Instant Quote
//               </Link>
//             </Button>
//           </div>
          
//           <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center gap-2">
//             <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
//             {services.length} services available • 24/7 emergency support
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

// components/sections/FeaturedServicesSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import { services } from "@/data/service";
import {
  RiArrowRightLine,
  RiBankCardLine,
  RiShieldCheckLine,
  RiToolsLine,
  RiFlashlightLine,
  RiSparklingLine,
} from "@remixicon/react";

export default function FeaturedServicesSection() {
  const featuredServices = services.slice(0, 8);

  return (
    <section className="w-full bg-[#090B0D] py-10 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>

      {/* Radial spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FFC400]/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Border glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400] animate-pulse"></span>
            <RiToolsLine className="w-3.5 h-3.5 text-[#FFC400]" />
            <span className="text-[10px] font-bold text-[#FFC400] uppercase tracking-widest">
              Our Services
            </span>
          </div> */}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Complete Mobile Car Battery &{" "}
            <span className="text-[#FFC400] relative inline-block">
              Auto-Electrical Services
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4C50 8 150 8 200 4"
                  stroke="#FFC400"
                  strokeWidth="2"
                  opacity="0.4"
                />
              </svg>
            </span>
          </h2>

          {/* Sub-heading */}
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            From quick emergency roadside jumpstarts to dealer-level computer coding,
            our mobile garage brings total auto-electrical repair straight to your door.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-colors duration-300">
              <RiFlashlightLine className="w-3 h-3 text-[#FFC400]" />
              24/7 Emergency
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-colors duration-300">
              <RiShieldCheckLine className="w-3 h-3 text-[#FFC400]" />
              Certified Technicians
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[11px] font-medium text-gray-300 backdrop-blur-sm hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-colors duration-300">
              <RiSparklingLine className="w-3 h-3 text-[#FFC400]" />
              Dealer-Level Diagnostics
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
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

        {/* Empty State */}
        {services.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-400">No services found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <Button
              className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-7 py-4 rounded-full  transition-all duration-300 group text-sm"
            >
              <Link href="/services" className="flex items-center gap-2">
                <RiShieldCheckLine className="w-4 h-4" />
                View All Services
                <RiArrowRightLine className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border border-white/20 hover:bg-white/10 hover:border-white hover:text-white text-black px-7 py-3 rounded-full font-semibold transition-all duration-300 text-sm backdrop-blur-sm"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <RiBankCardLine className="w-4 h-4" />
                Get Instant Quote
              </Link>
            </Button>
          </div>

          {/* <p className="text-[11px] text-gray-500 mt-6 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
            <span className="font-medium text-gray-400">
              {services.length} services available
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span>24/7 emergency support across Dubai</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}