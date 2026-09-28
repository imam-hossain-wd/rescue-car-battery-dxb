// // components/MapSection.tsx
// "use client";

// import Link from "next/link";
// import {
//   RiMapPin2Fill,
//   RiPhoneFill,
//   RiWhatsappLine,
//   RiArrowRightLine,
//   RiFlashlightLine,
//   RiNavigationLine,
//   RiCalendarLine,
// } from "@remixicon/react";
// import { Button } from "@/components/ui/button";
// import { SiteConfig } from "@/config/siteConfig";
// import { cn } from "@/lib/utils";

// export default function Maps() {
//   const {
//     brandName,
//     numberCallLink,
//     whatsappCallLink,
//     streetAddress,
//     addressLocality,
//     addressRegion,
//     addressCountry,
//     mapsLink,
//     city,
//     country,
//   } = SiteConfig;

//   const days = [
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[#090B0D] py-10">
//       {/* Background layers */}
//       <div
//         className="absolute inset-0 opacity-[0.035] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
//           backgroundSize: "56px 56px",
//           maskImage:
//             "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
//         }}
//       />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#FFC400]/[0.06] blur-[140px] pointer-events-none" />
//       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* ============ HEADER (compact) ============ */}
//         <div className="mx-auto max-w-2xl text-center mb-10">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
//             Located in{" "}
//             <span className="relative inline-block text-[#FFC400]">
//               {city}, {country}
//               <svg
//                 className="absolute -bottom-1.5 left-0 w-full h-2"
//                 viewBox="0 0 200 8"
//                 fill="none"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M0 4C50 8 150 8 200 4"
//                   stroke="#FFC400"
//                   strokeWidth="2"
//                   opacity="0.4"
//                 />
//               </svg>
//             </span>
//           </h2>
//         </div>

//         {/* ============ MAIN GRID — 40% info / 60% map ============ */}
//         <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5 lg:gap-6 items-stretch">
//           {/* ---------- LEFT 40%: Info ---------- */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-5 sm:p-6">
//             <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />
//             <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

//             <div className="relative flex h-full flex-col">
//               {/* Brand header */}
//               <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.06]">
//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FFC400]/25 bg-[#FFC400]/15">
//                   <RiMapPin2Fill className="h-5 w-5 text-[#FFC400]" />
//                 </div>
//                 <div className="min-w-0">
//                   <h3 className="text-base font-bold text-white truncate">
//                     {brandName}
//                   </h3>
//                   <p className="text-[11px] text-zinc-500">
//                     Mobile Battery Rescue
//                   </p>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-2.5 mb-4">
//                 <RiNavigationLine className="h-4 w-4 text-[#FFC400] shrink-0 mt-0.5" />
//                 <div className="min-w-0">
//                   <p className="text-xs leading-relaxed text-zinc-300">
//                     {streetAddress}, {addressLocality}, {addressRegion},{" "}
//                     {addressCountry}
//                   </p>
//                   {mapsLink && (
//                     <Link
//                       href={mapsLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group/dir mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#FFC400] hover:gap-2 transition-all duration-200"
//                     >
//                       Get Directions
//                       <RiArrowRightLine className="h-3 w-3 transition-transform duration-200 group-hover/dir:translate-x-0.5" />
//                     </Link>
//                   )}
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="h-px bg-white/[0.06] mb-1" />

//               {/* Business hours (compact) */}
//               <div className="flex-1">
//                 <div className="mb-1 flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <RiCalendarLine className="h-3.5 w-3.5 text-[#FFC400]" />
//                     <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//                       Business Hours
//                     </h4>
//                   </div>
//                   <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
//                     <span className="relative flex h-1.5 w-1.5">
//                       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
//                       <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                     </span>
//                     Open Now
//                   </span>
//                 </div>

//                 <ul className="space-y-1">
//                   {days.map((day) => (
//                     <li
//                       key={day}
//                       className="flex items-center justify-between gap-2 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-white/[0.03]"
//                     >
//                       <span className="text-xs text-zinc-400">{day}</span>
//                       <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFC400]">
//                         24 Hours
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Divider */}
//               <div className="h-px bg-white/[0.06] my-2" />

//               {/* Actions */}
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <Button
//                   className={cn(
//                     "group/btn h-10 flex-1 rounded-lg bg-[#FFC400] text-xs font-bold text-[#090B0D]",
//                     "shadow-[0_8px_25px_-10px_rgba(255,196,0,0.6)]",
//                     "transition-all duration-300",
//                     "hover:bg-[#FFC400]/95 hover:shadow-[0_12px_35px_-10px_rgba(255,196,0,0.8)]",
//                   )}
//                 >
//                   <Link
//                     href={numberCallLink}
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <RiPhoneFill className="h-3.5 w-3.5" />
//                     Call Now
//                   </Link>
//                 </Button>

