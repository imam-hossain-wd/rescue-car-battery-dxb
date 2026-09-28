"use client";

import { useState } from "react";
import {
  RiMapPin2Line,
  RiCarLine,
  RiSmartphoneLine,
  RiWhatsappLine,
  RiSendPlane2Line,
  RiAlertLine,
  RiCheckboxCircleLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiUserStarLine,
  RiArrowRightLine,
  RiLoader4Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export default function EmergencyBookingWidget() {
  const { whatsappCallLink, numberCallLink, brandName } = SiteConfig;

  const [formData, setFormData] = useState({
    location: "",
    carMake: "",
    carModel: "",
    batteryIssue: "",
    phoneNumber: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const batteryIssues = [
    "Car won't start",
    "Clicking sound when starting",
    "Dim headlights",
    "Battery warning light on",
    "Needs frequent jump starts",
    "Not sure — need diagnosis",
  ];

  const trustPoints = [
    {
      icon: RiFlashlightLine,
      title: "24/7 Emergency Response",
      text: "Day or night, weekends and holidays.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Genuine Batteries Only",
      text: "VARTA, Bosch, Amaron, ACDelco & more.",
    },
    {
      icon: RiUserStarLine,
      title: "Certified Technicians",
      text: "Trained for luxury & Start-Stop vehicles.",
    },
    {
      icon: RiTimeLine,
      title: "No Hidden Charges",
      text: "Transparent quote before we dispatch.",
    },
  ];

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const buildWhatsAppMessage = () => {
    const lines = [
      `🚨 *Emergency Battery Rescue Request*`,
      ``,
      `📍 *Location:* ${formData.location || "Not specified"}`,
      `🚗 *Vehicle:* ${formData.carMake || "—"} ${formData.carModel || ""}`.trim(),
      `⚠️ *Issue:* ${formData.batteryIssue || "Not specified"}`,
      `📞 *Phone:* ${formData.phoneNumber || "Not specified"}`,
      ``,
      `Sent from ${brandName}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const url = whatsappCallLink.includes("?")
      ? `${whatsappCallLink}&text=${buildWhatsAppMessage()}`
      : `${whatsappCallLink}?text=${buildWhatsAppMessage()}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3500);
  };

  const handleQuickWhatsApp = () => {
    const quickMsg = encodeURIComponent(
      `🚨 Emergency battery help needed — please assist.`,
    );
    const url = whatsappCallLink.includes("?")
      ? `${whatsappCallLink}&text=${quickMsg}`
      : `${whatsappCallLink}?text=${quickMsg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const loc = `https://maps.google.com/?q=${latitude},${longitude}`;
        const msg = encodeURIComponent(
          `🚨 Emergency battery help — my location: ${loc}`,
        );
        const url = whatsappCallLink.includes("?")
          ? `${whatsappCallLink}&text=${msg}`
          : `${whatsappCallLink}?text=${msg}`;
        window.open(url, "_blank", "noopener,noreferrer");
      },
      () => alert("Please enable location services to share your location."),
    );
  };

  const inputBase =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all duration-200 focus:border-[#FFC400]/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-[#FFC400]/15";

  const labelBase =
    "flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 mb-2";

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[#FFC400]/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#25D366]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#FFC400]/[0.04] blur-3xl pointer-events-none" />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER ============ */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Tell Us Where You Are —{" "}
            <span className="relative inline-block text-[#FFC400]">
              We Handle the Rest
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

          <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Fill in the details below — or send us your location on WhatsApp for
            the fastest response.
          </p>
        </div>

        {/* ============ MAIN GRID ============ */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-5 lg:gap-6 items-stretch">
          {/* ---------- LEFT: Trust Panel ---------- */}
          <aside className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 sm:p-7">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

            <div className="relative flex h-full flex-col">
              {/* Featured WhatsApp quick action */}
              <div className="rounded-2xl border border-[#25D366]/25 bg-gradient-to-br from-[#25D366]/[0.08] to-transparent p-5 mb-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/15">
                    <RiWhatsappLine className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Fastest option
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Chat with us on WhatsApp
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleQuickWhatsApp}
                  className={cn(
                    "group/btn h-11 w-full rounded-xl bg-[#25D366] hover:bg-green-600 text-sm font-bold text-white",
                    "transition-all duration-300",
                  )}
                >
                  <span className="flex items-center justify-center gap-2">
                    <RiWhatsappLine className="h-4 w-4" />
                    Open WhatsApp
                    <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              </div>

              {/* Trust points */}
              <div className="flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-4">
                  Why drivers choose us
                </div>

                <ul className="space-y-4">
                  {trustPoints.map((point, i) => {
                    const Icon = point.icon;
                    return (
                      <li
                        key={point.title}
                        className={cn(
                          "flex items-start gap-3",
                          i !== trustPoints.length - 1 &&
                            "pb-4 border-b border-white/[0.05]",
                        )}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#FFC400]/20 bg-[#FFC400]/10">
                          <Icon className="h-4 w-4 text-[#FFC400]" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white">
                            {point.title}
                          </div>
                          <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">
                            {point.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          {/* ---------- RIGHT: Form ---------- */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-6 sm:p-7 lg:p-8">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC400] to-transparent opacity-70" />
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#FFC400]/10 blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Form header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Request Emergency Assistance
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Takes about 30 seconds
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </span>
              </div>

              {/* Success overlay */}
              {status === "sent" && (
                <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-[#090B0D]/95 backdrop-blur-md">
                  <div className="text-center p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15">
                      <RiCheckboxCircleLine className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                      Continue the chat on WhatsApp — our team responds in
                      minutes.
                    </p>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Location */}
                <div>
                  <label className={labelBase}>
                    <RiMapPin2Line className="h-3.5 w-3.5" />
                    Your Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai Marina, JBR, Downtown…"
                    value={formData.location}
                    onChange={handleChange("location")}
                    className={inputBase}
                    required
                    autoComplete="street-address"
                  />
                </div>

                {/* Car make + model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelBase}>
                      <RiCarLine className="h-3.5 w-3.5" />
                      Car Make
                    </label>
                    <input
                      type="text"
                      placeholder="Toyota, BMW…"
                      value={formData.carMake}
                      onChange={handleChange("carMake")}
                      className={inputBase}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label className={labelBase}>
                      <RiCarLine className="h-3.5 w-3.5" />
                      Car Model
                    </label>
                    <input
                      type="text"
                      placeholder="Camry, X5…"
                      value={formData.carModel}
                      onChange={handleChange("carModel")}
                      className={inputBase}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Issue + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelBase}>
                      <RiAlertLine className="h-3.5 w-3.5" />
                      Battery Issue
                    </label>
                    <select
                      value={formData.batteryIssue}
                      onChange={handleChange("batteryIssue")}
                      className={cn(
                        inputBase,
                        "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23a1a1aa%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:16px_16px] bg-[right_0.9rem_center] bg-no-repeat pr-10",
                      )}
                      required
                    >
                      <option value="" className="bg-[#090B0D]">
                        Select issue
                      </option>
                      {batteryIssues.map((issue) => (
                        <option
                          key={issue}
                          value={issue}
                          className="bg-[#090B0D]"
                        >
                          {issue}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelBase}>
                      <RiSmartphoneLine className="h-3.5 w-3.5" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="05X XXX XXXX"
                      value={formData.phoneNumber}
                      onChange={handleChange("phoneNumber")}
                      className={inputBase}
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "group/btn h-12 flex-1 rounded-xl bg-[#FFC400] text-sm font-bold text-[#090B0D]",
                      "transition-all duration-300",
                      "disabled:cursor-not-allowed disabled:opacity-70",
                    )}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {status === "sending" ? (
                        <>
                          <RiLoader4Line className="h-4 w-4 animate-spin" />
                          Opening WhatsApp…
                        </>
                      ) : (
                        <>
                          <RiSendPlane2Line className="h-4 w-4" />
                          Send Request
                          <RiArrowRightLine className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </>
                      )}
                    </span>
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleShareLocation}
                    className={cn(
                      "group/loc h-12 shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-zinc-300",
                      "transition-all duration-300",
                      "hover:border-[#FFC400]/40 hover:bg-[#FFC400]/10 hover:text-[#FFC400]",
                    )}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <RiMapPin2Line className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        Share Location
                      </span>
                      <span className="sm:hidden">Share</span>
                    </span>
                  </Button>
                </div>

                {/* Micro-note */}
                <p className="text-center text-[11px] text-zinc-500 leading-relaxed pt-1">
                  By submitting, WhatsApp opens with your details pre-filled —
                  you send the message to us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}