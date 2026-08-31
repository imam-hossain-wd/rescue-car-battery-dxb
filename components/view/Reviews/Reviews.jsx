"use client";

import { useState, useEffect } from "react";
import {
  RiStarFill,
  RiStarHalfFill,
  RiStarLine,
  RiCheckboxCircleLine,
  RiVerifiedBadgeFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMessage2Line,
  RiUserLine,
  RiMapPin2Line,
  RiTimeLine,
  RiShieldCheckLine,
  RiArrowRightLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Tariq M.",
      location: "Downtown Dubai",
      rating: 5,
      verified: true,
      date: "2 days ago",
      content: "Saved me on Sheikh Zayed Road during peak summer heat! Tech arrived in 12 mins, swapped my BMW AGM battery, registered the BMS, and I paid with Apple Pay. 10/10 service!",
      car: "BMW",
      badge: "Verified Review",
    },
    {
      id: 2,
      name: "Sarah K.",
      location: "Business Bay",
      rating: 5,
      verified: true,
      date: "5 days ago",
      content: "My Porsche Macan battery died in my basement car park in Business Bay. Called these guys, and they were here in 10 minutes. They used a memory saver so none of my Porsche settings were lost and registered the battery computer right there. Outstanding professional service!",
      car: "Porsche Macan",
      badge: "Verified Review",
    },
    {
      id: 3,
      name: "Omar H.",
      location: "Al Karama",
      rating: 5,
      verified: true,
      date: "1 week ago",
      content: "I was stranded in Al Karama with my Toyota Prado. The mobile mechanic arrived in 12 minutes, tested my alternator, showed me the battery was dead, and installed a brand new Amaron battery with a 2-year warranty. Upfront price with zero extra fees.",
      car: "Toyota Prado",
      badge: "Verified Review",
    },
    {
      id: 4,
      name: "Vikram S.",
      location: "Dubai Marina",
      rating: 5,
      verified: true,
      date: "2 weeks ago",
      content: "Super fast dispatch to Dubai Marina! Honest advice and transparent pricing. Highly recommend their 24/7 emergency service. The technician was professional and explained everything clearly.",
      car: "Nissan",
      badge: "Verified Review",
    },
  ];

  const totalReviews = reviews.length;
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(nextReview, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <RiStarFill key={`full-${i}`} className="w-4 h-4 text-[#FFC400] fill-[#FFC400]" />
        ))}
        {hasHalfStar && <RiStarHalfFill className="w-4 h-4 text-[#FFC400] fill-[#FFC400]" />}
        {[...Array(emptyStars)].map((_, i) => (
          <RiStarLine key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
        ))}
      </div>
    );
  };

  // Aggregate Rating Schema
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Car Battery Replacement Dubai",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15,000+",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify(aggregateRating)}
      </script>

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <RiMessage2Line className="w-4 h-4 text-[#FFC400]" />
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Testimonials</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            What Dubai Drivers Say About <span className="text-[#FFC400]">Our Mobile Battery Service</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Read real reviews from stranded drivers saved by our rapid response mobile team.
          </p>
        </div>

        {/* Aggregate Rating Display */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="bg-white dark:bg-[#0D1117] rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#FFC400]">4.9 / 5.0</div>
                  <div className="flex items-center justify-center gap-0.5 mt-1">
                    {renderStars(4.9)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <RiVerifiedBadgeFill className="w-4 h-4 text-blue-500" />
                  Google Verified
                </span>
                <span className="w-px h-6 bg-gray-300 dark:bg-gray-700"></span>
                <span className="flex items-center gap-1.5">
                  <RiCheckboxCircleLine className="w-4 h-4 text-green-500" />
                  15,000+ Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-6 z-10 w-10 h-10 rounded-full bg-[#090B0D] border border-white/10 hover:bg-[#FFC400] hover:text-[#090B0D] hover:border-[#FFC400] transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Previous review"
          >
            <RiArrowLeftSLine className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-6 z-10 w-10 h-10 rounded-full bg-[#090B0D] border border-white/10 hover:bg-[#FFC400] hover:text-[#090B0D] hover:border-[#FFC400] transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Next review"
          >
            <RiArrowRightSLine className="w-5 h-5" />
          </button>

          {/* Review Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="min-w-full px-2">
                  <div className="bg-white dark:bg-[#0D1117] rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-[#FFC400]/10 flex items-center justify-center shrink-0">
                          <RiUserLine className="w-6 h-6 text-[#FFC400]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-[#090B0D] dark:text-white">
                              {review.name}
                            </h4>
                            {review.verified && (
                              <RiVerifiedBadgeFill className="w-4 h-4 text-blue-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <RiMapPin2Line className="w-3 h-3" />
                            <span>{review.location}</span>
                            <span className="w-px h-3 bg-gray-300 dark:bg-gray-700"></span>
                            <RiTimeLine className="w-3 h-3" />
                            <span>{review.date}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStars(review.rating)}
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {review.rating}.0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFC400]/10 text-[#FFC400] text-[10px] font-semibold">
                          <RiCheckboxCircleLine className="w-3 h-3" />
                          {review.badge}
                        </span>
                      </div>
                    </div>

                    {/* Review Content */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      "{review.content}"
                    </p>

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        🚗 {review.car}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <RiShieldCheckLine className="w-3 h-3 text-[#FFC400]" />
                        Verified Service
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#FFC400]"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-[#FFC400]/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
              <Link href="#" className="flex items-center gap-2">
                <RiMessage2Line className="w-4 h-4" />
                Read More Reviews
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
              <Link href="#" className="flex items-center gap-2">
                <RiStarFill className="w-4 h-4 text-[#FFC400]" />
                Leave a Review
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}