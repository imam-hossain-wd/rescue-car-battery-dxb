// "use client";

// import { 
//   RiBattery2Line, 
//   RiArrowRightLine,
//   RiShieldCheckLine,
//   RiAwardLine,
//   RiRocket2Line,
//   RiCheckLine
// } from "@remixicon/react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function BatteryCategories() {
//   const categories = [
//     {
//       name: "Essential",
//       icon: RiBattery2Line,
//       description: "Reliable everyday performance",
//       subDescription: "Best for budget-conscious drivers.",
//       price: "Affordable",
//       features: [
//         "Standard battery technology",
//         "Reliable starting power",
//         "12-18 month warranty",
//         "Ideal for older vehicles",
//         "Budget-friendly option",
//       ],
//       color: "from-blue-500/20 to-blue-500/5",
//       borderColor: "border-blue-500/30",
//       iconColor: "text-blue-400",
//       buttonColor: "hover:border-blue-500 hover:text-blue-500",
//       popular: false,
//     },
//     {
//       name: "Standard",
//       icon: RiShieldCheckLine,
//       description: "Balanced performance & warranty",
//       subDescription: "Most popular choice.",
//       price: "Mid-Range",
//       features: [
//         "Enhanced battery technology",
//         "Superior starting power",
//         "24-30 month warranty",
//         "Best value for money",
//         "Suitable for most vehicles",
//       ],
//       color: "from-[#FFC400]/20 to-[#FFC400]/5",
//       borderColor: "border-[#FFC400]/30",
//       iconColor: "text-[#FFC400]",
//       buttonColor: "bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D]",
//       popular: true,
//     },
//     {
//       name: "Premium",
//       icon: RiRocket2Line,
//       description: "High-performance / AGM / EFB",
//       subDescription: "For luxury, Start-Stop and high-electrical-demand vehicles.",
//       price: "Premium",
//       features: [
//         "AGM / EFB technology",
//         "Maximum starting power",
//         "36-48 month warranty",
//         "For Start-Stop vehicles",
//         "Ideal for luxury & performance cars",
//       ],
//       color: "from-purple-500/20 to-purple-500/5",
//       borderColor: "border-purple-500/30",
//       iconColor: "text-purple-400",
//       buttonColor: "hover:border-purple-500 hover:text-purple-500",
//       popular: false,
//     },
//   ];

//   return (
//     <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-8 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
//             <RiAwardLine className="w-4 h-4 text-[#FFC400]" />
//             <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Battery Options</span>
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
//             Choose the Right Battery for <span className="text-[#FFC400]">Your Car & Budget</span>
//           </h2>
          