//                 <Button
//                   className={cn(
//                     "group/btn h-10 flex-1 rounded-lg bg-[#25D366] text-xs font-bold text-white",
//                     "shadow-[0_8px_25px_-10px_rgba(37,211,102,0.5)]",
//                     "transition-all duration-300",
//                     "hover:bg-[#25D366]/95 hover:shadow-[0_12px_35px_-10px_rgba(37,211,102,0.7)]",
//                   )}
//                 >
//                   <Link
//                     href={whatsappCallLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2"
//                   >
//                     <RiWhatsappLine className="h-3.5 w-3.5" />
//                     WhatsApp
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* ---------- RIGHT 60%: Map ---------- */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl">
//             <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70 z-20" />

//             <div className="relative h-[400px] sm:h-[500px] lg:h-full lg:min-h-[560px]">
//               <iframe
//                 title={`${brandName} - Location Map`}
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.938197365485!2d55.25122003473435!3d25.18239777407417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1788196351232!5m2!1sen!2sbd"
//                 width="100%"
//                 height="100%"
//                 className="absolute inset-0 h-full w-full"
//                 style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />

//               {/* Overlay tint */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090B0D]/30 via-transparent to-transparent" />

//               {/* Emergency badge */}
//               <div className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-lg bg-[#FFC400] px-3 py-1.5 shadow-[0_10px_30px_-8px_rgba(255,196,0,0.6)]">
//                 <RiFlashlightLine className="h-3 w-3 text-[#090B0D]" />
//                 <span className="text-[11px] font-bold text-[#090B0D]">
//                   24/7 Emergency
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/MapSection.tsx
"use client";

import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiWhatsappLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiNavigationLine,
  RiCalendarLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export default function Maps() {
  const {
    brandName,
    numberCallLink,
    whatsappCallLink,
    streetAddress,
    addressLocality,
    addressRegion,
    addressCountry,
    mapsLink,
    city,
    country,
  } = SiteConfig;

  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#090B0D] py-8">
      {/* Background layers */}
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-[#FFC400]/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER (compact) ============ */}
        <div className="mx-auto max-w-2xl text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.15]">
            Located in{" "}
            <span className="relative inline-block text-[#FFC400]">
              {city}, {country}
              <svg
                className="absolute -bottom-1 left-0 w-full h-2"
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
        </div>

        {/* ============ MAIN GRID — 40% info / 60% map ============ */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 lg:gap-5 items-stretch">
          {/* ---------- LEFT 40%: Info ---------- */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-4 sm:p-5">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

            <div className="relative flex h-full flex-col">
              {/* Brand header */}
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#FFC400]/25 bg-[#FFC400]/15">
                  <RiMapPin2Fill className="h-4 w-4 text-[#FFC400]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white truncate">
                    {brandName}
                  </h3>
                  <p className="text-[10px] text-zinc-500">
                    Mobile Battery Rescue
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 mb-3">
                <RiNavigationLine className="h-3.5 w-3.5 text-[#FFC400] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] leading-relaxed text-zinc-300">
                    {streetAddress}, {addressLocality}, {addressRegion},{" "}
                    {addressCountry}
                  </p>
                  {mapsLink && (
                    <Link
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/dir mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-[#FFC400] hover:gap-1.5 transition-all duration-200"
                    >
                      Get Directions
                      <RiArrowRightLine className="h-2.5 w-2.5 transition-transform duration-200 group-hover/dir:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-2.5" />

              {/* Business hours (ultra-compact) */}
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <RiCalendarLine className="h-3 w-3 text-[#FFC400]" />
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-white">
                      Business Hours
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-400">
                    <span className="relative flex h-1 w-1">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1 w-1 rounded-full bg-emerald-400" />
                    </span>
                    Open
                  </span>
                </div>

                <ul className="grid grid-cols-1 gap-x-3 gap-y-0.5">
                  {days.map((day) => (
                    <li
                      key={day}
                      className="flex items-center justify-between gap-1.5 py-0.5"
                    >
                      <span className="text-xs text-zinc-400">{day}</span>
                      <span className="text-xs tracking-wider text-[#FFC400]">
                        24 Hours
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] my-3" />

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  className={cn(
                    "group/btn h-9 flex-1 rounded-lg bg-[#FFC400] text-[11px] font-bold text-[#090B0D]",
                    "transition-all duration-300",
                  
                  )}
                >
                  <Link
                    href={numberCallLink}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <RiPhoneFill className="h-3 w-3" />
                    Call
                  </Link>
                </Button>

                <Button
                  className={cn(
                    "group/btn h-9 flex-1 rounded-lg bg-[#25D366] text-[11px] font-bold text-white",
                    "transition-all duration-30 hover:bg-green-600"
                  )}
                >
                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <RiWhatsappLine className="h-3 w-3" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT 60%: Map ---------- */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70 z-20" />

            <div className="relative h-[320px] sm:h-[400px] lg:h-full lg:min-h-[420px]">
              <iframe
                title={`${brandName} - Location Map`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.938197365485!2d55.25122003473435!3d25.18239777407417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1788196351232!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay tint */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090B0D]/30 via-transparent to-transparent" />

              {/* Emergency badge */}
              <div className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-lg bg-[#FFC400] px-2.5 py-1 shadow-[0_10px_30px_-8px_rgba(255,196,0,0.6)]">
                <RiFlashlightLine className="h-3 w-3 text-[#090B0D]" />
                <span className="text-[10px] font-bold text-[#090B0D]">
                  24/7 Emergency
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}