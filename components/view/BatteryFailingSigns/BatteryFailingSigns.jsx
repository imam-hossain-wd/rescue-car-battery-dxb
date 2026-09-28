// "use client";

// import { 
//   RiAlertLine, 
//   RiSoundModuleLine, 
//   RiLightbulbLine, 
//   RiDashboardLine,
//   RiCpuLine,
//   RiFlashlightLine,
//   RiCalendarLine,
//   RiCarLine,
//   RiArrowRightLine,
//   RiCheckboxCircleLine,
//   RiToolsLine
// } from "@remixicon/react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function BatteryFailingSigns() {
//   const signs = [
//     {
//       icon: RiCarLine,
//       title: "Engine Cranks Slowly",
//       description: "The engine takes longer than usual to start or turns over sluggishly.",
//       severity: "Medium",
//       color: "from-yellow-500/20 to-yellow-500/5",
//       iconColor: "text-yellow-400",
//     },
//     {
//       icon: RiSoundModuleLine,
//       title: "Clicking Sound When Starting",
//       description: "A rapid clicking noise when you turn the key indicates low battery power.",
//       severity: "High",
//       color: "from-red-500/20 to-red-500/5",
//       iconColor: "text-red-400",
//     },
//     {
//       icon: RiLightbulbLine,
//       title: "Dim Headlights",
//       description: "Headlights appear dimmer than usual, especially when idling.",
//       severity: "Medium",
//       color: "from-blue-500/20 to-blue-500/5",
//       iconColor: "text-blue-400",
//     },
//     {
//       icon: RiDashboardLine,
//       title: "Battery Warning Light",
//       description: "The battery or check engine light illuminates on your dashboard.",
//       severity: "High",
//       color: "from-orange-500/20 to-orange-500/5",
//       iconColor: "text-orange-400",
//     },
//     {
//       icon: RiCpuLine,
//       title: "Electronics Behave Strangely",
//       description: "Power windows, radio, or other electronics malfunction or work intermittently.",
//       severity: "Medium",
//       color: "from-purple-500/20 to-purple-500/5",
//       iconColor: "text-purple-400",
//     },
//     {
//       icon: RiFlashlightLine,
//       title: "Frequent Jump Starts",
//       description: "You find yourself needing jump starts more frequently than before.",
//       severity: "Critical",
//       color: "from-red-600/20 to-red-600/5",
//       iconColor: "text-red-500",
//     },
//     {
//       icon: RiCalendarLine,
//       title: "Battery Older Than Expected",
//       description: "Car batteries typically last 3-5 years. Age is a key indicator of failure.",
//       severity: "Low",
//       color: "from-green-500/20 to-green-500/5",
//       iconColor: "text-green-400",
//     },
//     {
//       icon: RiCarLine,
//       title: "Won't Start After Being Parked",
//       description: "The vehicle starts fine when warm but struggles after sitting for a while.",
//       severity: "High",
//       color: "from-pink-500/20 to-pink-500/5",
//       iconColor: "text-pink-400",
//     },
//   ];

//   return (
//     <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
//             <RiAlertLine className="w-4 h-4 text-[#FFC400]" />
//             <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Warning Signs</span>
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
//             Signs Your Car Battery <span className="text-[#FFC400]">May Be About to Fail</span>
//           </h2>
          
//           <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
//             Don't wait to be stranded. Recognize these early warning signs and get your battery checked before it's too late.
//           </p>
//         </div>

//         {/* Signs Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
//           {signs.map((sign, index) => (
//             <div
//               key={index}
//               className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-5 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1"
//             >
//               {/* Gradient background on hover */}
//               <div className={`absolute inset-0 bg-linear-to-br ${sign.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
//               <div className="relative z-10">
//                 {/* Icon */}
//                 <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
//                   <sign.icon className={`w-5 h-5 ${sign.iconColor}`} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-sm font-bold text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300 mb-1">
//                   {sign.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
//                   {sign.description}
//                 </p>

//                 {/* Severity Badge */}
//                 <div className={`mt-3 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
//                   sign.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
//                   sign.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
//                   sign.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
//                   'bg-green-500/20 text-green-500'
//                 }`}>
//                   {sign.severity} Risk
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-10 sm:mt-12">
//           <div className="inline-flex flex-wrap items-center justify-center gap-4">
//             <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
//               <Link href="#" className="flex items-center gap-2">
//                 <RiToolsLine className="w-4 h-4" />
//                 Not Sure? Request a Battery Check
//                 <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
//               </Link>
//             </Button>
//             <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
//               <Link href="#" className="flex items-center gap-2">
//                 <RiCheckboxCircleLine className="w-4 h-4" />
//                 Get Professional Advice
//               </Link>
//             </Button>
//           </div>
          
