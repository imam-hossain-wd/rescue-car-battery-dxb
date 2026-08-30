"use client";

import { useState, useRef, useEffect } from "react";
import { 
  RiArrowLeftSLine, 
  RiArrowRightSLine,
  RiShieldCheckLine,
  RiAwardLine,
  RiFlashlightLine,
  RiCarLine,
  RiBattery2Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BatteryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const batteries = [
    {
      id: 1,
      name: "VARTA",
      logo: "/brands/varta.svg",
      color: "from-blue-600/20 to-blue-600/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      description: "Germany's finest AGM & EFB technology.",
      recommendation: "Recommended for BMW, Mercedes-Benz, Audi, Volkswagen, Porsche.",
      badge: "Premium",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Amaron",
      logo: "/brands/amaron.svg",
      color: "from-green-600/20 to-green-600/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
      description: "Heavy-duty Silver Alloy technology engineered for extreme GCC heat resistance.",
      recommendation: "Recommended for Toyota, Nissan, Honda, Hyundai.",
      badge: "Best Seller",
      badgeColor: "bg-[#FFC400] text-[#090B0D]",
    },
    {
      id: 3,
      name: "ACDelco",
      logo: "/brands/acdelco.svg",
      color: "from-red-600/20 to-red-600/5",
      iconColor: "text-red-400",
      borderColor: "border-red-500/30",
      description: "Trusted American OEM maintenance-free batteries.",
      recommendation: "Recommended for Chevrolet, GMC, Ford, Cadillac.",
      badge: "OEM",
      badgeColor: "bg-red-500",
    },
    {
      id: 4,
      name: "Solite",
      logo: "/brands/solite.svg",
      color: "from-blue-400/20 to-blue-400/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-400/30",
      description: "Official OEM Korean battery supplier.",
      recommendation: "Recommended for Kia, Hyundai, Genesis.",
      badge: "OEM",
      badgeColor: "bg-blue-400",
    },
    {
      id: 5,
      name: "Bosch",
      logo: "/brands/bosch.svg",
      color: "from-red-500/20 to-red-500/5",
      iconColor: "text-red-400",
      borderColor: "border-red-500/30",
      description: "High-performance German engineering with superior cold cranking power and long lifespan.",
      recommendation: "Recommended for European luxury vehicles.",
      badge: "Premium",
      badgeColor: "bg-red-500",
    },
    {
      id: 6,
      name: "Optima",
      logo: "/brands/optima.svg",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      description: "AGM batteries designed for modified 4x4 off-road vehicles and performance cars.",
      recommendation: "Recommended for off-road SUVs, 4x4, and performance vehicles.",
      badge: "Performance",
      badgeColor: "bg-purple-500",
    },
  ];

  const totalSlides = batteries.length;
  const slidesToShow = 3;
  const maxIndex = totalSlides - slidesToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch/Click drag handling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Reset current index on resize to prevent out of bounds
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, maxIndex]);

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiBattery2Line className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Premium Brands</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            Genuine OEM & Premium Battery Brands <span className="text-[#FFC400]">We Stock & Install Onsite</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            100% Authentic GCC-Spec stock featuring fresh manufacturing dates and manufacturer warranty certificates.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 z-10 w-10 h-10 rounded-full bg-[#090B0D] border border-white/10 hover:bg-[#FFC400] hover:text-[#090B0D] hover:border-[#FFC400] transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Previous slide"
          >
            <RiArrowLeftSLine className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-6 z-10 w-10 h-10 rounded-full bg-[#090B0D] border border-white/10 hover:bg-[#FFC400] hover:text-[#090B0D] hover:border-[#FFC400] transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Next slide"
          >
            <RiArrowRightSLine className="w-5 h-5" />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {batteries.map((battery) => (
                <div
                  key={battery.id}
                  className={`min-w-[${100 / slidesToShow}%] px-3 shrink-0`}
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className={`group relative bg-white dark:bg-[#0D1117] rounded-2xl p-6 border ${battery.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/10 hover:-translate-y-1 transition-all duration-300 h-full`}>
                    {/* Badge */}
                    <div className={`absolute -top-2 -right-2 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg ${battery.badgeColor}`}>
                      {battery.badge}
                    </div>

                    {/* Brand Logo Placeholder */}
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-linear-to-br ${battery.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg font-bold text-[#090B0D] dark:text-white">{battery.name}</span>
                    </div>

                    {/* Brand Name */}
                    <h3 className="text-xl font-bold text-[#090B0D] dark:text-white text-center mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
                      {battery.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-3">
                      {battery.description}
                    </p>

                    {/* Recommendation */}
                    <div className="bg-white/5 rounded-xl p-3 border border-gray-200 dark:border-white/10">
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        <span className="font-semibold text-[#FFC400]">✓</span> {battery.recommendation}
                      </p>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-3 mt-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <RiShieldCheckLine className="w-3 h-3 text-[#FFC400]" />
                        Genuine
                      </span>
                      <span className="w-px h-3 bg-gray-300 dark:bg-gray-700"></span>
                      <span className="flex items-center gap-1">
                        <RiAwardLine className="w-3 h-3 text-[#FFC400]" />
                        Warranty
                      </span>
                      <span className="w-px h-3 bg-gray-300 dark:bg-gray-700"></span>
                      <span className="flex items-center gap-1">
                        <RiFlashlightLine className="w-3 h-3 text-[#FFC400]" />
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#FFC400]"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-[#FFC400]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                <RiCarLine className="w-4 h-4" />
                Find Battery for My Car
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                View All Brands
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}