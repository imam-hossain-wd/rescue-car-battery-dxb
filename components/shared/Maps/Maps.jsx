// components/MapSection.tsx
"use client";

import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailAiFill,
  RiWhatsappLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiCarLine,
  RiFlashlightLine,
  RiNavigationLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export default function Maps() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    location,
    streetAddress,
    addressLocality,
    addressRegion,
    addressCountry,
    postalCode,
    mapsLink,
    embedMap,
    serviceAreas,
    city,
    country,
    email,
    emailLink
  } = SiteConfig;

  return (
    <section className="w-full bg-linear-to-b from-[#090B0D] to-[#0D1117] py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            <RiMapPin2Fill className="w-4 h-4" />
            Find Us
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            We're Located in <span className="text-[#FFC400]">{city}, {country}</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Our mobile fleet is strategically positioned across Dubai for rapid response. Visit our headquarters or get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto h-130">
          {/* Left - Business Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
            {/* Brand Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#FFC400]/20 flex items-center justify-center shrink-0">
                <RiMapPin2Fill className="w-6 h-6 text-[#FFC400]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{brandName}</h3>
                <p className="text-xs text-gray-400">Mobile Battery Rescue Service</p>
              </div>

                             <div className="flex items-start gap-3">
                 <RiMapPin2Fill className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Address</p>
                  <p className="text-sm text-white">
                    {streetAddress}, {addressLocality}, {addressRegion}, {addressCountry}
                  </p>
                  {mapsLink && (
                    <Link
                      href={mapsLink}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-[#FFC400] text-xs font-medium mt-1 hover:gap-2 transition-all duration-200"
                    >
                      <RiNavigationLine className="w-3 h-3" />
                      Get Directions
                      <RiArrowRightLine className="w-3 h-3" />
                    </Link>
                  )}
                </div>
               </div>
            </div>

    

            {/* Service Areas */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <RiCarLine className="w-4 h-4 text-[#FFC400]" />
                <h4 className="text-sm font-bold text-white">Service Areas</h4>
                <span className="text-xs text-gray-400">({serviceAreas.length} locations)</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {serviceAreas.map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-[#FFC400]/30 hover:text-[#FFC400] transition-all duration-200"
                  >
                    <RiMapPin2Fill className="w-2.5 h-2.5 text-[#FFC400]" />
                    {area.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1 bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold py-3 rounded-xl shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
                <Link href={numberCallLink} className="flex items-center justify-center gap-2">
                  <RiPhoneFill className="w-4 h-4" />
                  Call Now
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold py-3 rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-200 group">
                <Link href={whatsappCallLink} target="_blank" className="flex items-center justify-center gap-2">
                  <RiWhatsappLine className="w-4 h-4" />
                  WhatsApp
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Map */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl relative ">
            {embedMap ? (
              <div className="w-full h-[400px] sm:h-[450px] lg:h-[550px]">
                <div dangerouslySetInnerHTML={{ __html: embedMap }} className="w-full h-full" />
              </div>
            ) : (
              <div className="w-full h-100 sm:h-112.5 lg:h-137.5 flex flex-col items-center justify-center bg-[#0D1117] p-2 text-center">

                 <iframe
                  title={`${brandName} - Location Map`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28884.938197365485!2d55.25122003473435!3d25.18239777407417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1788196351232!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  className={cn(
                    "transition-opacity duration-700 h-80 md:h-110 opacity-100",
                     
                  )}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>
            )}

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#090B0D]/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-white">Live Location</span>
              </div>
            </div>

            {/* Emergency Badge */}
            <div className="absolute bottom-4 right-4 bg-[#FFC400]/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <RiFlashlightLine className="w-3.5 h-3.5 text-[#090B0D]" />
                <span className="text-xs font-bold text-[#090B0D]">24/7 Emergency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}