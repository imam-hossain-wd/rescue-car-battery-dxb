"use client";

import Link from "next/link";
import { 
  RiFlashlightLine, 
  RiWhatsappLine, 
  RiCustomerService2Line,
  RiMapPin2Line,
  RiMailLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterXLine,
  RiYoutubeLine,
  RiArrowRightLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  

  const serviceLinks = [
    { name: "Battery Replacement", href: "/services/battery-replacement" },
    { name: "Jump Start", href: "/services/jump-start" },
    { name: "Battery Testing", href: "/services/battery-testing" },
    { name: "Alternator Testing", href: "/services/alternator-testing" },
    { name: "AGM Battery", href: "/services/agm-battery" },
    { name: "EFB Battery", href: "/services/efb-battery" },
    { name: "Emergency Battery Service", href: "/services/emergency" },
  ];

  const areaLinks = [
    { name: "Dubai Marina", href: "/dubai/dubai-marina" },
    { name: "Downtown", href: "/dubai/downtown" },
    { name: "Business Bay", href: "/dubai/business-bay" },
    { name: "JVC", href: "/dubai/jvc" },
    { name: "Al Barsha", href: "/dubai/al-barsha" },
    { name: "Deira", href: "/dubai/deira" },
    { name: "Jumeirah", href: "/dubai/jumeirah" },
    { name: "Dubai Hills", href: "/dubai/dubai-hills" },
    { name: "Mirdif", href: "/dubai/mirdif" },
    { name: "Dubai South", href: "/dubai/dubai-south" },
  ];

  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Warranty Policy", href: "/warranty" },
  ];

  const socialLinks = [
    { icon: RiInstagramLine, href: "#", label: "Instagram" },
    { icon: RiFacebookLine, href: "#", label: "Facebook" },
    { icon: RiTwitterXLine, href: "#", label: "Twitter" },
    { icon: RiYoutubeLine, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="w-full bg-[#090B0D] border-t border-white/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Column 1 - Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFC400] rounded-lg flex items-center justify-center shadow-lg shadow-[#FFC400]/20">
                  <RiFlashlightLine className="w-5 h-5 text-[#090B0D]" />
                </div>
                <div>
                  <span className="font-bold text-white text-lg block leading-tight">RESCUE</span>
                  <span className="text-[10px] font-medium text-gray-400 tracking-wider uppercase">Car Battery Dubai</span>
                </div>
              </Link>
              
              <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
                24/7 mobile car battery replacement and emergency battery assistance across Dubai. Professional on-site testing, delivery and installation for standard, premium, AGM and EFB batteries.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2.5 mb-4">
                <a href="tel:+971501234567" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#FFC400] transition-colors duration-200">
                  <RiCustomerService2Line className="w-4 h-4 text-[#FFC400]" />
                  <span>+971 50 123 4567</span>
                </a>
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#25D366] transition-colors duration-200">
                  <RiWhatsappLine className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
                <a href="mailto:info@rescuecarbatterydubai.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#FFC400] transition-colors duration-200">
                  <RiMailLine className="w-4 h-4 text-[#FFC400]" />
                  <span>info@rescuecarbatterydubai.com</span>
                </a>
                <div className="flex items-center gap-2.5 text-sm text-gray-400">
                  <RiMapPin2Line className="w-4 h-4 text-[#FFC400]" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FFC400]/20 border border-white/10 hover:border-[#FFC400]/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 text-gray-400 hover:text-[#FFC400] transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Battery Services */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Battery Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FFC400] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <RiArrowRightLine className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Popular Areas */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Popular Areas
              </h3>
              <ul className="space-y-2.5">
                {areaLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FFC400] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <RiArrowRightLine className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FFC400] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <RiArrowRightLine className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Emergency Badge */}
              <div className="mt-6 p-4 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-[#FFC400]">24/7 Emergency Available</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Call us anytime, we're always ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {currentYear} Rescue Car Battery Dubai. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-[#FFC400] transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-white/10"></span>
            <Link href="/terms" className="hover:text-[#FFC400] transition-colors duration-200">
              Terms of Service
            </Link>
            <span className="w-px h-3 bg-white/10"></span>
            <Link href="/warranty" className="hover:text-[#FFC400] transition-colors duration-200">
              Warranty Policy
            </Link>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="text-gray-600">Made with ❤️ in Dubai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}