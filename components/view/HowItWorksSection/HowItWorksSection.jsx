// import { 
//   RiMapPin2Line, 
//   RiTimeLine, 
//   RiSettings4Line, 
//   RiBankCardLine,
//   RiWhatsappLine,
//   RiCustomerService2Line,
//   RiArrowRightLine,
//   RiCheckboxCircleLine,
//   RiNumber1,
//   RiNumber2,
//   RiNumber3,
//   RiNumber4
// } from "@remixicon/react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function HowItWorksSection() {
//   const steps = [
//     {
//       number: "01",
//       icon: RiMapPin2Line,
//       title: "Share Your Live Location & Car Details",
//       description: "Call our 24/7 hotline or send us your Google Maps location pin over WhatsApp. Tell us your car make, model, and year so we dispatch the exact OEM battery chemistry (AGM, EFB, or Standard SLI).",
//       color: "from-blue-500/20 to-blue-500/5",
//       iconColor: "text-blue-400",
//       borderColor: "border-blue-500/30",
//       gradient: "from-blue-600/20 to-blue-600/5",
//     },
//     {
//       number: "02",
//       icon: RiTimeLine,
//       title: "5–15 Minute Mobile Technician Arrival",
//       description: "Our nearest certified auto electrician is dispatched immediately in a specialized mobile vehicle equipped with high-precision digital diagnostic tools, auxiliary memory power supplies, and fresh batteries.",
//       color: "from-[#FFC400]/20 to-[#FFC400]/5",
//       iconColor: "text-[#FFC400]",
//       borderColor: "border-[#FFC400]/30",
//       gradient: "from-[#FFC400]/20 to-[#FFC400]/5",
//     },
//     {
//       number: "03",
//       icon: RiSettings4Line,
//       title: "Onsite Diagnostic, Swap & BMS Registration",
//       description: "We run a full digital load test on your battery, starter motor, and alternator. Once confirmed, we swap your battery using an auxiliary power keeper to preserve your car's memory settings, followed by computerized ECU/BMS coding.",
//       color: "from-purple-500/20 to-purple-500/5",
//       iconColor: "text-purple-400",
//       borderColor: "border-purple-500/30",
//       gradient: "from-purple-600/20 to-purple-600/5",
//     },
//     {
//       number: "04",
//       icon: RiBankCardLine,
//       title: "Onsite Digital System Report & Easy Payment",
//       description: "You receive a printed/digital battery health report and an official warranty certificate. Pay easily at your vehicle using Cash, Credit Card, or Apple Pay only after you are 100% satisfied.",
//       color: "from-green-500/20 to-green-500/5",
//       iconColor: "text-green-400",
//       borderColor: "border-green-500/30",
//       gradient: "from-green-600/20 to-green-600/5",
//     },
//   ];

//   return (
//     <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-10 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
//             <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Simple Process</span>
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
//             How Our Doorstep Mobile Car Battery <span className="text-[#FFC400]">Replacement Service Works</span>
//           </h2>
          
//           <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
//             Get back on the road in 4 simple steps without stepping foot in an auto repair shop.
//           </p>
//         </div>

//         {/* Steps - Desktop Timeline */}
//         <div className="hidden lg:block max-w-5xl mx-auto relative">
//           {/* Connecting Line */}
//           <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-linear-to-b from-[#FFC400]/20 via-[#FFC400]/40 to-[#FFC400]/20 transform -translate-x-1/2"></div>
          
//           <div className="space-y-2">
//             {steps.map((step, index) => (
//               <div key={index} className="relative">
//                 <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}>
//                   {/* Content */}
//                   <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
//                     <div className={`bg-white dark:bg-[#0D1117] rounded-2xl p-6 border ${step.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/5 transition-all duration-300 group hover:border-[#FFC400]/50`}>
//                       {/* Gradient background on hover */}
//                       <div className={`absolute inset-0 bg-linear-to-br ${step.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                      
//                       <div className="relative z-10">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
//                             <step.icon className="w-5 h-5" />
//                           </div>
//                           <span className="text-sm font-bold text-[#FFC400]">{step.number}</span>
//                         </div>
//                         <h3 className="text-lg font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
//                           {step.title}
//                         </h3>
//                         <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Center Circle */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-[#FFC400] shadow-lg shadow-[#FFC400]/30 flex items-center justify-center z-10">
//                     <span className="text-lg font-bold text-[#090B0D]">{step.number}</span>
//                   </div>

//                   {/* Empty spacer */}
//                   <div className="w-[calc(50%-2rem)]"></div>
//                 </div>

