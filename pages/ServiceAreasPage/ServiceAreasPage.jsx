
import Link from "next/link";
import {
  RiMapPin2Line,
  RiArrowRightLine,
  RiFlashlightLine,
  RiTimeLine,
  RiCarLine,
  RiCustomerService2Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/config/siteConfig";
import { serviceAreas } from "@/data/serviceAreas";


const { displayNumber, numberCallLink, whatsappCallLink, city, country } = SiteConfig;

export default function ServiceAreasPage() {

  return (
    <main className="w-full bg-white dark:bg-[#090B0D] overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[#090B0D] overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#FFC400]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <RiMapPin2Line className="w-4 h-4" />
              Coverage Areas
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Mobile Emergency Battery Fleet <span className="text-[#FFC400] relative">
                Stationed Across All Dubai Areas
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 8 200 4" stroke="#FFC400" strokeWidth="2" opacity="0.3"/>
                </svg>
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Our mobile mechanics are parked in key regional zones across Dubai, ensuring 5 to 15-minute dispatch times no matter where you are stranded.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="text-[#FFC400] font-bold">{serviceAreas.length}+</span>
                <span>Areas Covered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <RiTimeLine className="w-4 h-4 text-[#FFC400]" />
                <span>5-15 Min Response</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <RiCarLine className="w-4 h-4 text-[#FFC400]" />
                <span>100% Dubai Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Areas Grid */}
      <section className="w-full bg-linear-to-b from-[#0D1117] to-[#090B0D] py-12 sm:py-16 lg:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge className="inline-flex items-center gap-2 bg-[#FFC400]/10 border-[#FFC400]/20 text-[#FFC400] hover:bg-[#FFC400]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
                  <RiMapPin2Line className="w-3 h-3" />
                  Our Coverage
                </Badge>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {serviceAreas.length} Areas <span className="text-gray-400 text-sm font-normal">in {city}, {country}</span>
                </h2>
              </div>
            </div>

            {serviceAreas.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No Areas Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-[#0D1117] rounded-2xl p-5 transition-all duration-500 border border-gray-200 dark:border-white/10 hover:border-[#FFC400]/50 hover:shadow-2xl hover:shadow-[#FFC400]/10 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-[#FFC400]/5 via-transparent to-[#FFC400]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-transparent via-white/5 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-base font-bold text-[#090B0D] dark:text-white group-hover:text-[#FFC400] transition-colors duration-300">
                        {area.name}
                      </h3>

                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1 mb-3">
                        {area.description}
                      </p>

                      <div className="flex items-center justify-between text-xs border-t border-gray-200 dark:border-white/10 pt-3">
                        <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                          <RiTimeLine className="w-3 h-3 text-[#FFC400]" />
                          {area.eta}
                        </span>
                        <span className="flex items-center gap-1 text-[#FFC400]">
                          <RiFlashlightLine className="w-3 h-3" />
                          Rapid Response
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Callout Bar */}
      <section className="w-full bg-[#0D1117] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC400]/20 flex items-center justify-center shrink-0">
                    <RiFlashlightLine className="w-5 h-5 text-[#FFC400]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-[#090B0D] dark:text-white">
                      Don't see your exact neighborhood listed?
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Our mobile fleet covers 100% of Dubai including residential driveways, basement car parks, highways, and office towers.
                    </p>
                  </div>
                </div>
                <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group shrink-0">
                  <Link href={numberCallLink} className="flex items-center gap-2 text-sm">
                    <RiCustomerService2Line className="w-4 h-4" />
                    Call Now for Immediate Arrival
                    <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full bg-[#090B0D] py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#FFC400]">{serviceAreas.length}+</div>
              <p className="text-xs text-gray-400 mt-1">Areas Covered</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#FFC400]">5-15</div>
              <p className="text-xs text-gray-400 mt-1">Min Response Time</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#FFC400]">100%</div>
              <p className="text-xs text-gray-400 mt-1">Dubai Coverage</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-[#FFC400]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#FFC400]">24/7</div>
              <p className="text-xs text-gray-400 mt-1">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#090B0D] border-t border-white/5 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Ready for Service?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Emergency Battery Service <span className="text-[#FFC400]">Wherever You Are?</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Our mobile rescue team is stationed across all Dubai areas. Contact us now for immediate assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 group">
                <Link href={whatsappCallLink} target="_blank" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-5 h-5" />
                  Send Location on WhatsApp
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button asChild className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200">
                <Link href={numberCallLink} className="flex items-center gap-2">
                  <RiFlashlightLine className="w-5 h-5" />
                  Call {displayNumber}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}