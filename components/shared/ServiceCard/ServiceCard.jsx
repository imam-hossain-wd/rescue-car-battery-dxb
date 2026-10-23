// "use client";

// import { RiArrowRightUpLine } from "@remixicon/react";
// import Link from "next/link";



// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
//   popular,
//   premium,
//   index = 0,
// }) {
//   return (
//     <Link
//       href=""
//       className="group relative block bg-[#0D1117] rounded-2xl border border-white/8 hover:border-[#FFC400]/40 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FFC400]/10 h-full"
//     >
//       {/* Top accent line */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

//       {/* Ambient corner glow */}
//       <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFC400]/15 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//       {/* Diagonal shine sweep */}
//       <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
//         <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></div>
//       </div>

//       {/* Popular/Premium Badge */}
//       {(popular || premium) && (
//         <div
//           className={`absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm ${
//             popular
//               ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/40"
//               : "bg-linear-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/40"
//           }`}
//         >
//           {popular ? "🔥 Popular" : "⭐ Premium"}
//         </div>
//       )}

//       <div className="relative z-10 p-5">
//         {/* Icon box */}
//         <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-[#FFC400]/20 to-[#FFC400]/[0.03] p-[1.5px] mb-4 shadow-lg shadow-[#FFC400]/5 group-hover:shadow-[#FFC400]/20 transition-shadow duration-500">
//           <div className="relative w-full h-full rounded-[10px] bg-[#090B0D] flex items-center justify-center overflow-hidden">
//             {/* Icon glow on hover */}
//             <div className="absolute inset-0 bg-[#FFC400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <Icon className="w-5 h-5 text-[#FFC400] relative z-10 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500" />
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-sm font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-[#FFC400] transition-colors duration-300">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
//           {description}
//         </p>

//         {/* Footer */}
//         <div className="flex items-center justify-between pt-3 border-t border-white/5">
//           <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFC400] transition-colors duration-300">
//             Learn more
//           </span>
//           <span className="relative w-7 h-7 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-[#FFC400] group-hover:border-[#FFC400] group-hover:shadow-lg group-hover:shadow-[#FFC400]/40 transition-all duration-300">
//             <RiArrowRightUpLine className="w-3.5 h-3.5  group-hover:text-[#090B0D] transition-colors duration-300" />
//           </span>
//         </div>
//       </div>

//       {/* Bottom glow line */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
//     </Link>
//   );
// }

// components/shared/ServiceCard/ServiceCard.tsx
"use client";

import Link from "next/link";
import {
  RiArrowRightUpLine,
  RiFlashlightLine,
  RiCheckboxCircleLine,
  RiStarFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

/**
 * World-class reusable service card.
 * Fully data-driven from `services` array in /data/service.js
 *
 * @example
 * <ServiceCard service={services[0]} index={0} />
 */
export default function ServiceCard({ service, index = 0 }) {
  if (!service) return null;

  const {
    icon: Icon,
    title,
    shortDescription,
    slug,
    popular,
    premium,
    category,
  } = service;

  const href = `/services/${slug}`;

  return (
    <Link
      href={href}
      aria-label={title}
      style={{ animationDelay: `${index * 60}ms` }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-[#0D1117]",
        "transition-all duration-500 hover:-translate-y-1.5",
        "hover:border-[#FFC400]/40 hover:shadow-2xl hover:shadow-[#FFC400]/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]/60"
      )}
    >
      {/* =========================================================
          TOP ACCENT LINE
      ========================================================= */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* =========================================================
          AMBIENT CORNER GLOW
      ========================================================= */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#FFC400]/15 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* =========================================================
          DIAGONAL SHINE SWEEP
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 -left-full h-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/[0.06] to-transparent group-hover:left-full transition-all duration-1000" />
      </div>

      {/* =========================================================
          BADGES (Popular / Premium)
      ========================================================= */}
      {(popular || premium) && (
        <div
          className={cn(
            "absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full px-2 py-0.5",
            "text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm",
            popular &&
              "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/40",
            premium &&
              !popular &&
              "bg-linear-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/40"
          )}
        >
          {popular ? (
            <>
              <RiStarFill className="h-2.5 w-2.5" />
              Popular
            </>
          ) : (
            <>
              <RiFlashlightLine className="h-2.5 w-2.5" />
              Premium
            </>
          )}
        </div>
      )}

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative z-10 flex flex-1 flex-col p-5">
        {/* Icon */}
        <div className="relative mb-4 h-12 w-12 rounded-xl bg-linear-to-br from-[#FFC400]/20 to-[#FFC400]/[0.03] p-[1.5px] shadow-lg shadow-[#FFC400]/5 group-hover:shadow-[#FFC400]/20 transition-shadow duration-500">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#090B0D]">
            {/* Icon glow */}
            <div className="absolute inset-0 bg-[#FFC400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Icon className="relative z-10 h-5 w-5 text-[#FFC400] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-snug text-white group-hover:text-[#FFC400] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-gray-400">
          {shortDescription}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3">
          {/* Category pill */}
          <span className="inline-flex items-center gap-1 rounded-md bg-white/[0.04] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-400">
            <RiCheckboxCircleLine className="h-2.5 w-2.5 text-[#FFC400]" />
            {category}
          </span>

          {/* Arrow */}
          <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 group-hover:bg-[#FFC400] group-hover:border-[#FFC400] group-hover:shadow-lg group-hover:shadow-[#FFC400]/40 transition-all duration-300">
            <RiArrowRightUpLine className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#090B0D] transition-colors duration-300" />
          </span>
        </div>
      </div>

      {/* =========================================================
          BOTTOM GLOW LINE
      ========================================================= */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/30 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500" />
    </Link>
  );
}