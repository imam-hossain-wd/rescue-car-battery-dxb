// "use client";

// import { Button } from "@/components/ui/button";
// import { RiWhatsappLine, RiCustomerService2Line, RiFlashlightLine, RiShieldCheckLine, RiAwardLine, RiTimeLine } from "@remixicon/react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative w-full bg-white dark:bg-[#090B0D] overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
//           {/* Left Content */}
//           <div className="flex flex-col items-start text-left w-full lg:w-1/2">
//             {/* Eyebrow Badge */}
//             <div className="inline-flex text items-center gap-2 bg-[#FFC400]/10 dark:bg-[#FFC400]/20 text-[#090B0D] dark:text-[#FFC400] px-4 py-2 rounded-full text-xs  font-semibold tracking-wide uppercase border border-[#FFC400]/30 dark:border-[#FFC400]/40 mb-3">
//               <RiFlashlightLine className="w-4 h-4" />
//              <span className=""> 24/7 MOBILE CAR BATTERY SERVICE • ALL DUBAI</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight text-[#090B0D] dark:text-white mb-4">
//               Emergency Car Battery Replacement in Dubai <span className="text-[#FFC400]">We Come to You</span>
//             </h1>

//             {/* Description */}
//             <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
//               Dead battery at home, work, parking or roadside? Our mobile battery rescue team delivers, tests and professionally installs the right battery at your location anywhere in Dubai. Genuine batteries, upfront pricing and fast 24/7 assistance.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center gap-4 mb-8">
//               <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-6 h-auto text-base rounded-full transition-all duration-200 shadow-lg shadow-[#FFC400]/30 hover:shadow-[#FFC400]/50">
//                 <Link href="#" className="flex items-center gap-2">
//                   <RiWhatsappLine className="w-5 h-5" />
//                   Get Battery Rescue Now
//                 </Link>
//               </Button>
//               <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-6 py-6 h-auto text-base rounded-full font-semibold transition-all duration-200">
//                 <Link href="#" className="flex items-center gap-2">
//                   <RiCustomerService2Line className="w-5 h-5" />
//                   Call 24/7
//                 </Link>
//               </Button>
//             </div>

//             {/* Trust Items */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl border-t border-gray-200 dark:border-gray-800 pt-6">
//               <div className="flex items-center gap-2">
//                 <RiTimeLine className="w-5 h-5 text-[#FFC400]" />
//                 <span className="text-sm font-medium text-[#090B0D] dark:text-white">Fast Mobile Dispatch</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <RiShieldCheckLine className="w-5 h-5 text-[#FFC400]" />
//                 <span className="text-sm font-medium text-[#090B0D] dark:text-white">Genuine Batteries</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <RiAwardLine className="w-5 h-5 text-[#FFC400]" />
//                 <span className="text-sm font-medium text-[#090B0D] dark:text-white">Certified Technicians</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <RiShieldCheckLine className="w-5 h-5 text-[#FFC400]" />
//                 <span className="text-sm font-medium text-[#090B0D] dark:text-white">Warranty Included</span>
//               </div>
//             </div>

//             {/* Status Indicator */}
//             <div className="flex items-center gap-2 mt-6 bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-full border border-green-200 dark:border-green-800/50">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//               </span>
//               <span className="text-sm font-semibold text-green-700 dark:text-green-400">
//                 Mobile Rescue Team Available Now
//               </span>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md lg:max-w-full">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
//                 <div className="aspect-4/3 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
//                   <div className="text-center p-8">
//                     <div className="text-6xl sm:text-7xl mb-4">🚗</div>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Branded Service Van</p>
//                     <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Coming Soon</p>
//                   </div>
//                 </div>
//                 {/* Optional: Overlay Badge */}
//                 <div className="absolute top-4 right-4 bg-[#FFC400] text-[#090B0D] px-3 py-1 rounded-full text-xs font-bold">
//                   ⚡ On-Demand
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RiWhatsappLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiComputerLine,
  RiBankCardLine,
  RiAwardLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiCarLine,
  RiMapPin2Line,
  RiTimeLine
} from "@remixicon/react";
import Link from "next/link";

