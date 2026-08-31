"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  RiWhatsappLine, 
  RiCustomerService2Line, 
  RiMenuLine, 
  RiCloseLine,
  RiArrowDropDownLine,
  RiFlashlightLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Battery Services", href: "/services" },
    { name: "Battery Brands", href: "/battery-brands" },
    { name: "Car Brands", href: "/car-brands" },
    { name: "Dubai Areas", href: "/areas" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-[#090B0D]/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-white/10" 
          : "bg-white dark:bg-[#090B0D] border-b border-gray-100 dark:border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#FFC400] rounded-lg shadow-lg shadow-[#FFC400]/20 group-hover:shadow-[#FFC400]/30 transition-all duration-300">
              <RiFlashlightLine className="w-5 h-5 lg:w-6 lg:h-6 text-[#090B0D]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold tracking-tight transition-all duration-300 ${
                isScrolled ? "text-base lg:text-lg" : "text-lg lg:text-xl"
              } text-[#090B0D] dark:text-white`}>
                RESCUE
              </span>
              <span className="text-[10px] lg:text-[11px] font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">
                Car Battery Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "text-[#FFC400] bg-[#FFC400]/10"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#FFC400] hover:bg-[#FFC400]/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            {/* WhatsApp Button - Always Visible */}
            <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-3 lg:px-4 py-2 h-auto text-xs lg:text-sm font-semibold rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiWhatsappLine className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Link>
            </Button>

            {/* Call Button - Always Visible */}
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] px-3 lg:px-4 py-2 h-auto text-xs lg:text-sm font-bold rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiCustomerService2Line className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="hidden sm:inline">Call 24/7</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#090B0D] dark:text-white hover:bg-[#FFC400]/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenuLine className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-16 bg-white dark:bg-[#090B0D] border-b border-gray-200 dark:border-white/10 shadow-lg transition-all duration-300 transform ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}
      >
        <nav className="container mx-auto px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === item.href
                  ? "text-[#FFC400] bg-[#FFC400]/10"
                  : "text-gray-600 dark:text-gray-300 hover:text-[#FFC400] hover:bg-[#FFC400]/5"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Bottom Actions */}
          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-white/10 space-y-2">
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold rounded-full shadow-lg shadow-[#25D366]/20">
              <Link href="#" className="flex items-center justify-center gap-2">
                <RiWhatsappLine className="w-5 h-5" />
                WhatsApp Now
              </Link>
            </Button>
            <Button asChild className="w-full bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold rounded-full shadow-lg shadow-[#FFC400]/20">
              <Link href="#" className="flex items-center justify-center gap-2">
                <RiCustomerService2Line className="w-5 h-5" />
                Call 24/7
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}