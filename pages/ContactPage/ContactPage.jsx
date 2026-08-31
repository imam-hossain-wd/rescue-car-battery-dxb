// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailAiFill,
  RiWhatsappLine,
  RiCustomerService2Line,
  RiArrowRightLine,
  RiFlashlightLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiSendPlane2Line,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiLinkedinFill
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/config/siteConfig";



const {  brandName,
  description,
  displayNumber,
  numberCallLink,
  whatsappCallLink,
  location,
  email,
  emailLink,
  socialLinks,
  city,
  country,
  operatingHours,
  streetAddress,
  addressLocality,
  addressRegion,
  addressCountry,
  postalCode,
  mapsLink,
  embedMap,
  contactLinks}= SiteConfig;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: RiPhoneFill,
      label: "Phone",
      value: displayNumber,
      href: numberCallLink,
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30"
    },
    {
      icon: RiWhatsappLine,
      label: "WhatsApp",
      value: displayNumber,
      href: whatsappCallLink,
      color: "from-[#25D366]/20 to-[#25D366]/5",
      iconColor: "text-[#25D366]",
      borderColor: "border-[#25D366]/30"
    },
    {
      icon: RiMailAiFill,
      label: "Email",
      value: email,
      href: emailLink,
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30"
    },
    {
      icon: RiMapPin2Fill,
      label: "Location",
      value: location,
      href: mapsLink || "#",
      color: "from-[#FFC400]/20 to-[#FFC400]/5",
      iconColor: "text-[#FFC400]",
      borderColor: "border-[#FFC400]/30"
    },
  ];

  return (
    <main className="w-full bg-white dark:bg-[#090B0D] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[#090B0D] overflow-hidden min-h-[50vh] flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <RiCustomerService2Line className="w-4 h-4" />
              Contact Us
            </Badge>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Get in Touch With <span className="text-[#FFC400] relative">
                Our Team
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Have a question about our mobile battery service? Need emergency assistance? Reach out to us anytime. We're here 24/7 to help.
            </p>

            {/* Emergency Contact */}
            <div className="mt-6 inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs text-green-400 font-medium">24/7 Emergency Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] -mt-8 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Link
                  key={index}
                  href={info.href}
                  target={info.label === "Email" || info.label === "Location" ? "_blank" : undefined}
                  className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 border ${info.borderColor} hover:border-[#FFC400]/50 hover:shadow-xl hover:shadow-[#FFC400]/5 hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${info.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${info.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{info.label}</h3>
                    <p className="text-sm font-medium text-white group-hover:text-[#FFC400] transition-colors duration-300 mt-1">
                      {info.value}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-16 sm:py-20 lg:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                <RiSendPlane2Line className="w-4 h-4" />
                Send a Message
              </Badge>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                We'd Love to <span className="text-[#FFC400]">Hear From You</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Fill in the form below and our team will get back to you within 15 minutes.
              </p>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <RiCheckboxCircleLine className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-green-400">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#090B0D]">Select a subject</option>
                    <option value="Emergency Service" className="bg-[#090B0D]">🚨 Emergency Service</option>
                    <option value="Battery Inquiry" className="bg-[#090B0D]">🔋 Battery Inquiry</option>
                    <option value="Pricing Question" className="bg-[#090B0D]">💰 Pricing Question</option>
                    <option value="Service Area" className="bg-[#090B0D]">📍 Service Area</option>
                    <option value="Feedback" className="bg-[#090B0D]">💬 Feedback</option>
                    <option value="Other" className="bg-[#090B0D]">📝 Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold py-3 rounded-xl shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <RiSendPlane2Line className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Right Column - Info & Operating Hours */}
            <div className="space-y-6">
              {/* Map Embed */}
              {embedMap && (
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <div dangerouslySetInnerHTML={{ __html: embedMap }} />
                </div>
              )}

              {/* Operating Hours */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <RiTimeLine className="w-5 h-5 text-[#FFC400]" />
                  <h3 className="text-sm font-bold text-white">Operating Hours</h3>
                </div>
                <div className="space-y-2">
                  {operatingHours.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{item.day}</span>
                      <span className="text-white font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Details */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <RiMapPin2Fill className="w-5 h-5 text-[#FFC400]" />
                  <h3 className="text-sm font-bold text-white">Our Location</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {streetAddress}, {addressLocality}, {addressRegion}, {addressCountry} {postalCode}
                </p>
                {mapsLink && (
                  <Link
                    href={mapsLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[#FFC400] text-sm font-medium mt-3 hover:gap-3 transition-all duration-200"
                  >
                    Get Directions
                    <RiArrowRightLine className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {/* Quick Emergency Contact */}
              <div className="bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Emergency Support</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Need immediate assistance? Call us now for 24/7 emergency service.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-2 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200">
                    <Link href={numberCallLink} className="flex items-center gap-2 text-sm">
                      <RiPhoneFill className="w-4 h-4" />
                      Call {displayNumber}
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-200">
                    <Link href={whatsappCallLink} target="_blank" className="flex items-center gap-2 text-sm">
                      <RiWhatsappLine className="w-4 h-4" />
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="w-full bg-[#0D1117] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 max-w-4xl mx-auto">
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <RiShieldCheckLine className="w-4 h-4 text-[#FFC400]" />
              RTA Compliant
            </span>
            <span className="w-px h-6 bg-white/10 hidden sm:block"></span>
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <RiCheckboxCircleLine className="w-4 h-4 text-[#FFC400]" />
              No Hidden Fees
            </span>
            <span className="w-px h-6 bg-white/10 hidden sm:block"></span>
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <RiTimeLine className="w-4 h-4 text-[#FFC400]" />
              24/7 Availability
            </span>
            <span className="w-px h-6 bg-white/10 hidden sm:block"></span>
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <RiFlashlightLine className="w-4 h-4 text-[#FFC400]" />
              5-15 Min Response
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}