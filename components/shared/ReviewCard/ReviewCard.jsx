
import {
  RiDoubleQuotesL,
  RiMapPinLine,
  RiStarFill,
  RiStarLine,
  RiVerifiedBadgeFill,
  RiShieldCheckLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";


export default function ReviewCard({
  review,
  className,
}) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      className={cn(
        "group/card relative flex h-full flex-col overflow-hidden rounded-2xl",
        "border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01]",
        "backdrop-blur-sm p-5 sm:p-6",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-[#FFC400]/30",
        "hover:shadow-[0_20px_50px_-20px_rgba(255,196,0,0.25)]",
        className,
      )}
    >
      {/* Hover accent glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full
                   bg-[#FFC400]/10 blur-3xl opacity-0 transition-opacity duration-700
                   group-hover/card:opacity-100"
      />
      {/* Top hairline accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px
                   bg-gradient-to-r from-transparent via-[#FFC400]/40 to-transparent
                   opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
      />

      <div className="relative flex flex-1 flex-col">
        {/* Top row: quote + rating */}
        <div className="flex items-start justify-between mb-4">
          <RiDoubleQuotesL className="h-7 w-7 text-[#FFC400]/40" />
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) =>
              i < review.rating ? (
                <RiStarFill key={i} className="h-3.5 w-3.5 text-[#FFC400]" />
              ) : (
                <RiStarLine
                  key={i}
                  className="h-3.5 w-3.5 text-zinc-600"
                />
              ),
            )}
          </div>
        </div>

        {/* Review text */}
        <p className="flex-1 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
          {review.text}
        </p>

        {/* Optional: car tag */}
        {review.car && (
          <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full
                          border border-white/[0.06] bg-white/[0.03] px-2.5 py-1
                          text-[10px] font-medium text-zinc-400">
            <RiShieldCheckLine className="h-3 w-3 text-[#FFC400]/80" />
            {review.car}
          </div>
        )}

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Author */}
        <footer className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                       border border-[#FFC400]/20 bg-[#FFC400]/10
                       text-xs font-bold tracking-wide text-[#FFC400]"
          >
            {initials}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold text-white">
                {review.name}
              </span>
              {review.verified && (
                <RiVerifiedBadgeFill className="h-3.5 w-3.5 shrink-0 text-[#FFC400]" />
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-zinc-500">
              <RiMapPinLine className="h-3 w-3 text-[#FFC400]/60" />
              <span className="truncate">{review.area}</span>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}