// app/terms/page.tsx
import Link from "next/link";
import {
  RiFileTextLine,
  RiScalesLine,
  RiUserLine,
  RiSettingsLine,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
  RiLockLine,
  RiAlertLine,
  RiRefreshLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiGlobalLine,
  RiFlashlightFill,
  RiCalendarLine,
  RiCarLine,
  RiErrorWarningLine,
  RiChatQuoteLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Terms of Service | ${SiteConfig.brandName}`,
  description: `Read the Terms of Service for ${SiteConfig.brandName}. Understand your rights and obligations when booking mobile battery rescue services across Dubai.`,
  alternates: { canonical: `${SiteConfig.url}/terms` },
};

export default function TermsPage() {
  const {
    brandName,
    displayNumber,
    email,
    emailLink,
    numberCallLink,
    location,
    city,
    country,
    url,
    streetAddress,
    serviceAreas,
  } = SiteConfig;

  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#090B0D] overflow-hidden">
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative w-full overflow-hidden bg-[#090B0D] py-16 sm:py-20 lg:py-24">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03]" />

        {/* Radial spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        {/* Top border glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#FFC400] transition-colors">
              Home
            </Link>
            <RiArrowRightLine className="h-3 w-3" />
            <span className="text-gray-300">Terms of Service</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-6 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFC400]/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
              </span>
              <RiScalesLine className="h-3.5 w-3.5" />
              Legal Terms & Conditions
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
              Terms of Service
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Please read these Terms of Service carefully before booking any service with{" "}
              <span className="font-semibold text-white">{brandName}</span>. By using our
              website or services, you agree to be bound by these terms.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
              <RiTimeLine className="h-3.5 w-3.5 text-[#FFC400]" />
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                <RiShieldCheckLine className="h-3 w-3 text-[#FFC400]" />
                UAE Consumer Law Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                <RiScalesLine className="h-3 w-3 text-[#FFC400]" />
                Fair & Transparent
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                <RiCalendarLine className="h-3 w-3 text-[#FFC400]" />
                Effective Immediately
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTRO CALLOUT
      ============================================================ */}
      <section className="relative w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] py-8 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#FFC400]/20 bg-[#FFC400]/[0.06] p-5 flex items-start gap-3">
              <RiAlertLine className="h-5 w-5 text-[#FFC400] shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed text-gray-300">
                These Terms of Service (the &quot;Terms&quot;) constitute a legally binding
                agreement between you (&quot;Customer,&quot; &quot;you&quot;) and{" "}
                <span className="font-semibold text-white">{brandName}</span> (&quot;Company,&quot;
                &quot;we,&quot; &quot;us&quot;). They govern your access to our website at{" "}
                <span className="font-semibold text-white">{url}</span> and your use of any mobile
                battery replacement, jumpstart, diagnostic, or related auto-electrical service
                provided by us across {city}, {country}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT
      ============================================================ */}
      <section className="relative w-full bg-[#0D1117] py-12 sm:py-16">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 rounded-3xl border border-white/8 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-sm">

            {/* =================================================
                Section 1: Acceptance of Terms
            ================================================= */}
            <section>
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-blue-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiCheckboxCircleLine className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    1. Acceptance of Terms
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      By accessing our website, contacting our dispatch team, submitting a
                      booking form, or requesting any service, you confirm that you:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Have read, understood, and agree to be bound by these Terms",
                        "Are at least 18 years of age and legally capable of entering into a contract",
                        "Own the vehicle being serviced or have the authority of the vehicle owner to authorize the service",
                        "Will provide accurate, complete, and current information about your vehicle, location, and identity",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.06] p-3 flex items-start gap-2">
                      <RiAlertLine className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-300">
                        If you do not agree to these Terms, you must immediately stop using
                        our website and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 2: Our Services
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-purple-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiCarLine className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    2. Our Services
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      <span className="text-white font-medium">{brandName}</span> provides
                      mobile car battery replacement, jumpstart, diagnostic, BMS coding, and
                      related auto-electrical services delivered directly to your location
                      across {city}. Our service scope includes:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          What We Provide
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "24/7 mobile battery replacement at your location",
                            "On-site diagnostic testing and BMS coding",
                            "Genuine GCC-spec batteries with manufacturer warranty",
                            "Professional installation by certified technicians",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <RiCheckboxCircleLine className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          What We Do Not Provide
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Towing or vehicle transport services",
                            "Engine, transmission, or major mechanical repairs",
                            "Fuel delivery or tire changing",
                            "Accident recovery or collision repairs",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <RiAlertLine className="h-3.5 w-3.5 text-orange-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p>
                      Response times are estimates based on technician availability, traffic,
                      and your location. While we aim for 5–15 minute arrivals in most Dubai
                      areas, actual times may vary due to circumstances beyond our control.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 3: Booking & Payment
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-emerald-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiMoneyDollarCircleLine className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    3. Booking, Pricing & Payment
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      All pricing is quoted in <span className="text-white font-medium">UAE Dirhams (AED)</span>{" "}
                      and is confirmed before any work begins. By booking a service, you
                      agree to the following:
                    </p>

                    <ul className="space-y-2">
                      {[
                        { label: "Upfront Quote", desc: "We confirm the final price via phone or WhatsApp before dispatching a technician. The quoted price is what you pay — no hidden fees, no surprise charges." },
                        { label: "Battery Pricing", desc: "Battery prices vary by brand, technology (SLI/EFB/AGM/GEL/LiFePO4), capacity, and warranty tier. The price you receive includes the battery, on-site installation, BMS coding (where applicable), and manufacturer warranty." },
                        { label: "Payment Methods", desc: "We accept Cash, Credit/Debit Cards, Apple Pay, and Google Pay. Payment is due on completion of the service, at your vehicle, before the technician leaves." },
                        { label: "Core Trade-In Rebate", desc: "Where you trade in your old battery core, a rebate (typically AED 30–80 based on weight) is applied directly to your invoice at the point of service." },
                        { label: "VAT", desc: "All prices are inclusive of 5% UAE VAT unless otherwise stated. A VAT-compliant invoice is issued after every service." },
                        { label: "Cancellation", desc: "You may cancel free of charge at any point before the technician is dispatched. If the technician is already en route, a call-out fee may apply to cover fuel and time." },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium text-white">{item.label}:</span>{" "}
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/[0.06] p-3 flex items-start gap-2">
                      <RiAlertLine className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-yellow-300">
                        If additional work is required beyond the original quote (for example,
                        corroded cables or a failing alternator discovered on-site), we will
                        inform you and provide a revised quote before proceeding. You have the
                        right to decline additional work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 4: Warranty
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-amber-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiShieldCheckLine className="h-5 w-5 text-amber-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    4. Warranty Policy
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      All batteries we install come with a{" "}
                      <span className="text-white font-medium">
                        manufacturer warranty of 12 to 48 months
                      </span>{" "}
                      depending on the brand and technology tier. Warranty coverage includes:
                    </p>

                    <ul className="space-y-2">
                      {[
                        "Manufacturing defects in lead plates, grids, and internal connections",
                        "Premature failure below rated Cold Cranking Amps (CCA)",
                        "Internal cell failure under normal operating conditions",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-semibold text-white mt-4 mb-2">
                      Warranty Does Not Cover:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Physical damage from accidents, misuse, or incorrect installation by third parties",
                        "Damage caused by faulty alternators, overcharging, or vehicle electrical faults",
                        "Deep discharge from neglected storage, parasitic drain, or extended non-use",
                        "Modifications, tampering, or removal of warranty labels",
                        "Consumable wear beyond normal manufacturer tolerance",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiErrorWarningLine className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p>
                      To claim warranty, contact us with your invoice number, battery serial
                      number, and a description of the issue. We will inspect the battery and,
                      if covered, replace it free of charge at your location. Warranty claims
                      are processed within 5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 5: Customer Responsibilities
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-orange-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiUserLine className="h-5 w-5 text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    5. Customer Responsibilities
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      To ensure a safe and efficient service, you agree to:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Provide Accurate Information
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Correct vehicle make, model, year, and VIN",
                            "Accurate location and access instructions",
                            "Disclosure of any existing electrical faults",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <RiCheckboxCircleLine className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Ensure Safe Access
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Provide access to the vehicle and engine bay",
                            "Inform building security or parking management",
                            "Keep children and pets away during service",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <RiCheckboxCircleLine className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">
                      If our technician cannot access the vehicle within a reasonable time
                      (typically 15 minutes after arrival), we may need to reschedule, and a
                      call-out fee may apply.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 6: Liability
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-red-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiErrorWarningLine className="h-5 w-5 text-red-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    6. Limitation of Liability
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      While we take every precaution to provide safe and professional service,
                      our liability is limited as follows:
                    </p>

                    <ul className="space-y-2">
                      {[
                        { label: "Service Liability", desc: "Our total liability for any claim arising from our service is limited to the amount you paid for that specific service." },
                        { label: "Indirect Damages", desc: "We are not liable for indirect, incidental, or consequential damages — including loss of income, loss of business, or vehicle downtime." },
                        { label: "Pre-Existing Conditions", desc: "We are not responsible for pre-existing mechanical or electrical faults that may manifest or worsen during or after our service." },
                        { label: "Third-Party Modifications", desc: "We are not liable for issues caused by aftermarket wiring, custom electrical installations, or unauthorized modifications." },
                        { label: "Force Majeure", desc: "We are not liable for delays or failures caused by events beyond our reasonable control — including extreme weather, road closures, accidents, or acts of government." },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiErrorWarningLine className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium text-white">{item.label}:</span>{" "}
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-lg border border-red-500/20 bg-red-500/[0.06] p-3 flex items-start gap-2">
                      <RiAlertLine className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-300">
                        Nothing in these Terms excludes or limits liability for death,
                        personal injury, or fraud caused by our negligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 7: Intellectual Property
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-pink-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiFileTextLine className="h-5 w-5 text-pink-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    7. Intellectual Property
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      All content on our website — including text, images, graphics, logos,
                      design, code, and the &quot;{brandName}&quot; name — is owned by us or
                      licensed to us and is protected by UAE and international copyright laws.
                    </p>
                    <p>
                      You may not reproduce, distribute, modify, publicly display, or create
                      derivative works from our content without our prior written permission.
                      You may share links to our public pages for personal, non-commercial use.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 8: Privacy
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-cyan-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiLockLine className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    8. Privacy
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Your use of our services is also governed by our{" "}
                      <Link
                        href="/privacy"
                        className="text-[#FFC400] font-medium hover:text-[#FFC400]/80 transition-colors underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      , which explains how we collect, use, and protect your personal
                      information. By accepting these Terms, you acknowledge that you have
                      read and understood our Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 9: Termination
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-indigo-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiSettingsLine className="h-5 w-5 text-indigo-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    9. Termination
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We reserve the right to refuse service or terminate our engagement
                      with you at any time, without notice, if:
                    </p>

                    <ul className="space-y-2">
                      {[
                        "You violate any provision of these Terms",
                        "You misrepresent your identity, vehicle, or booking details",
                        "You engage in abusive, threatening, or fraudulent behavior toward our technicians or staff",
                        "Payment is not received on completion of service",
                        "We detect suspicious activity or potential fraud",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiErrorWarningLine className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p>
                      If we refuse service after a technician has arrived, you are responsible
                      for the call-out fee (typically AED 100–150).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 10: Governing Law
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-yellow-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiScalesLine className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    10. Governing Law & Dispute Resolution
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      These Terms are governed by and construed in accordance with the laws
                      of the <span className="text-white font-medium">United Arab Emirates</span>{" "}
                      and the Emirate of Dubai. Any disputes arising from these Terms or
                      your use of our services shall be subject to the exclusive jurisdiction
                      of the courts of Dubai.
                    </p>
                    <p>
                      Before initiating legal action, we encourage you to contact us directly
                      so we can resolve the issue amicably. Most concerns can be resolved
                      within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 11: Changes to Terms
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-emerald-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiRefreshLine className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    11. Changes to These Terms
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We reserve the right to update or modify these Terms at any time. When
                      we do, we will:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Update the "Last updated" date at the top of this page',
                        "Notify registered customers by email for material changes",
                        "Post a prominent notice on our website for significant updates",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500">
                      Your continued use of our services after any changes constitutes
                      acceptance of the updated Terms. If you do not agree with the updated
                      Terms, you should stop using our services.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 12: Contact
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-blue-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiMailLine className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    12. Contact Us
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      For any questions, concerns, or feedback regarding these Terms of
                      Service, please contact us:
                    </p>

                    <div className="space-y-3 rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <a
                        href={emailLink}
                        className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] p-3 hover:border-[#FFC400]/40 transition-colors"
                      >
                        <div className="rounded-lg bg-[#FFC400]/10 p-2 shrink-0">
                          <RiMailLine className="h-4 w-4 text-[#FFC400]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            Email
                          </p>
                          <p className="text-sm font-semibold text-white truncate group-hover:text-[#FFC400] transition-colors">
                            {email}
                          </p>
                        </div>
                      </a>

                      <a
                        href={numberCallLink}
                        className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] p-3 hover:border-[#FFC400]/40 transition-colors"
                      >
                        <div className="rounded-lg bg-[#FFC400]/10 p-2 shrink-0">
                          <RiPhoneLine className="h-4 w-4 text-[#FFC400]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            Phone
                          </p>
                          <p className="text-sm font-semibold text-white group-hover:text-[#FFC400] transition-colors">
                            {displayNumber}
                          </p>
                        </div>
                      </a>

                      <div className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.03] p-3">
                        <div className="rounded-lg bg-[#FFC400]/10 p-2 shrink-0">
                          <RiMapPinLine className="h-4 w-4 text-[#FFC400]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            Registered Address
                          </p>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {streetAddress}, {location}, {city}, {country}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">
                      We respond to all inquiries within 24–48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* ============================================================
              BOTTOM NAVIGATION
          ============================================================ */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC400]/10">
                  <RiScalesLine className="h-5 w-5 text-[#FFC400]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Questions about our terms?
                  </p>
                  <p className="text-xs text-gray-500">
                    Our team is happy to clarify any point
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-[#FFC400] hover:text-[#FFC400]/80 transition-colors"
                >
                  Contact Us
                  <RiArrowRightLine className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ============================================================
              FOOTER NOTE
          ============================================================ */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-xs text-gray-500">
              © {currentYear} {brandName}. All rights reserved. | {location}, {city}, {country}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}