// app/privacy/page.tsx
import Link from "next/link";
import {
  RiShieldCheckLine,
  RiLockLine,
  RiEyeLine,
  RiUserLine,
  RiCookieLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiGlobalLine,
  RiDatabaseLine,
  RiFileTextLine,
  RiSettingsLine,
  RiShareLine,
  RiAlertLine,
  RiFlashlightFill,
  RiScalesLine,
  RiRefreshLine,
  RiChatQuoteLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


export default function PrivacyPage() {
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
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        {/* Top border glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#FFC400]/40 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#FFC400] transition-colors">
              Home
            </Link>
            <RiArrowRightLine className="h-3 w-3" />
            <span className="text-gray-300">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC400]/30 bg-[#FFC400]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#FFC400] mb-6 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFC400]/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFC400]" />
              </span>
              <RiShieldCheckLine className="h-3.5 w-3.5" />
              Privacy & Data Protection
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
              Privacy Policy
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              At <span className="font-semibold text-white">{brandName}</span>, we take your privacy seriously. This policy explains how we collect, use, share, and protect your personal information when you use our mobile battery rescue services.
            </p>

            {/* Last Updated */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
              <RiTimeLine className="h-3.5 w-3.5 text-[#FFC400]" />
              Last updated: {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                <RiCheckboxCircleLine className="h-3 w-3 text-[#FFC400]" />
                GDPR Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                <RiLockLine className="h-3 w-3 text-[#FFC400]" />
                256-bit Encryption
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                <RiGlobalLine className="h-3 w-3 text-[#FFC400]" />
                UAE Data Office Aligned
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
              <RiShieldCheckLine className="h-5 w-5 text-[#FFC400] shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed text-gray-300">
                This policy applies to all visitors of <span className="font-semibold text-white">{url}</span>, all customers who book our mobile battery services via phone, WhatsApp, or our contact form, and any individual whose data we collect through our website, dispatch system, or on-site operations across {city}, {country}.
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
                Section 1: Introduction
            ================================================= */}
            <section>
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-blue-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiFileTextLine className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    1. Introduction
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Welcome to <span className="text-white font-medium">{brandName}</span>. This Privacy Policy describes how we collect, use, store, share, and protect your personal information when you use our website, mobile dispatch service, or on-site battery replacement and auto-electrical services.
                    </p>
                    <p>
                      We are committed to protecting your privacy and handling your personal information in full compliance with the <span className="text-white font-medium">UAE Federal Decree-Law No. 45 of 2021</span> on Personal Data Protection, and in accordance with international best practices including the GDPR where applicable.
                    </p>
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.06] p-3 flex items-start gap-2">
                      <RiCheckboxCircleLine className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-300">
                        By using our website or booking any service, you confirm that you have read, understood, and agreed to the practices described in this policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 2: Information We Collect
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-purple-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiDatabaseLine className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    2. Information We Collect
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We only collect the information necessary to dispatch a technician, complete your battery replacement, and deliver ongoing warranty support. This falls into three categories:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Information You Provide Directly
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Full name, phone number, WhatsApp, email",
                            "Vehicle details: make, model, year, VIN",
                            "Service location, GPS pin, building, parking bay",
                            "Payment info (processed via PCI-DSS gateway)",
                            "Warranty documentation and communications",
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
                          Information Collected Automatically
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "IP address, browser type, device, OS",
                            "Pages visited, time on site, referral source",
                            "Cookies and tracking technologies",
                            "Session data for security monitoring",
                            "Form interaction patterns (anonymised)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <RiCheckboxCircleLine className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4 mt-3">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Information From Third Parties
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-400">
                        {[
                          "Google Maps data when you share a location pin",
                          "Payment confirmation from our PCI-DSS processor",
                          "Customer reviews from Google Business Profile",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <RiCheckboxCircleLine className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 3: How We Use Your Information
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-emerald-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiSettingsLine className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    3. How We Use Your Information
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Your information is used strictly to operate and improve our mobile battery rescue service. We process it for:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Operate the Service
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Dispatch nearest technician to your location",
                            "Match correct battery chemistry to your car",
                            "Perform BMS ECU registration where required",
                            "Issue warranty certificate and process claims",
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
                          Communicate With You
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Confirm booking and ETA updates",
                            "Respond to questions and complaints",
                            "Send service reminders (opt-in only)",
                            "Notify on technician arrival",
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
                          Improve Our Business
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Analyse traffic and service performance",
                            "Detect and prevent fraud or abuse",
                            "Improve website and dispatch system",
                            "Staff training and quality assurance",
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
                          Legal Compliance
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Comply with UAE tax and consumer law",
                            "Honour warranty obligations",
                            "Respond to lawful authority requests",
                            "Protect legal rights and safety",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <RiCheckboxCircleLine className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 4: Information Sharing
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-orange-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiShareLine className="h-5 w-5 text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    4. Information Sharing
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We <span className="text-white font-semibold">do not sell, rent, or trade</span> your personal information. We only share data with trusted third parties strictly necessary to operate our service:
                    </p>

                    <ul className="space-y-2">
                      {[
                        { label: "Payment Processors", desc: "PCI-DSS certified gateways to process card and Apple Pay transactions — we never store full card numbers." },
                        { label: "Battery Manufacturers", desc: "For warranty registration and claim processing (Varta, Amaron, Bosch, etc.)." },
                        { label: "Recycling Facilities", desc: "Licensed UAE facilities for compliant disposal of old battery cores." },
                        { label: "Cloud & Analytics", desc: "Google Analytics (anonymised), encrypted cloud hosting, and email providers." },
                        { label: "Legal Authorities", desc: "UAE government authorities, courts, or law enforcement only when legally compelled." },
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
                        All third parties are contractually required to maintain appropriate security measures and may only use your data for the specific purpose for which it was shared.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 5: Cookies
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-pink-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiCookieLine className="h-5 w-5 text-pink-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    5. Cookies & Tracking Technologies
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how visitors use our site.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Types of Cookies
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Essential — required for site to function",
                            "Analytics — Google Analytics 4, anonymised",
                            "Preference — remember your settings",
                            "Marketing — optional, only with consent",
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
                          Your Cookie Controls
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Manage cookies in browser settings",
                            "Block non-essential tracking",
                            "Clear cookies at any time",
                            "Opt-out via Google Analytics opt-out",
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
                      Disabling essential cookies may limit website functionality. We do not control third-party cookies set by embedded services like Google Maps or WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 6: Data Security
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-green-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiLockLine className="h-5 w-5 text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    6. How We Protect Your Data
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We take data security seriously and implement industry-standard safeguards to protect your information from unauthorised access, alteration, or loss:
                    </p>

                    <ul className="space-y-2">
                      {[
                        { label: "Encryption", desc: "HTTPS/TLS on all pages and form submissions; encrypted data at rest in SOC 2 compliant cloud infrastructure." },
                        { label: "Payment Security", desc: "PCI-DSS certified payment processing — we never store full card numbers or CVVs." },
                        { label: "Access Control", desc: "Role-based permissions — only technicians who need your data can view it." },
                        { label: "Monitoring", desc: "Regular security audits, vulnerability scans, and intrusion detection." },
                        { label: "Training", desc: "All staff undergo data protection and confidentiality training." },
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

                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] p-3 flex items-start gap-2">
                      <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-300">
                        While we implement robust safeguards, no internet transmission is 100% secure. We will notify you and relevant UAE authorities within 72 hours of any confirmed breach affecting your personal data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 7: Your Rights
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-indigo-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiUserLine className="h-5 w-5 text-indigo-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    7. Your Privacy Rights
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Under the UAE Personal Data Protection Law and GDPR principles, you have the following rights. To exercise any of them, contact us using the details at the end of this page:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <h4 className="text-sm font-semibold text-white mb-2">
                          Access & Portability
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Right to access your data",
                            "Right to receive a copy of your data",
                            "Right to data portability (machine-readable)",
                            "Right to know what we hold",
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
                          Control & Correction
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {[
                            "Right to rectification of inaccurate data",
                            "Right to erasure (subject to legal retention)",
                            "Right to restrict processing",
                            "Right to object to processing",
                            "Right to withdraw consent",
                            "Right to lodge a complaint",
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
                      We respond to all verified privacy requests within 30 calendar days. Requests are free of charge unless manifestly unfounded or excessive. You may also lodge a complaint with the UAE Data Office.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 8: Data Retention
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-yellow-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiTimeLine className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    8. Data Retention
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by UAE law:
                    </p>

                    <div className="rounded-xl border border-white/8 bg-white/[0.03] overflow-hidden">
                      <table className="w-full text-xs">
                        <thead className="border-b border-white/8 bg-white/[0.03]">
                          <tr>
                            <th className="text-left px-4 py-2.5 font-semibold text-white">
                              Data Type
                            </th>
                            <th className="text-left px-4 py-2.5 font-semibold text-white">
                              Retention Period
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { type: "Booking & service records", period: "5 years (warranty compliance)" },
                            { type: "VAT invoices & payment records", period: "5 years (UAE Federal Tax Authority)" },
                            { type: "Marketing communications", period: "Until unsubscribe (deleted in 30 days)" },
                            { type: "Website analytics", period: "26 months (GA4 default)" },
                            { type: "Security & fraud logs", period: "12 months" },
                          ].map((row, i) => (
                            <tr
                              key={i}
                              className={i !== 4 ? "border-b border-white/5" : ""}
                            >
                              <td className="px-4 py-2.5 text-gray-400">{row.type}</td>
                              <td className="px-4 py-2.5 text-gray-300 font-medium">
                                {row.period}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 9: Children's Privacy
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-red-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiEyeLine className="h-5 w-5 text-red-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    9. Children's Privacy
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Our services are directed to licensed drivers aged 18 and over. We do not knowingly collect personal information from anyone under the age of 18.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "We do not target or market to minors",
                        "If we discover data from a child, we delete it immediately",
                        "Parents or guardians may contact us to verify or delete data",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 10: International Transfers
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-cyan-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiGlobalLine className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    10. International Data Transfers
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      Our services are operated from <span className="text-white font-medium">{city}, {country}</span>. Your personal data is stored primarily within the UAE and European Economic Area (EEA) where our cloud providers operate.
                    </p>
                    <p>
                      If data is transferred outside the UAE/EEA (for example, to an analytics provider in the United States), we ensure appropriate safeguards such as <span className="text-white font-medium">Standard Contractual Clauses</span> or adequacy decisions are in place.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 11: Policy Changes
            ================================================= */}
            <section className="border-t border-white/5 pt-8">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-linear-to-br from-amber-500/20 to-transparent p-[1.5px] shrink-0">
                  <div className="rounded-[10px] bg-[#0D1117] p-2.5">
                    <RiRefreshLine className="h-5 w-5 text-amber-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3">
                    11. Changes to This Policy
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we do, we will:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Update the "Last updated" date at the top of this page',
                        "Notify registered customers via email for significant changes",
                        "Post a prominent notice on our website for material updates",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <RiCheckboxCircleLine className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500">
                      Continued use of our services after the policy is updated constitutes acceptance of the revised terms. We encourage you to review this page periodically.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                Section 12: Contact Us
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
                    12. Contact Our Data Protection Officer
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-400">
                    <p>
                      For any privacy-related question, data access request, or concern about how your information is handled, reach out to our Data Protection Officer directly:
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
                      We respond to all privacy inquiries within <span className="text-white font-medium">24–48 hours</span>. For urgent data breach concerns, please call our hotline directly.
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
                  <RiShieldCheckLine className="h-5 w-5 text-[#FFC400]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Your privacy matters
                  </p>
                  <p className="text-xs text-gray-500">
                    We're committed to protecting your data
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
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