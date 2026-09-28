"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
  RiVerifiedBadgeFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import ReviewCard from "@/components/shared/ReviewCard/ReviewCard";

const defaultReviews = [
  {
    name: "Tariq M.",
    area: "Downtown Dubai",
    rating: 5,
    text: "Saved me on Sheikh Zayed Road during peak summer heat! Tech arrived in 12 mins, swapped my BMW AGM battery, registered the BMS, and I paid with Apple Pay. 10/10 service!",
    car: "BMW",
    verified: true,
  },
  {
    name: "Sarah K.",
    area: "Business Bay",
    rating: 5,
    text: "My Porsche Macan battery died in my basement car park. They were here in 10 minutes, used a memory saver so none of my settings were lost, and registered the battery computer on-site. Outstanding.",
    car: "Porsche Macan",
    verified: true,
  },
  {
    name: "Omar H.",
    area: "Al Karama",
    rating: 5,
    text: "Stranded with my Toyota Prado. Mechanic arrived in 12 minutes, tested the alternator, installed a brand-new Amaron with a 2-year warranty. Upfront price, zero extra fees.",
    car: "Toyota Prado",
    verified: true,
  },
  {
    name: "Vikram S.",
    area: "Dubai Marina",
    rating: 5,
    text: "Super fast dispatch to Dubai Marina! Honest advice, transparent pricing, and a professional technician who explained everything clearly.",
    car: "Nissan",
    verified: true,
  },
  {
    name: "Ahmed Al Maktoum",
    area: "Jumeirah",
    rating: 5,
    text: "Incredible service. My battery died at 2 AM and they arrived within 15 minutes. Fixed on the spot with zero hassle.",
    car: "Lexus",
    verified: true,
  },
  {
    name: "Lisa Chen",
    area: "Dubai Silicon Oasis",
    rating: 4,
    text: "Reliable and efficient. Arrived within 20 minutes and got my car running again. Great value for money.",
    car: "Honda",
    verified: true,
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Reviews({
  reviews = defaultReviews,
  title = "What Dubai Drivers Say",
  subtitle = "Real experiences from real customers, verified across the city.",
  autoplay = true,
  autoplayInterval = 4500,
}) {
  // --- Featured review state ---
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featured = reviews[featuredIndex];

  // --- Carousel for the "recent reviews" rail ---
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", skipSnaps: false, dragFree: true },
    autoplay
      ? [Autoplay({ delay: autoplayInterval, stopOnInteraction: true })]
      : [],
  );

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // --- Aggregates ---
  const total = reviews.length;
  const average =
    reviews.reduce((acc, r) => acc + r.rating, 0) / Math.max(total, 1);
  const ratingCounts = reviews.reduce((acc, r) => {
    acc[r.rating] = (acc[r.rating] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="relative w-full overflow-hidden bg-[#090B0D] py-10">
      {/* ---- Background ---- */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-[#FFC400]/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER (editorial 2-col) ============ */}
        <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-end mb-8">
          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              What Dubai Drivers{" "}
              <span className="text-[#FFC400] relative inline-block">
                Say
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

            <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* Compact rating cluster */}
          <div className="flex items-center gap-5 sm:gap-6 lg:pb-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                Average
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {average.toFixed(1)}
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5",
                        i < Math.round(average)
                          ? "text-[#FFC400]"
                          : "text-zinc-700",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                Reviews
              </span>
              <div className="flex items-center gap-1.5">
                <RiVerifiedBadgeFill className="h-4 w-4 text-[#FFC400]" />
                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {total}
                </span>
              </div>
            </div>
          </div>
        </header>



        {/* ============ RECENT REVIEWS RAIL ============ */}
        <div>
          {/* Rail header */}
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFC400]">
                  Recent Reviews
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-[#FFC400]/40 to-transparent" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-500">
                Swipe or use arrows to browse more customer experiences
              </p>
            </div>

            {/* Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!prevEnabled}
                aria-label="Previous reviews"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-white/10 bg-white/[0.04] text-zinc-300",
                  "transition-all duration-300",
                  "hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]/50",
                  "disabled:opacity-40 disabled:cursor-not-allowed",
                )}
              >
                <RiArrowLeftSLine className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextEnabled}
                aria-label="Next reviews"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-white/10 bg-white/[0.04] text-zinc-300",
                  "transition-all duration-300",
                  "hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]/50",
                  "disabled:opacity-40 disabled:cursor-not-allowed",
                )}
              >
                <RiArrowRightSLine className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {reviews.map((review, i) => (
                <div
                  key={review.id ?? i}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] xl:flex-[0_0_24%] pl-4 first:pl-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!prevEnabled}
              aria-label="Previous reviews"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                "border border-white/10 bg-white/[0.04] text-zinc-300",
                "transition-all duration-300",
                "hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
                "disabled:opacity-40",
              )}
            >
              <RiArrowLeftSLine className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextEnabled}
              aria-label="Next reviews"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                "border border-white/10 bg-white/[0.04] text-zinc-300",
                "transition-all duration-300",
                "hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
                "disabled:opacity-40",
              )}
            >
              <RiArrowRightSLine className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}