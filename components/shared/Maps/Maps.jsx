"use client"

import { useState } from "react";
import Link from "next/link";
import {
  RiMapPinFill,
  RiNavigationFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiRoadMapFill,
  RiArrowRightLine,
  RiFlashlightFill,
  RiWhatsappFill,
  RiPhoneFill,
  RiCalendarFill,
  RiCarFill,
  RiCheckboxCircleFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

export default function Maps() {
  const {
    GMB,
    serviceAreas,
    brandName,
    city,
    country,
    location,
    numberCallLink,
    whatsappCallLink,
    streetAddress,
    addressLocality,
    addressRegion,
    addressCountry,
    mapsLink,
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-background py-8">
      {/* ============================================================
          BACKGROUND DECORATIVE LAYER
      ============================================================ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />

        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-primary/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}
        <div className="mb-12">

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Located in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">
                    {city}, {country}
                  </span>
                  <span className="absolute inset-x-0 bottom-2 z-0 h-4 bg-primary/15" />
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our mobile fleet is strategically positioned across every major
                Dubai district — ready to reach you within{" "}
                <span className="font-bold text-foreground">
                  5–15 minutes
                </span>
                , 24/7.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <StatChip
                icon={<RiTimeFill className="size-4" />}
                label="5–15 Min Response"
              />
              <StatChip
                icon={<RiMapPinFill className="size-4" />}
                label={`${serviceAreas.length}+ Areas`}
              />
              <StatChip
                icon={<RiShieldCheckFill className="size-4" />}
                label="Full Coverage"
              />
            </div>
          </div>
        </div>

        {/* ============================================================
            MAIN GRID — Map (left 7) + Business Info (right 5)
        ============================================================ */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {/* ==================================================
              LEFT: MAP CARD (7 cols)
          ================================================== */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="pointer-events-none absolute left-4 top-4 z-20">
                <div className="absolute left-0 top-0 h-px w-6 bg-primary" />
                <div className="absolute left-0 top-0 h-6 w-px bg-primary" />
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4 z-20">
                <div className="absolute bottom-0 right-0 h-px w-6 bg-primary" />
                <div className="absolute bottom-0 right-0 h-6 w-px bg-primary" />
              </div>

              <div className="relative z-10 flex items-center justify-between border-b border-border bg-muted/40 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                    Live Location
                  </span>
                </div>
                <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
                  <RiNavigationFill className="size-4 text-primary" />
                  <span className="font-mono font-semibold">GPS Verified</span>
                </div>
              </div>

              <div className="relative aspect-4/3 w-full bg-muted lg:aspect-16/11">
                {!isMapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="flex flex-col items-center gap-3">
                      <RiRoadMapFill className="size-10 animate-pulse text-primary/60" />
                      <span className="text-sm font-medium text-muted-foreground">
                        Loading map...
                      </span>
                    </div>
                  </div>
                )}

                <iframe
                  title={`${brandName} Location Map`}
                  src={
                    GMB.embed ||
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.938197365485!2d55.25122003473435!3d25.18239777407417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1788196351232!5m2!1sen!2sbd"
                  }
                  width="100%"
                  height="100%"
                  className={cn(
                    "size-full transition-opacity duration-700",
                    isMapLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    border: 0,
                    filter: "grayscale(0.15) contrast(1.05)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>

              <div className="relative z-10 border-t border-border bg-muted/40 px-5 py-4 backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <RiMapPinFill className="size-4 text-primary" />
                    {location || `${streetAddress}, ${addressLocality}`}
                  </span>
                  <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <RiTimeFill className="size-4 text-primary" />
                    24/7 Available
                  </span>
                  <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <RiShieldCheckFill className="size-4 text-primary" />
                    GPS Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT: BUSINESS INFO CARD (5 cols)
          ================================================== */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/[0.04] dark:shadow-black/20">
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

              <div className="pointer-events-none absolute right-4 top-4 z-10">
                <div className="absolute right-0 top-0 h-px w-6 bg-primary/60" />
                <div className="absolute right-0 top-0 h-6 w-px bg-primary/60" />
              </div>

              <div className="relative p-6 sm:p-7">
                {/* Brand Header */}
                <div className="flex items-start gap-4 pb-5 border-b border-border">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                    <RiMapPinFill className="size-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                      {brandName}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mobile Battery Rescue Service
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="pt-5 pb-5 border-b border-border">
                  <div className="flex items-start gap-3">
                    <RiNavigationFill className="size-5 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Address
                      </p>
                      <p className="text-sm leading-relaxed text-foreground">
                        {streetAddress}, {addressLocality}, {addressRegion},{" "}
                        {addressCountry}
                      </p>
                      {mapsLink && (
                        <Link
                          href={mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2 transition-all duration-200"
                        >
                          Get Directions
                          <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="pt-5 pb-5 border-b border-border">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <RiCalendarFill className="size-4 text-primary" />
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Operating Hours
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Open 24/7
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available 7 days a week, 24 hours a day
                  </p>
                </div>

                {/* Service Areas */}
                <div className="pt-5 pb-5 border-b border-border">
                  <div className="flex items-center gap-2.5 mb-3">
                    <RiCarFill className="size-4 text-primary" />
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Service Areas
                    </p>
                    <span className="text-xs font-bold text-primary">
                      ({serviceAreas.length})
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
                      >
                        <RiMapPinFill className="size-3" />
                        {area.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 grid grid-cols-2 gap-3">
                  <Link
                    href={numberCallLink}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                  >
                    <RiPhoneFill className="size-4" />
                    Call Now
                  </Link>
                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#25D366]/90"
                  >
                    <RiWhatsappFill className="size-4" />
                    WhatsApp
                  </Link>
                </div>

                {/* Trust Footer */}
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <RiCheckboxCircleFill className="size-3.5 text-primary" />
                    Genuine Batteries
                  </span>
                  <span className="size-1 rounded-full bg-border" />
                  <span className="inline-flex items-center gap-1.5">
                    <RiShieldCheckFill className="size-3.5 text-primary" />
                    Warranty Included
                  </span>
                  <span className="size-1 rounded-full bg-border" />
                  <span className="inline-flex items-center gap-1.5">
                    <RiFlashlightFill className="size-3.5 text-primary" />
                    Fast Response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
    SUB-COMPONENT: Stat Chip
============================================================ */
function StatChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 shadow-sm transition-colors hover:border-primary/40">
      <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-sm font-bold text-foreground">{label}</span>
    </div>
  );
}