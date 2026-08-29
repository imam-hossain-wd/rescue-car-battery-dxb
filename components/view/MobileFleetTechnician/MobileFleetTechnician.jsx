import { 
  RiUserLine, 
  RiTestTubeLine, 
  RiBattery2Line, 
  RiSmartphoneLine,
  RiShieldCheckLine,
  RiSettings4Line,
  RiArrowRightLine,
  RiTruckLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function MobileFleetTechnician() {
  const trustItems = [
    {
      icon: RiUserLine,
      label: "Uniformed Technicians",
      description: "Professional, trained and certified",
    },
    {
      icon: RiTestTubeLine,
      label: "Professional Battery Tester",
      description: "Advanced diagnostic equipment",
    },
    {
      icon: RiBattery2Line,
      label: "Multiple Batteries Onboard",
      description: "Popular sizes for all vehicles",
    },
    {
      icon: RiSmartphoneLine,
      label: "Digital Payment",
      description: "Card, mobile & cash accepted",
    },
    {
      icon: RiShieldCheckLine,
      label: "Warranty Documentation",
      description: "Clear warranty terms provided",
    },
    {
      icon: RiSettings4Line,
      label: "Safe Installation",
      description: "Professional fitting by experts",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 dark:from-[#0D1117] to-white dark:to-[#090B0D] py-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left - Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                  {/* Image Placeholder */}
                  <div className="aspect-4/3 bg-linear-to-br from-[#090B0D] to-gray-800 flex items-center justify-center relative">
                    <div className="text-center p-8">
                      {/* Van Icon */}
                      <div className="w-24 h-24 mx-auto mb-4 bg-[#FFC400]/10 rounded-2xl flex items-center justify-center">
                        <RiTruckLine className="w-12 h-12 text-[#FFC400]" />
                      </div>
                      <p className="text-white font-bold text-lg">Rescue Car Battery Dubai</p>
                      <p className="text-gray-400 text-sm">Mobile Service Unit</p>
                      
                      {/* Branding overlay */}
                      <div className="absolute top-4 left-4 bg-[#FFC400] text-[#090B0D] px-3 py-1 rounded-full text-xs font-bold">
                        ⚡ On-Demand
                      </div>
                      <div className="absolute bottom-4 right-4 bg-[#090B0D]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Ready to Roll
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#0D1117] rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-white/10 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFC400]/10 flex items-center justify-center">
                      <RiBattery2Line className="w-5 h-5 text-[#FFC400]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#090B0D] dark:text-white">100+ Batteries</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">In Stock Onboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content Section */}
            <div className="order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
                <RiTruckLine className="w-4 h-4 text-[#FFC400]" />
                <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Mobile Fleet</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
                A Mobile Battery Shop <br className="hidden sm:block" />
                <span className="text-[#FFC400]">That Comes to You</span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Our mobile units are equipped with professional diagnostic tools and popular battery sizes, helping our technicians diagnose, replace and test your battery without sending your car to a workshop.
              </p>

              {/* Trust Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
                {trustItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#FFC400]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-3.5 h-3.5 text-[#FFC400]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#090B0D] dark:text-white leading-tight">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-6 py-5 rounded shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
                  <Link href="" className="flex items-center gap-2">
                    Book Mobile Service
                    <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                <Button  variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-6 py-5 rounded font-semibold transition-all duration-200">
                  <Link href="/" className="flex items-center gap-2">
                    <RiUserLine className="w-4 h-4" />
                    Meet Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}