//           <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
//             We offer three battery tiers to match your vehicle's requirements and your budget. Every option comes with professional installation and warranty.
//           </p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className={`relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
//                 category.popular 
//                   ? 'border-[#FFC400] shadow-2xl shadow-[#FFC400]/10 scale-100 md:scale-105' 
//                   : 'border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50'
//               } hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1`}
//             >
//               {/* Popular Badge */}
//               {category.popular && (
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFC400] text-[#090B0D] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#FFC400]/30">
//                   Most Popular Choice
//                 </div>
//               )}

//               {/* Icon */}
//               <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center mb-4 ${category.iconColor}`}>
//                 <category.icon className="w-7 h-7" />
//               </div>

//               {/* Name */}
//               <h3 className="text-xl lg:text-2xl font-bold text-[#090B0D] dark:text-white mb-1">
//                 {category.name}
//               </h3>

//               {/* Description */}
//               <p className="text-sm font-medium text-[#FFC400] mb-1">
//                 {category.description}
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                 {category.subDescription}
//               </p>

//               {/* Features */}
//               <ul className="space-y-2.5 mb-6">
//                 {category.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-2 text-sm">
//                     <RiCheckLine className={`w-4 h-4 mt-0.5 ${
//                       category.popular ? 'text-[#FFC400]' : 'text-gray-400'
//                     } shrink-0`} />
//                     <span className="text-gray-700 dark:text-gray-300">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Price Badge */}
//               <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
//                 category.popular 
//                   ? 'bg-[#FFC400]/10 text-[#FFC400] border-[#FFC400]/30' 
//                   : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10'
//               } mb-4`}>
//                 {category.price}
//               </div>

//               {/* CTA Button */}
//               <Button 
//                 asChild 
//                 className={`w-full font-bold py-3 rounded-xl transition-all duration-200 ${
//                   category.popular 
//                     ? 'bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40' 
//                     : 'bg-transparent border-2 border-gray-300 dark:border-gray-600 text-[#090B0D] dark:text-white hover:border-[#FFC400] hover:text-[#FFC400]'
//                 }`}
//               >
//                 <Link href="#" className="flex items-center justify-center gap-2">
//                   {category.popular ? 'Choose Standard' : `Choose ${category.name}`}
//                   <RiArrowRightLine className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-12 sm:mt-16">
//           <div className="inline-flex flex-wrap items-center justify-center gap-4">
//             <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
//               <Link href="#" className="flex items-center gap-2">
//                 Compare Battery Options
//                 <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//               </Link>
//             </Button>
//             <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
//               <Link href="#">Get Expert Advice</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  RiBattery2Line,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiRocket2Line,
  RiCheckLine,
  RiAwardLine,
  RiFlashlightLine,
  RiSparklingLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function BatteryCategories() {
  const categories = [
    {
      id: "essential",
      name: "Essential",
      tagline: "Reliable everyday performance",
      description: "Best for budget-conscious drivers who need dependable starting power.",
      icon: RiBattery2Line,
      price: "Affordable",
      warranty: "12–18 mo",
      tech: "Standard",
      accent: "#60A5FA", // blue-400
      features: [
        "Standard lead-acid technology",
        "Reliable cold-start power",
        "12–18 month warranty",
        "Ideal for older vehicles",
        "Budget-friendly option",
      ],
      popular: false,
      cta: "Choose Essential",
    },
    {
      id: "standard",
      name: "Standard",
      tagline: "Balanced performance & warranty",
      description: "Our most popular choice — the sweet spot of price, power, and peace of mind.",
      icon: RiShieldCheckLine,
      price: "Mid-Range",
      warranty: "24–30 mo",
      tech: "Enhanced",
      accent: "#FFC400", // brand yellow
      features: [
        "Enhanced calcium technology",
        "Superior cranking power",
        "24–30 month warranty",
        "Best value for money",
        "Fits most modern vehicles",
      ],
      popular: true,
      cta: "Choose Standard",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "AGM / EFB high-performance",
      description: "Engineered for luxury, Start-Stop, and high-electrical-demand vehicles.",
      icon: RiRocket2Line,
      price: "Premium",
      warranty: "36–48 mo",
      tech: "AGM / EFB",
      accent: "#A855F7", // purple-500
      features: [
        "AGM / EFB technology",
        "Maximum starting power",
        "36–48 month warranty",
        "For Start-Stop vehicles",
        "Ideal for luxury & performance cars",
      ],
      popular: false,
      cta: "Choose Premium",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#090B0D] py-10">
      {/* ---- Background layers ---- */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-3xl pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER ============ */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Choose the Right Battery for{" "}
            <span className="relative inline-block text-[#FFC400]">
              Your Car & Budget
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
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

          <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Three tiers engineered to match your vehicle's requirements. Every
            option includes professional installation, warranty, and mobile
            service across Dubai.
          </p>
        </div>

        {/* ============ TIER GRID ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {categories.map((category) => {
            const Icon = category.icon;
            const isPopular = category.popular;

            return (
              <article
                key={category.id}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl",
                  "border backdrop-blur-xl transition-all duration-500 ease-out",
                  // Base surfaces
                  isPopular
                    ? "border-[#FFC400]/40 bg-gradient-to-b from-[#FFC400]/[0.08] via-white/[0.03] to-white/[0.01]"
                    : "border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01]",
                  // Hover
                  "hover:-translate-y-1.5",
                  isPopular
                    ? "hover:border-[#FFC400]/60 hover:shadow-[0_30px_80px_-30px_rgba(255,196,0,0.5)]"
                    : "hover:border-white/20 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)]",
                  // Popular card grows on desktop
                  isPopular && "lg:scale-[1.03] lg:z-10",
                )}
              >
                {/* Top accent line (accent-colored) */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] opacity-70"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${category.accent}, transparent)`,
                  }}
                />

                {/* Radial accent glow */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-[0.15] transition-opacity duration-700 group-hover:opacity-[0.25]"
                  style={{ background: category.accent }}
                />

                {/* Popular ribbon */}
                {isPopular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC400] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#090B0D] shadow-lg shadow-[#FFC400]/30">
                      <RiSparklingLine className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500",
                      "group-hover:scale-105 group-hover:-rotate-3",
                    )}
                    style={{
                      background: `linear-gradient(135deg, ${category.accent}25, ${category.accent}08)`,
                      borderColor: `${category.accent}40`,
                    }}
                  >
                    <Icon
                      className="h-7 w-7 transition-colors duration-300"
                      style={{ color: category.accent }}
                    />
                  </div>

                  {/* Tier name */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {category.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="mt-1.5 text-sm font-semibold"
                    style={{ color: category.accent }}
                  >
                    {category.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {category.description}
                  </p>

                  {/* Spec pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <SpecPill icon={RiFlashlightLine} label={category.tech} />
                    <SpecPill
                      icon={RiShieldCheckLine}
                      label={category.warranty}
                    />
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{
                            background: `${category.accent}20`,
                          }}
                        >
                          <RiCheckLine
                            className="h-2.5 w-2.5"
                            style={{ color: category.accent }}
                          />
                        </span>
                        <span className="text-sm leading-relaxed text-zinc-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price tag */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Price Range
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-bold",
                        isPopular
                          ? "bg-[#FFC400] text-[#090B0D]"
                          : "border border-white/10 bg-white/[0.04] text-zinc-300",
                      )}
                    >
                      {category.price}
                    </span>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className={cn(
                      "group/btn mt-4 h-12 w-full rounded-xl text-sm font-bold transition-all duration-300",
                      isPopular
                        ? "bg-[#FFC400] text-[#090B0D] shadow-[0_10px_30px_-10px_rgba(255,196,0,0.6)] hover:bg-[#FFC400]/95 hover:shadow-[0_15px_40px_-10px_rgba(255,196,0,0.8)]"
                        : "border border-white/15 bg-white/[0.03] text-white hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
                    )}
                  >
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2"
                    >
                      {category.cta}
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Small sub-components ---------- */

function SpecPill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-400">
      <Icon className="h-3 w-3 text-zinc-500" />
      {label}
    </span>
  );
}