// components/shared/ServiceCard/ServiceCard.tsx
"use client";

import Link from "next/link";
import {
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiStarFill,
  RiCheckboxCircleLine,
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
      aria-label={`${title} — view full service details`}
      style={{ animationDelay: `${index * 60}ms` }}
      className={cn(
        // Base structure
        "group relative flex h-full flex-col overflow-hidden rounded-2xl",
        // Layered surface
        "bg-linear-to-b from-[#0F1419] via-[#0D1117] to-[#0A0E12]",
        "border border-white/[0.06]",
        // Hover state
        "hover:border-[#FFC400]/50",
        "hover:-translate-y-2",
        "hover:shadow-[0_20px_60px_-15px_rgba(255,196,0,0.25)]",
        // Focus (a11y)
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090B0D]",
        // Motion
        "transition-all duration-500 ease-out will-change-transform"
      )}
    >
      {/* =========================================================
          LAYER 1 — TOP ACCENT LINE
      ========================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-2xl">
        <div className="h-full w-full origin-left scale-x-0 bg-linear-to-r from-transparent via-[#FFC400] to-transparent opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-700" />
      </div>

      {/* =========================================================
          LAYER 2 — CORNER AMBIENT GLOW
      ========================================================= */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#FFC400]/20 opacity-0 blur-[70px] group-hover:opacity-100 transition-opacity duration-700" />

      {/* =========================================================
          LAYER 3 — DIAGONAL SHINE SWEEP
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 -left-full h-full w-2/3 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/[0.07] to-transparent group-hover:left-full transition-all duration-[1200ms] ease-out" />
      </div>

      {/* =========================================================
          LAYER 4 — GRID PATTERN OVERLAY (subtle)
      ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 20%, transparent 70%)",
        }}
      />

      {/* =========================================================
          BADGES — POPULAR / PREMIUM
      ========================================================= */}
      {(popular || premium) && (
        <div
          className={cn(
            "absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full px-2.5 py-1",
            "text-[9px] font-extrabold uppercase tracking-widest",
            "shadow-lg backdrop-blur-sm",
            popular &&
              "bg-[#FFC400] text-[#090B0D] shadow-[#FFC400]/40 animate-[pulse_3s_ease-in-out_infinite]",
            premium &&
              !popular &&
              "bg-linear-to-br from-purple-500 via-purple-600 to-fuchsia-600 text-white shadow-purple-500/50"
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
        {/* -----------------------------------------
            ICON — Dual-layer with glow ring
        ----------------------------------------- */}
        <div className="relative mb-4 inline-flex">
          {/* Outer glow ring on hover */}
          <div className="absolute inset-0 rounded-xl bg-[#FFC400]/30 opacity-0 blur-md group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon frame */}
          <div className="relative h-12 w-12 rounded-xl bg-linear-to-br from-[#FFC400]/25 via-[#FFC400]/10 to-transparent p-[1.5px] group-hover:rotate-3 transition-transform duration-500">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#0A0E12]">
              {/* Inner radial glow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#FFC400]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Icon className="relative z-10 h-5 w-5 text-[#FFC400] group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* -----------------------------------------
            TITLE
        ----------------------------------------- */}
        <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-snug tracking-tight text-white group-hover:text-[#FFC400] transition-colors duration-300">
          {title}
        </h3>

        {/* -----------------------------------------
            DESCRIPTION
        ----------------------------------------- */}
        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {shortDescription}
        </p>

        {/* -----------------------------------------
            FOOTER
        ----------------------------------------- */}
        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3.5">
          {/* Category pill */}
          <span className="inline-flex items-center gap-1 rounded-md bg-white/[0.03] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-500 group-hover:bg-[#FFC400]/10 group-hover:text-[#FFC400]/80 transition-all duration-300">
            <RiCheckboxCircleLine className="h-2.5 w-2.5" />
            {category}
          </span>

          {/* CTA arrow */}
          <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 group-hover:border-[#FFC400] group-hover:bg-[#FFC400] group-hover:shadow-lg group-hover:shadow-[#FFC400]/50 transition-all duration-300">
            <RiArrowRightUpLine className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#090B0D] group-hover:scale-110 transition-all duration-300" />
          </span>
        </div>
      </div>

      {/* =========================================================
          LAYER 5 — BOTTOM GLOW LINE
      ========================================================= */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden rounded-b-2xl">
        <div className="h-full w-full origin-center scale-x-0 bg-linear-to-r from-transparent via-[#FFC400]/60 to-transparent group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </Link>
  );
}