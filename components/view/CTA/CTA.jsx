"use client";

import {
  RiWhatsappLine,
  RiPhoneFill,
  RiArrowRightLine,
  RiMapPin2Line,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiSettings4Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export default function CTA() {
  const { whatsappCallLink, numberCallLink } = SiteConfig;

  const trustItems = [
    { icon: RiFlashlightLine, label: "24/7 Response" },
    { icon: RiMapPin2Line, label: "All Dubai" },
    { icon: RiShieldCheckLine, label: "Genuine Batteries" },
    { icon: RiSettings4Line, label: "Mobile Fitting" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#090B0D] py-8">
      {/* ---- Background layers ---- */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#25D366]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[#FFC400]/[0.05] blur-3xl pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/20 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">


          {/* ---- Headline ---- */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Dead battery?{" "}
            <span className="relative inline-block text-[#FFC400]">
              Skip the tow.
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

          {/* ---- Subheading ---- */}
          <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Send your location on WhatsApp. We'll match the right battery and
            dispatch the nearest available technician.
          </p>

          {/* ---- Buttons ---- */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary: WhatsApp */}
            <Button
              asChild
              className={cn(
                "group/btn h-11 w-full sm:w-auto rounded-full bg-[#25D366] px-6 text-sm font-bold text-white hover:bg-green-600",
                "transition-all duration-300",
                "hover:-translate-y-0.5",
              )}
            >
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <RiWhatsappLine className="h-5 w-5" />
                WhatsApp Us Now
                <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>

            {/* Secondary: Call */}
            <Button
              
              variant="ghost"
              className={cn(
                "group/btn h-11 w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-bold text-white",
                "transition-all duration-300",
                "hover:border-[#FFC400]/50 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
              )}
            >
              <Link
                href={numberCallLink}
                className="flex items-center justify-center gap-2"
              >
                <RiPhoneFill className="h-4 w-4" />
                Or Call Directly
              </Link>
            </Button>
          </div>

          {/* ---- Trust strip ---- */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pt-6 border-t border-white/[0.06]">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 text-xs text-zinc-400"
                >
                  <Icon className="h-3.5 w-3.5 text-[#FFC400]" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}