export default function HeroSection() {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const carMakes = [
    "Toyota", "Nissan", "Honda", "Mitsubishi", "Mazda",
    "Hyundai", "Kia", "Ford", "Chevrolet", "Jeep",
    "Lexus", "Infiniti", "Mercedes-Benz", "BMW", "Audi",
    "Porsche", "Range Rover", "Jaguar", "Bentley"
  ];

  const carModels = [
    "Camry", "Accord", "X5", "C-Class", "3 Series",
    "A4", "Cayenne", "Range Rover Sport", "F-Type"
  ];

  const carYears = Array.from({ length: 25 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return year.toString();
  });

  return (
    <section className="relative w-full bg-[#090B0D] overflow-hidden min-h-[90vh] sm:min-h-[85vh] flex items-center">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC400]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-20 left-0 w-32 h-px bg-linear-to-r from-transparent to-[#FFC400]/30"></div>
      <div className="absolute bottom-20 right-0 w-32 h-px bg-linear-to-l from-transparent to-[#FFC400]/30"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge / Pre-Heading */}
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full">
              <RiFlashlightLine className="w-4 h-4" />
              <span>24/7 Emergency Mobile Dispatch Across Dubai • Average Arrival 5–15 Minutes</span>
            </Badge>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Onsite Mobile Car Battery Replacement in Dubai –{" "}
              <span className="text-[#FFC400] relative">
                Arriving in 5–15 Minutes
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            {/* Sub-Heading */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Stuck with a dead car battery at home, work, or on the roadside? Our certified mobile auto electricians bring genuine GCC-spec batteries directly to your location anywhere in Dubai. Includes free digital diagnostics, zero-memory-loss installation, and dealer-level BMS computer registration with upfront pricing and zero hidden fees.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-6 rounded-full text-base shadow-2xl shadow-[#FFC400]/30 hover:shadow-[#FFC400]/50 transition-all duration-200 group w-full sm:w-auto">
                <a href="tel:+971500000000" className="flex items-center justify-center gap-2">
                  <RiCustomerService2Line className="w-5 h-5" />
                  Call Emergency Dispatch Now
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
              
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-6 rounded-full text-base shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 group w-full sm:w-auto">
                <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <RiWhatsappLine className="w-5 h-5" />
                  Send WhatsApp Location Pin
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </div>

            {/* Trust Micro-Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 pt-4">
              <div className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <RiShieldCheckLine className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white">100% Genuine GCC Batteries</p>
                  <p className="text-[10px] text-gray-400">Varta, Amaron, Solite, Bosch, ACDelco</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <RiComputerLine className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white">Free ECU/BMS Coding</p>
                  <p className="text-[10px] text-gray-400">Dealer-level computer registration</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <RiBankCardLine className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white">Pay Onsite</p>
                  <p className="text-[10px] text-gray-400">Cash, Card, or Apple Pay</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <RiAwardLine className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white">12-24 Month Warranty</p>
                  <p className="text-[10px] text-gray-400">Doorstep replacement warranty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Interactive Battery Selector */}
          <div className="lg:pl-4">
            <div className="bg-[#0D1117] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                  <RiCarLine className="w-5 h-5 text-[#FFC400]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Quick Vehicle Battery Lookup</h3>
                  <p className="text-xs text-gray-400">Find your battery & get instant quote</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Select Car Make
                  </label>
                  <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#090B0D]">Choose your car make</option>
                    {carMakes.map((make) => (
                      <option key={make} value={make} className="bg-[#090B0D]">
                        {make}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Select Model
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#090B0D]">Choose your car model</option>
                    {carModels.map((model) => (
                      <option key={model} value={model} className="bg-[#090B0D]">
                        {model}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Select Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#090B0D]">Choose your car year</option>
                    {carYears.map((year) => (
                      <option key={year} value={year} className="bg-[#090B0D]">
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <Button className="w-full bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold py-3 rounded-xl shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
                  <span className="flex items-center justify-center gap-2">
                    Find My Battery & Instant Quote
                    <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </div>

              {/* Trust Note */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <RiTimeLine className="w-3.5 h-3.5 text-[#FFC400]" />
                  <span>Average response: 5-15 minutes • 24/7 availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}