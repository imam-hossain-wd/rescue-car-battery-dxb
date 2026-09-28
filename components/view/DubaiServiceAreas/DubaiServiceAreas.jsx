"use client";

import {
  RiMapPin2Line,
  RiArrowRightLine,
  RiShieldCheckLine,
  RiRoadMapLine,
  RiNavigationLine,
  RiCustomerService2Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DubaiServiceAreas() {
  // Grouped by zone for better hierarchy than a flat list
  const zones = [
    {
      id: "marina",
      label: "Marina & South",
      areas: [
        { name: "Dubai Marina", slug: "dubai-marina" },
        { name: "JBR", slug: "jbr" },
        { name: "JLT", slug: "jlt" },
        { name: "Palm Jumeirah", slug: "palm-jumeirah" },
        { name: "Dubai Hills", slug: "dubai-hills" },
        { name: "Al Barsha", slug: "al-barsha" },
        { name: "Barsha Heights", slug: "barsha-heights" },
        { name: "Jumeirah", slug: "jumeirah" },
        { name: "Umm Suqeim", slug: "umm-suqeim" },
      ],
    },
    {
      id: "central",
      label: "Central Dubai",
      areas: [
        { name: "Downtown Dubai", slug: "downtown" },
        { name: "Business Bay", slug: "business-bay" },
        { name: "DIFC", slug: "difc" },
        { name: "Sheikh Zayed Road", slug: "sheikh-zayed-road" },
        { name: "Al Quoz", slug: "al-quoz" },
        { name: "JVC", slug: "jvc" },
        { name: "JVT", slug: "jvt" },
        { name: "Arabian Ranches", slug: "arabian-ranches" },
        { name: "Motor City", slug: "motor-city" },
        { name: "Sports City", slug: "sports-city" },
      ],
    },
    {
      id: "east",
      label: "East & Suburbs",
      areas: [
        { name: "Dubai Silicon Oasis", slug: "dubai-silicon-oasis" },
        { name: "International City", slug: "international-city" },
        { name: "Mirdif", slug: "mirdif" },
        { name: "Deira", slug: "deira" },
        { name: "Bur Dubai", slug: "bur-dubai" },
        { name: "Karama", slug: "karama" },
        { name: "Oud Metha", slug: "oud-metha" },
        { name: "Al Nahda", slug: "al-nahda" },
        { name: "Al Qusais", slug: "al-qusais" },
        { name: "Dubai South", slug: "dubai-south" },
      ],
    },
  ];

  const totalAreas = zones.reduce((sum, z) => sum + z.areas.length, 0);

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
        {/* ============ HEADER (editorial 2-col) ============ */}
        <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Dubai-Wide{" "}
              <span className="relative inline-block text-[#FFC400]">
                Mobile Battery
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
              </span>{" "}
              Coverage
            </h2>

            <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Wherever you are in Dubai, our mobile team reaches you. From the
              Marina to Mirdif, from Downtown to Dubai South one call covers
              the entire city.
            </p>
          </div>

          {/* Coverage stat cluster */}
          <div className="flex items-center gap-6 lg:pb-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                Areas Covered
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-white tabular-nums leading-none">
                  {totalAreas}
                </span>
                <span className="text-lg font-semibold text-[#FFC400]">+</span>
              </div>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                Zones
              </span>
              <div className="flex items-center gap-1.5">
                <RiRoadMapLine className="h-4 w-4 text-[#FFC400]" />
                <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums leading-none">
                  {zones.length}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ============ MAIN CONTAINER ============ */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl">
          {/* Top accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

          {/* ---- Container header bar ---- */}
          <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] px-5 sm:px-7 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FFC400]/25 bg-[#FFC400]/10">
                <RiMapPin2Line className="h-5 w-5 text-[#FFC400]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Full Coverage Map
                </h3>
                <p className="text-xs text-zinc-500">
                  Tap any area to view local service details
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Live indicator */}
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-yellow-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                </span>
                24/7 Active
              </span>
            </div>
          </div>

          {/* ---- Zones Grid ---- */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {zones.map((zone) => (
              <div key={zone.id} className="p-5 sm:p-6">
                {/* Zone header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                      {zone.label}
                    </h4>
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold tabular-nums text-zinc-400">
                    {zone.areas.length}
                  </span>
                </div>

                {/* Area list */}
                <ul className="space-y-0.5">
                  {zone.areas.map((area) => (
                    <li key={area.slug}>
                      <p
                        // href={`/dubai/${area.slug}`}
                        className="group/area flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 -mx-2.5 transition-all duration-200 hover:bg-white/[0.04]"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <RiMapPin2Line className="h-3.5 w-3.5 shrink-0 text-[#FFC400] transition-colors duration-200 group-hover/area:text-[#FFC400]" />
                          <span className="truncate text-sm font-medium text-zinc-300 transition-colors duration-200 group-hover/area:text-white">
                            {area.name}
                          </span>
                        </div>

                        <RiArrowRightLine className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-[#FFC400] opacity-100 transition-all duration-300 group-hover/area:translate-x-0" />
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ---- Container footer ---- */}
          <div className="relative border-t border-white/[0.06] bg-white/[0.015] px-5 sm:px-7 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <RiNavigationLine className="h-3.5 w-3.5 text-[#FFC400]/70" />
                <span>
                  Don't see your area? We likely cover it —{" "}
                  <Link
                    href="#"
                    className="font-semibold text-[#FFC400] underline-offset-4 hover:underline"
                  >
                    check availability
                  </Link>
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <RiCustomerService2Line className="h-3.5 w-3.5 text-[#FFC400]/70" />
                <span>Full-time team across Dubai</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM CTA ============ */}
        <div className="mt-10 sm:mt-14">
          <div className="mx-auto max-w-3xl relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 sm:p-8">
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#FFC400]/25 bg-[#FFC400]/10">
                  <RiShieldCheckLine className="h-5 w-5 text-[#FFC400]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Anywhere in Dubai? We've got you covered.
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Share your location and our nearest team is dispatched
                    straight to you.
                  </p>
                </div>
              </div>

              {/* <Button
                
                className="group h-11 shrink-0 rounded-full bg-[#FFC400] px-6 text-sm font-bold text-[#090B0D]  transition-all duration-300 hover:bg-[#FFC400]/95 "
              >
                <Link href="#" className="flex items-center gap-2">
                  Request Service
                  <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}