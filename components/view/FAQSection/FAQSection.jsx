"use client";

import { useState } from "react";
import {
  RiAddLine,
  RiSubtractLine,
  RiCustomerService2Line,
  RiArrowRightLine,
  RiWhatsappLine,
  RiPhoneLine,
  RiShieldCheckLine,
  RiTimeLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can you reach me in Dubai?",
      answer:
        "Our response time typically ranges from 5–15 minutes depending on your exact location, traffic, and technician availability. We share an estimated arrival time as soon as you provide your location.",
    },
    {
      question: "Do you provide 24/7 car battery replacement?",
      answer:
        "Yes. We operate 24 hours a day, 7 days a week — including weekends and public holidays. Whatever the hour, we're ready to assist.",
    },
    {
      question: "Can you replace my battery at home?",
      answer:
        "Absolutely. We come directly to your home, office, parking area, or any location in Dubai. You don't need to move your car — our mobile service brings the workshop to you.",
    },
    {
      question: "Can you replace a battery in basement parking?",
      answer:
        "Yes. Our mobile team can reach you in basement parking, underground garages, and other covered areas across Dubai. We're equipped for every parking scenario.",
    },
    {
      question: "Do you provide genuine car batteries?",
      answer:
        "Yes. We only supply factory-sealed, genuine batteries from trusted brands like VARTA, Bosch, Amaron, ACDelco, and others. We never use recycled or refurbished batteries as new.",
    },
    {
      question: "How much does a car battery cost in Dubai?",
      answer:
        "Prices vary depending on your vehicle, battery type, capacity, and warranty. We provide transparent quotes before installation. Typical range: AED 250 – AED 1,500+ for premium AGM batteries.",
    },
    {
      question: "Which battery does my car need?",
      answer:
        "We recommend the right battery based on your vehicle's make, model, year, and electrical requirements. Send us your car details and we'll match you with the perfect battery.",
    },
    {
      question: "Do you replace AGM and EFB batteries?",
      answer:
        "Yes. We specialize in AGM (Absorbent Glass Mat) and EFB (Enhanced Flooded Battery) replacement for modern Start-Stop vehicles and high-electrical-demand cars.",
    },
    {
      question: "Do you provide battery warranty?",
      answer:
        "Yes. Every battery comes with a manufacturer's warranty — typically 12 to 48 months depending on the tier. You receive full documentation before installation.",
    },
    {
      question: "Can you jump-start my car instead of replacing the battery?",
      answer:
        "Yes, we offer professional jump-start services. If your battery is failing, we'll test it on-site and advise honestly — replacement may prevent a repeat breakdown.",
    },
    {
      question: "Will you test my alternator?",
      answer:
        "Yes. We perform comprehensive charging system testing — battery voltage, alternator output, and starting performance — to make sure the fault is diagnosed correctly.",
    },
    {
      question: "Do you service luxury cars?",
      answer:
        "Absolutely. We service Mercedes, BMW, Audi, Porsche, Range Rover, Bentley, Rolls-Royce, Ferrari, Lamborghini, and many more.",
    },
    {
      question: "Which areas of Dubai do you cover?",
      answer:
        "We cover all of Dubai — Marina, JBR, JLT, Downtown, Business Bay, DIFC, Sheikh Zayed Road, Al Barsha, JVC, JVT, Arabian Ranches, Motor City, Sports City, Silicon Oasis, International City, Mirdif, Deira, Bur Dubai, and more.",
    },
    {
      question: "Can I pay by card?",
      answer:
        "Yes. We accept card payments, digital wallets, and cash. Payment is processed after the service is completed — convenient and transparent.",
    },
    {
      question: "What happens to my old battery?",
      answer:
        "We responsibly remove and recycle your old battery in accordance with environmental regulations. You don't need to worry about disposal.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#FFC400]/[0.04] blur-3xl pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER ============ */}
        <div className="mx-auto max-w-3xl text-center mb-8">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Frequently Asked{" "}
            <span className="relative inline-block text-[#FFC400]">
              Questions
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

          <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our mobile battery rescue
            service. Can't find your answer? Reach out — we're always here.
          </p>
        </div>

        {/* ============ MAIN GRID ============ */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 items-start">
          {/* ---------- LEFT: Sticky Contact Panel ---------- */}
          <aside className="hidden lg:flex flex-col lg:sticky lg:top-8 space-y-4">
            {/* Contact card (featured) */}
            <div className="relative overflow-hidden rounded-3xl border border-[#FFC400]/25 bg-gradient-to-br from-[#FFC400]/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl p-6">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent" />
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FFC400]/15 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFC400]/30 bg-[#FFC400]/15 mb-5">
                  <RiCustomerService2Line className="h-6 w-6 text-[#FFC400]" />
                </div>

                <h3 className="text-xl font-bold text-white leading-tight tracking-tight">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Our team responds in minutes day or night, across all of
                  Dubai.
                </p>

                <div className="mt-6 space-y-2.5">
                  <Button
                    asChild
                    className="group h-11 w-full justify-between rounded-xl bg-[#FFC400] px-4 text-sm font-bold text-[#090B0D] shadow-[0_10px_30px_-10px_rgba(255,196,0,0.6)] transition-all duration-300 hover:bg-[#FFC400]/95 hover:shadow-[0_15px_40px_-10px_rgba(255,196,0,0.8)]"
                  >
                    <Link href="tel:+971000000000" className="flex items-center">
                      <span className="flex items-center gap-2">
                        <RiPhoneLine className="h-4 w-4" />
                        Call Now
                      </span>
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    className="group h-11 w-full justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]"
                  >
                    <Link
                      href="https://wa.me/971000000000"
                      className="flex items-center"
                    >
                      <span className="flex items-center gap-2">
                        <RiWhatsappLine className="h-4 w-4" />
                        Chat on WhatsApp
                      </span>
                      <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-5">
              <ul className="space-y-4">
                {[
                  {
                    icon: RiTimeLine,
                    title: "24/7 Service",
                    text: "Every day, every hour",
                  },
                  {
                    icon: RiShieldCheckLine,
                    title: "Warranty Backed",
                    text: "12–48 month coverage",
                  },
                  {
                    icon: RiCustomerService2Line,
                    title: "Real Support",
                    text: "Human replies, not bots",
                  },
                ].map((item, i, arr) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.title}
                      className={cn(
                        "flex items-start gap-3",
                        i !== arr.length - 1 &&
                          "pb-4 border-b border-white/[0.05]",
                      )}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                        <Icon className="h-4 w-4 text-[#FFC400]" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-zinc-500">
                          {item.text}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* ---------- RIGHT: FAQ Accordion ---------- */}
          <div className="relative min-w-0">
            <div className="space-y-2.5">
              {faqs.slice(0,8).map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
                      isOpen
                        ? "border-[#FFC400]/40 bg-gradient-to-b from-[#FFC400]/[0.06] to-white/[0.01] shadow-[0_15px_40px_-25px_rgba(255,196,0,0.5)]"
                        : "border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-white/20 hover:bg-white/[0.05]",
                    )}
                  >
                    {/* Top hairline (only when open) */}
                    {isOpen && (
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />
                    )}

                    <button
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="relative w-full px-4 sm:px-5 py-4 flex items-start gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]/40 focus-visible:ring-inset rounded-2xl"
                    >
                      {/* Number */}
                      <span
                        className={cn(
                          "shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg border text-[11px] font-bold tabular-nums transition-colors duration-300",
                          isOpen
                            ? "border-[#FFC400]/40 bg-[#FFC400]/15 text-[#FFC400]"
                            : "border-white/[0.08] bg-white/[0.03] text-zinc-500 group-hover:text-zinc-300",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={cn(
                          "flex-1 text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-300",
                          isOpen
                            ? "text-white"
                            : "text-zinc-200 group-hover:text-white",
                        )}
                      >
                        {faq.question}
                      </span>

                      {/* Toggle icon */}
                      <span
                        className={cn(
                          "shrink-0 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "border-[#FFC400]/40 bg-[#FFC400]/15 text-[#FFC400] rotate-180"
                            : "border-white/[0.08] bg-white/[0.03] text-zinc-400 group-hover:border-[#FFC400]/30 group-hover:text-[#FFC400]",
                        )}
                      >
                        {isOpen ? (
                          <RiSubtractLine className="h-4 w-4" />
                        ) : (
                          <RiAddLine className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 pb-5 pl-4 sm:pl-5">
                          <div className="pl-11 pr-11">
                            <div className="border-t border-white/[0.06] pt-4">
                              <p className="text-sm leading-relaxed text-zinc-400">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}