//           <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center justify-center gap-1">
//             <span className="inline-block w-1.5 h-1.5 bg-[#FFC400] rounded-full"></span>
//             Early detection can save you from roadside emergencies
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  RiAlertLine,
  RiSoundModuleLine,
  RiLightbulbLine,
  RiDashboardLine,
  RiCpuLine,
  RiFlashlightLine,
  RiCalendarLine,
  RiCarLine,
  RiArrowRightLine,
  RiToolsLine,
  RiShieldCheckLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function BatteryFailingSigns() {
  const signs = [
    {
      icon: RiFlashlightLine,
      title: "Frequent Jump Starts",
      description:
        "You're jump-starting more often than before. The battery isn't holding charge.",
      severity: "critical",
    },
    {
      icon: RiSoundModuleLine,
      title: "Clicking Sound When Starting",
      description:
        "A rapid clicking noise when you turn the key — a classic sign of low power.",
      severity: "critical",
    },
    {
      icon: RiDashboardLine,
      title: "Battery Warning Light",
      description:
        "The battery or check-engine light appears on your dashboard.",
      severity: "high",
    },
    {
      icon: RiCarLine,
      title: "Won't Start After Being Parked",
      description:
        "Starts fine when warm but struggles after sitting for a while.",
      severity: "high",
    },
    {
      icon: RiCarLine,
      title: "Engine Cranks Slowly",
      description:
        "The engine takes longer to start or turns over sluggishly.",
      severity: "medium",
    },
    {
      icon: RiLightbulbLine,
      title: "Dim Headlights",
      description:
        "Headlights look dimmer than usual, especially when idling.",
      severity: "medium",
    },
    {
      icon: RiCpuLine,
      title: "Electronics Behave Strangely",
      description:
        "Windows, radio, or dashboard electronics work intermittently.",
      severity: "medium",
    },
    {
      icon: RiCalendarLine,
      title: "Battery Older Than 3 Years",
      description:
        "Batteries typically last 3–5 years. Age is a key failure indicator.",
      severity: "low",
    },
  ];

  // severity design tokens
  const severityStyles = {
    critical: {
      label: "Critical",
      dot: "bg-red-500",
      dotGlow: "shadow-[0_0_12px_rgba(239,68,68,0.6)]",
      badge:
        "bg-red-500/15 text-red-400 border-red-500/25",
      ring: "border-red-500/25",
      iconBg: "bg-red-500/10 border-red-500/25",
      iconColor: "text-red-400",
      accent: "#EF4444",
    },
    high: {
      label: "High",
      dot: "bg-orange-500",
      dotGlow: "shadow-[0_0_12px_rgba(249,115,22,0.6)]",
      badge:
        "bg-orange-500/15 text-orange-400 border-orange-500/25",
      ring: "border-orange-500/20",
      iconBg: "bg-orange-500/10 border-orange-500/25",
      iconColor: "text-orange-400",
      accent: "#F97316",
    },
    medium: {
      label: "Medium",
      dot: "bg-yellow-500",
      dotGlow: "shadow-[0_0_12px_rgba(234,179,8,0.5)]",
      badge:
        "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
      ring: "border-yellow-500/15",
      iconBg: "bg-yellow-500/10 border-yellow-500/25",
      iconColor: "text-yellow-400",
      accent: "#EAB308",
    },
    low: {
      label: "Low",
      dot: "bg-emerald-500",
      dotGlow: "shadow-[0_0_12px_rgba(16,185,129,0.5)]",
      badge:
        "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
      ring: "border-emerald-500/15",
      iconBg: "bg-emerald-500/10 border-emerald-500/25",
      iconColor: "text-emerald-400",
      accent: "#10B981",
    },
  };

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-red-500/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.04] blur-3xl pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER ============ */}
        <div className="mx-auto max-w-3xl text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Signs Your Car Battery{" "}
            <span className="relative inline-block text-[#FFC400]">
              May Fail
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
            Don't wait to be stranded. Recognize these eight warning signs and
            get your battery checked before it's too late.
          </p>
        </div>

        {/* ============ LEGEND ============ */}
        <div className="mx-auto max-w-5xl mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
          {(["critical", "high", "medium", "low"]).map((level) => {
            const s = severityStyles[level];
            return (
              <div
                key={level}
                className="inline-flex items-center gap-2 text-[11px] font-medium text-zinc-500"
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    s.dot,
                    s.dotGlow,
                  )}
                />
                {s.label} Risk
              </div>
            );
          })}
        </div>

        {/* ============ SIGNS GRID ============ */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {signs.map((sign, index) => {
            const Icon = sign.icon;
            const s = severityStyles[sign.severity];
            return (
              <article
                key={index}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl",
                  "border bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl",
                  "p-5 transition-all duration-500 ease-out",
                  "hover:-translate-y-1.5",
                  s.ring,
                )}
              >
                {/* Top severity hairline */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
                  }}
                />

                {/* Radial glow on hover */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `${s.accent}22` }}
                />

                <div className="relative flex flex-1 flex-col">
                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-4 flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-500",
                      "group-hover:scale-105 group-hover:-rotate-3",
                      s.iconBg,
                    )}
                  >
                    <Icon className={cn("h-5 w-5", s.iconColor)} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold leading-snug text-white transition-colors duration-300">
                    {sign.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">
                    {sign.description}
                  </p>

                  {/* Severity badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                        s.badge,
                      )}
                    >
                      <span
                        className={cn("h-1 w-1 rounded-full", s.dot)}
                      />
                      {s.label}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}