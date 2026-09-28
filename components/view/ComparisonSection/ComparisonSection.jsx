"use client";

import {
  RiCloseLine,
  RiCheckLine,
  RiArrowRightLine,
  RiCarLine,
  RiTimeLine,
  RiMapPin2Line,
  RiBattery2Line,
  RiCustomerService2Line,
  RiRefreshLine,
  RiSparklingLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiToolsLine,
  RiBatteryChargeLine,
  RiMoneyDollarCircleLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ComparisonSection() {
  const comparisons = [
    {
      icon: RiMapPin2Line,
      label: "Location",
      traditional: "Tow to garage",
      rescue: "We come to you",
    },
    {
      icon: RiTimeLine,
      label: "Waiting",
      traditional: "Hours at workshop",
      rescue: "Service on arrival",
    },
    {
      icon: RiCustomerService2Line,
      label: "Availability",
      traditional: "Limited hours",
      rescue: "24/7 support",
    },
    {
      icon: RiCarLine,
      label: "Convenience",
      traditional: "Travel required",
      rescue: "Zero disruption",
    },
    {
      icon: RiBattery2Line,
      label: "Battery",
      traditional: "Uncertain stock",
      rescue: "Matched pre-dispatch",
    },
    {
      icon: RiRefreshLine,
      label: "Installation",
      traditional: "Queues & delays",
      rescue: "On-site, in minutes",
    },
  ];

  const trustPoints = [
    {
      icon: RiFlashlightLine,
      title: "Rapid Dispatch",
      text: "Multiple teams positioned across Dubai, ready when you call.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Verified Technicians",
      text: "Every install is BMS-registered and warranty-backed.",
    },
    {
  icon: RiBatteryChargeLine,
  title: "Genuine Batteries Only",
  text: "Authorized stock from Bosch, Varta, Amaron & more — zero counterfeits.",
},
{
  icon: RiMoneyDollarCircleLine,
  title: "Upfront Fixed Pricing",
  text: "You approve the exact price before we dispatch. No surprises on arrival.",
},
    {
      icon: RiToolsLine,
      title: "Done in One Visit",
      text: "Battery supply, fitting, and ECU registration on-site.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#090B0D] py-10">
      {/* Background */}
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#FFC400]/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER ============ */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Garage Visit vs.{" "}
            <span className="relative inline-block text-[#FFC400]">
              Mobile Rescue
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

        {/* ============ MAIN GRID ============ */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 lg:gap-6 items-start">
          {/* ---------- LEFT: Comparison Card ---------- */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />

            {/* Column labels */}
            <div className="grid grid-cols-[1fr_1fr] gap-2 sm:gap-3 px-4 sm:px-5 pt-5 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-red-500/20 bg-red-500/10">
                  <RiCloseLine className="h-3 w-3 text-red-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                  Traditional
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#FFC400]/30 bg-[#FFC400]/15">
                  <RiCheckLine className="h-3 w-3 text-[#FFC400]" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FFC400]">
                  Mobile Rescue
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            {/* Rows */}
            <div className="divide-y divide-white/[0.05]">
              {comparisons.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group/row grid grid-cols-[1fr_1fr] gap-2 sm:gap-3 items-center px-4 sm:px-5 py-3.5 transition-colors duration-200 hover:bg-white/[0.015]"
                  >
                    {/* Traditional */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02]">
                        <Icon className="h-3.5 w-3.5 text-white" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-300 mb-0.5">
                          {item.label}
                        </div>
                        <div className="truncate text-xs sm:text-sm text-gray-400 line-through decoration-red-500/30">
                          {item.traditional}
                        </div>
                      </div>
                    </div>

                    {/* Rescue */}
                    <div className="relative flex items-center gap-2.5 min-w-0 pl-2 sm:pl-3">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[2px] rounded-full bg-[#FFC400] transition-all duration-300 group-hover/row:h-8" />
                      <div className="min-w-0">
                        <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#FFC400] mb-0.5">
                          {item.label}
                        </div>
                        <div className="truncate text-xs sm:text-sm font-medium text-white">
                          {item.rescue}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.06] bg-gradient-to-r from-[#FFC400]/[0.06] to-transparent px-4 sm:px-5 py-4">
              <p className="text-xs sm:text-sm text-zinc-400 text-center sm:text-left">
                <span className="font-semibold text-[#FFC400]">
                  No towing.
                </span>{" "}
                No queues. Just batteries fixed where you are.
              </p>

              <Button
                asChild
                className={cn(
                  "group/btn h-10 shrink-0 rounded-full bg-[#FFC400] px-5 text-xs font-bold text-[#090B0D]",
                  "shadow-[0_8px_25px_-10px_rgba(255,196,0,0.6)]",
                  "transition-all duration-300",
                  "hover:bg-[#FFC400]/95 hover:shadow-[0_12px_35px_-10px_rgba(255,196,0,0.8)]",
                )}
              >
                <Link href="#" className="flex items-center gap-2">
                  Book Now
                  <RiArrowRightLine className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* ---------- RIGHT: Trust Panel ---------- */}
          <aside className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-5">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC400] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                  The Rescue Standard
                </span>
              </div>

              {/* Trust items */}
              <div className="space-y-4">
                {trustPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className={cn(
                        "group/trust flex items-start gap-3",
                        i !== trustPoints.length - 1 &&
                          "pb-4 border-b border-white/[0.05]",
                      )}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#FFC400]/25 bg-[#FFC400]/10 transition-transform duration-300 group-hover/trust:scale-105">
                        <Icon className="h-4 w-4 text-[#FFC400]" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white mb-0.5">
                          {point.title}
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-400">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}