//                 {/* Arrow connector between steps */}
//                 {index < steps.length - 1 && (
//                   <div className="flex justify-center py-2">
//                     <svg className="w-6 h-6 text-[#FFC400]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Steps - Mobile/Tablet Stacked */}
//         <div className="lg:hidden space-y-6">
//           {steps.map((step, index) => (
//             <div key={index} className="relative">
//               {/* Step Card */}
//               <div className={`bg-white dark:bg-[#0D1117] rounded-2xl p-6 border ${step.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/5 transition-all duration-300 group hover:border-[#FFC400]/50`}>
//                 {/* Gradient background on hover */}
//                 <div className={`absolute inset-0 bg-linear-to-br ${step.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                
//                 <div className="relative z-10">
//                   {/* Header with number and icon */}
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-[#FFC400] flex items-center justify-center shadow-lg shadow-[#FFC400]/30 shrink-0">
//                       <span className="text-sm font-bold text-[#090B0D]">{step.number}</span>
//                     </div>
//                     <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
//                       <step.icon className="w-5 h-5" />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-base font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Arrow between steps */}
//               {index < steps.length - 1 && (
//                 <div className="flex justify-center py-3">
//                   <svg className="w-6 h-6 text-[#FFC400]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  RiMapPin2Line,
  RiTimeLine,
  RiSettings4Line,
  RiBankCardLine,
  RiArrowRightLine,
  RiWhatsappLine,
  RiCustomerService2Line,
  RiCheckboxCircleLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: RiMapPin2Line,
      title: "Share Location & Car Details",
      description: "Send your location pin with car make, model & year. We dispatch the exact OEM battery chemistry.",
     accent: "from-[#FFC400] to-yellow-300",
      glow: "shadow-[#FFC400]/40",
      textAccent: "text-[#FFC400]",
      tag: "Step One",
    },
    {
      number: "02",
      icon: RiTimeLine,
      title: "5–15 Minute Arrival",
      description: "Nearest certified electrician arrives with diagnostic tools, memory saver & fresh batteries.",
      accent: "from-[#FFC400] to-yellow-300",
      glow: "shadow-[#FFC400]/40",
      textAccent: "text-[#FFC400]",
      tag: "Step Two",
    },
    {
      number: "03",
      icon: RiSettings4Line,
      title: "Diagnose, Swap & BMS Code",
      description: "Full load test on battery, starter & alternator. Swap with memory saver + free ECU/BMS coding.",
      accent: "from-[#FFC400] to-yellow-300",
      glow: "shadow-[#FFC400]/40",
      textAccent: "text-[#FFC400]",
      tag: "Step Three",
    },
    {
      number: "04",
      icon: RiBankCardLine,
      title: "Report & Easy Payment",
      description: "Digital health report + warranty certificate. Pay with Cash, Card, or Apple Pay.",
     accent: "from-[#FFC400] to-yellow-300",
      glow: "shadow-[#FFC400]/40",
      textAccent: "text-[#FFC400]",
      tag: "Step Four",
    },
  ];

  return (
    <section className="w-full bg-[#090B0D] py-5 relative overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
      
      {/* Radial gradient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFC400]/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          {/* <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/30 rounded-full px-3.5 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#FFC400] rounded-full animate-pulse shadow-lg shadow-[#FFC400]/50"></span>
            <span className="text-[10px] font-bold text-[#FFC400] uppercase tracking-widest">Simple 4-Step Process</span>
          </div> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            How Our <span className="text-[#FFC400] relative inline-block">
              Doorstep Service
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/60 to-transparent"></span>
            </span> Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card */}
              <div className="relative bg-linear-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-[#FFC400]/40 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">

                {/* Top gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r ${step.accent}`}></div>

                {/* Corner glow on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${step.accent} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`}></div>

                {/* Inner border shine */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Number watermark */}
                <span className="absolute top-2 right-3 text-6xl font-black text-white/[0.04] group-hover:text-[#FFC400]/10 transition-colors duration-500 select-none leading-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  {/* Icon with dual-layer */}
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.accent} p-[1.5px] mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${step.glow}`}>
                    <div className="w-full h-full rounded-[10px] bg-[#090B0D] flex items-center justify-center">
                      <step.icon className={`w-5 h-5 ${step.textAccent}`} />
                    </div>
                  </div>

                  {/* Tag */}
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-widest ${step.textAccent} mb-1.5`}>
                    {step.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-[#FFC400] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
                  <div className={`h-full w-0 group-hover:w-full bg-linear-to-r ${step.accent} transition-all duration-700`}></div>
                </div>
              </div>

              {/* Desktop connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#090B0D] border border-white/10 items-center justify-center shadow-lg shadow-black/50 backdrop-blur-sm">
                  <RiArrowRightLine className="w-3.5 h-3.5 text-[#FFC400]" />
                </div>
              )}

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-3">
                  <div className="w-7 h-7 rounded-full bg-[#090B0D] border border-white/10 flex items-center justify-center rotate-90 shadow-lg">
                    <RiArrowRightLine className="w-3.5 h-3.5 text-[#FFC400]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
      
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[10px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <RiCheckboxCircleLine className="w-3.5 h-3.5 text-[#FFC400]" />
              No hidden charges
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              <RiCheckboxCircleLine className="w-3.5 h-3.5 text-[#FFC400]" />
              Pay after service
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              <RiCheckboxCircleLine className="w-3.5 h-3.5 text-[#FFC400]" />
              Warranty included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}