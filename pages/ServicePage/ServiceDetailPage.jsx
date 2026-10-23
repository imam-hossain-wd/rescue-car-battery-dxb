// components/pages/ServicePage/ServiceDetailPage.tsx
// "use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiArrowLeftLine,
  RiCheckboxCircleFill,
  RiFlashlightFill,
  RiShieldCheckFill,
  RiTimeFill,
  RiMapPinFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiStarFill,
  RiSettings4Fill,
  RiQuestionFill,
  RiToolsFill,
  RiArrowRightUpLine,
  RiPriceTag3Fill,
  RiCarFill,
  RiAwardFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export default function ServiceDetailPage({ service }) {
  const {
    icon: Icon,
    title,
    shortDescription,
    category,
    popular,
    premium,
    heroHeading,
    overview,
    keyBenefits = [],
    processSteps = [],
    faqs = [],
    suitableFor = [],
    slug,
  } = service;

  const {
    city,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    serviceAreas = [],
    brandName,
  } = SiteConfig;

  return (
    <main className="w-full bg-[#090B0D] overflow-hidden">
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#090B0D] py-16 sm:py-20 lg:py-24">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03]" />

        {/* Radial spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        {/* Top border glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#FFC400] transition-colors">
              Home
            </Link>
            <RiArrowRightLine className="h-3 w-3" />
            <Link
              href="/services"
              className="hover:text-[#FFC400] transition-colors"
            >
              Services
            </Link>
            <RiArrowRightLine className="h-3 w-3" />
            <span className="text-gray-300 line-clamp-1">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FFC400]">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#FFC400]/60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-[#FFC400]" />
                  </span>
                  {category}
                </span>
                {popular && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#FFC400] text-[#090B0D] px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-[#FFC400]/40">
                    <RiStarFill className="h-2.5 w-2.5" /> Popular
                  </span>
                )}
                {premium && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-br from-purple-500 to-purple-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-purple-500/40">
                    <RiFlashlightFill className="h-2.5 w-2.5" /> Premium
                  </span>
                )}
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-5">
                {heroHeading || title}
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg leading-relaxed text-gray-400 mb-8 max-w-xl">
                {shortDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFC400] px-7 text-sm font-bold text-[#090B0D] shadow-lg shadow-[#FFC400]/30 hover:bg-[#FFC400]/90 hover:shadow-[#FFC400]/60 transition-all duration-200"
                >
                  <RiPhoneFill className="h-4 w-4" />
                  Call Now
                  <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#25D366]/90 hover:shadow-[#25D366]/60 transition-all duration-200"
                >
                  <RiWhatsappFill className="h-4 w-4" />
                  WhatsApp Us
                </Link>
              </div>

              {/* Quick trust stats */}
              <div className="flex flex-wrap items-center gap-3">
                <StatChip icon={RiTimeFill} label="5–15 Min Response" />
                <StatChip icon={RiShieldCheckFill} label="12–48 Mo Warranty" />
                <StatChip icon={RiMapPinFill} label={`${serviceAreas.length}+ Areas`} />
              </div>
            </div>

            {/* Right - Info Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#0D1117] rounded-3xl border border-white/8 p-6 shadow-2xl">
                {/* Corner accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-3xl bg-linear-to-r from-transparent via-[#FFC400] to-transparent opacity-60" />

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#FFC400]/25 to-transparent p-[1.5px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#090B0D]">
                    <Icon className="h-7 w-7 text-[#FFC400]" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-4">
                  Service Highlights
                </h3>

                <ul className="space-y-3">
                  {keyBenefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <RiCheckboxCircleFill className="h-4 w-4 text-[#FFC400] shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed text-gray-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/8">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Available In
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {city} • All major districts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OVERVIEW SECTION
      ============================================================ */}
      <section className="relative w-full bg-[#090B0D] py-16 border-t border-white/5">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-linear-to-r from-[#FFC400]/40 to-transparent" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFC400]">
                Service Overview
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-[#FFC400]/40 to-transparent" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              What You Need to Know
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-gray-400 space-y-5">
              {overview.split(". ").reduce((acc, sentence, idx) => {
                // Group sentences into paragraphs of ~2-3 each
                const paraIdx = Math.floor(idx / 3);
                if (!acc[paraIdx]) acc[paraIdx] = [];
                acc[paraIdx].push(sentence);
                return acc;
              }, []).map((paragraph, idx) => (
                <p key={idx}>{paragraph.join(". ")}{paragraph[paragraph.length - 1]?.endsWith(".") ? "" : "."}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          KEY BENEFITS SECTION
      ============================================================ */}
      {keyBenefits.length > 0 && (
        <section className="relative w-full bg-[#0D1117] py-16 border-t border-white/5">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#FFC400]/5 blur-[120px] pointer-events-none" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-4">
                  <RiAwardFill className="h-3 w-3" />
                  Why Choose This Service
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Key Benefits & Advantages
                </h2>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-linear-to-b from-white/[0.06] to-white/[0.02] rounded-2xl border border-white/8 p-5 hover:border-[#FFC400]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFC400]/10 transition-all duration-300"
                  >
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-linear-to-r from-transparent via-[#FFC400]/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFC400]/10 shrink-0">
                        <RiCheckboxCircleFill className="h-4.5 w-4.5 text-[#FFC400]" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed pt-1.5">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PROCESS STEPS SECTION
      ============================================================ */}
      {processSteps.length > 0 && (
        <section className="relative w-full bg-[#090B0D] py-16 border-t border-white/5">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-4">
                  <RiSettings4Fill className="h-3 w-3" />
                  Our Process
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  How We Do It — Step by Step
                </h2>
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  Transparent, methodical, and professionally executed.
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="relative">
                {/* Connector Line */}
                <div className="absolute left-[27px] top-6 bottom-6 w-px bg-linear-to-b from-[#FFC400]/60 via-[#FFC400]/30 to-transparent hidden sm:block" />

                <div className="space-y-5">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="relative flex gap-5 group">
                      {/* Timeline Node */}
                      <div className="relative shrink-0 z-10">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#090B0D] bg-[#FFC400] shadow-lg shadow-[#FFC400]/30 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-base font-black text-[#090B0D]">
                            {step.step}
                          </span>
                          {idx === 0 && (
                            <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-[#FFC400]/30" />
                          )}
                        </div>
                      </div>

                      {/* Content Card */}
                      <article className="flex-1 relative overflow-hidden rounded-2xl border border-white/8 bg-[#0D1117] p-5 hover:border-[#FFC400]/40 hover:shadow-lg hover:shadow-[#FFC400]/5 transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-linear-to-r from-[#FFC400]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#FFC400] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SUITABLE FOR SECTION
      ============================================================ */}
      {suitableFor.length > 0 && (
        <section className="relative w-full bg-[#0D1117] py-16 border-t border-white/5">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left */}
                <div className="lg:col-span-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-4">
                    <RiCarFill className="h-3 w-3" />
                    Perfect For
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    Who Is This Service For?
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Whether you drive a compact sedan, a luxury European
                    sports car, or a heavy-duty 4x4 — this service is
                    engineered for every vehicle type across {city}.
                  </p>
                </div>

                {/* Right - Chips */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {suitableFor.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] p-3.5 hover:border-[#FFC400]/40 transition-colors duration-300"
                      >
                        <RiToolsFill className="h-4 w-4 text-[#FFC400] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FAQ SECTION
      ============================================================ */}
      {faqs.length > 0 && (
        <section className="relative w-full bg-[#090B0D] py-16 border-t border-white/5">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-4">
                  <RiQuestionFill className="h-3 w-3" />
                  FAQs
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Common Questions
                </h2>
              </div>

              {/* FAQ List */}
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-white/8 bg-[#0D1117] overflow-hidden hover:border-[#FFC400]/40 transition-colors duration-300"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                      <h3 className="text-sm font-bold text-white group-open:text-[#FFC400] transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFC400]/10 group-open:bg-[#FFC400] group-open:text-[#090B0D] text-[#FFC400] transition-all duration-300">
                        <RiArrowRightLine className="h-3.5 w-3.5 group-open:rotate-90 transition-transform duration-300" />
                      </div>
                    </summary>
                    <div className="px-5 pb-5">
                      <div className="pt-3 border-t border-white/5">
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="relative w-full bg-[#0D1117] py-16 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#FFC400]/10 blur-[140px] pointer-events-none" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Ready When You Are
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Need{" "}
              <span className="text-[#FFC400]">
                {title.split(" ").slice(0, 3).join(" ")}
              </span>{" "}
              Right Now?
            </h2>

            <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-xl mx-auto">
              Call our 24/7 dispatch team or send us a WhatsApp message with
              your location. We'll be on our way within minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={numberCallLink}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFC400] px-7 text-sm font-bold text-[#090B0D] shadow-lg shadow-[#FFC400]/30 hover:bg-[#FFC400]/90 hover:shadow-[#FFC400]/60 transition-all duration-200 w-full sm:w-auto"
              >
                <RiPhoneFill className="h-4 w-4" />
                Call {displayNumber}
                <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#25D366]/90 hover:shadow-[#25D366]/60 transition-all duration-200 w-full sm:w-auto"
              >
                <RiWhatsappFill className="h-4 w-4" />
                WhatsApp Us
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <RiCheckboxCircleFill className="h-3.5 w-3.5 text-[#FFC400]" />
                24/7 Availability
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="flex items-center gap-1.5">
                <RiShieldCheckFill className="h-3.5 w-3.5 text-[#FFC400]" />
                Genuine Parts
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="flex items-center gap-1.5">
                <RiTimeFill className="h-3.5 w-3.5 text-[#FFC400]" />
                5–15 Min Response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BACK TO SERVICES
      ============================================================ */}
      <div className="w-full bg-[#090B0D] py-10 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#FFC400] transition-colors"
          >
            <RiArrowLeftLine className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ============================================================
    SUB-COMPONENT: Stat Chip
============================================================ */
function StatChip({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm hover:border-[#FFC400]/30 transition-colors duration-300">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC400]/10">
        <Icon className="h-3.5 w-3.5 text-[#FFC400]" />
      </span>
      <span className="text-xs font-bold text-gray-300">{label}</span>
    </div>
  );
}