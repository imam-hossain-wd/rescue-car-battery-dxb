"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";



export default function ServiceCard({
  icon: Icon,
  title,
  description,
  popular,
  premium,
  index = 0,
}) {
  return (
    <Link
      href=""
      className="group relative block bg-[#0D1117] rounded-2xl border border-white/8 hover:border-[#FFC400]/40 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FFC400]/10 h-full"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Ambient corner glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFC400]/15 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Diagonal shine sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></div>
      </div>

      {/* Popular/Premium Badge */}
      {(popular || premium) && (
        <div
          className={`absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-sm ${
            popular
              ? "bg-[#FFC400] text-[#090B0D] shadow-lg shadow-[#FFC400]/40"
              : "bg-linear-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/40"
          }`}
        >
          {popular ? "🔥 Popular" : "⭐ Premium"}
        </div>
      )}

      <div className="relative z-10 p-5">
        {/* Icon box */}
        <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-[#FFC400]/20 to-[#FFC400]/[0.03] p-[1.5px] mb-4 shadow-lg shadow-[#FFC400]/5 group-hover:shadow-[#FFC400]/20 transition-shadow duration-500">
          <div className="relative w-full h-full rounded-[10px] bg-[#090B0D] flex items-center justify-center overflow-hidden">
            {/* Icon glow on hover */}
            <div className="absolute inset-0 bg-[#FFC400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Icon className="w-5 h-5 text-[#FFC400] relative z-10 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-white mb-2 leading-snug line-clamp-2 group-hover:text-[#FFC400] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFC400] transition-colors duration-300">
            Learn more
          </span>
          <span className="relative w-7 h-7 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-[#FFC400] group-hover:border-[#FFC400] group-hover:shadow-lg group-hover:shadow-[#FFC400]/40 transition-all duration-300">
            <RiArrowRightUpLine className="w-3.5 h-3.5  group-hover:text-[#090B0D] transition-colors duration-300" />
          </span>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </Link>
  );
}