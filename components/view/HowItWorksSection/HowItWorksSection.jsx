import { 
  RiMapPin2Line, 
  RiTimeLine, 
  RiSettings4Line, 
  RiBankCardLine,
  RiWhatsappLine,
  RiCustomerService2Line,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: RiMapPin2Line,
      title: "Share Your Live Location & Car Details",
      description: "Call our 24/7 hotline or send us your Google Maps location pin over WhatsApp. Tell us your car make, model, and year so we dispatch the exact OEM battery chemistry (AGM, EFB, or Standard SLI).",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      gradient: "from-blue-600/20 to-blue-600/5",
    },
    {
      number: "02",
      icon: RiTimeLine,
      title: "5–15 Minute Mobile Technician Arrival",
      description: "Our nearest certified auto electrician is dispatched immediately in a specialized mobile vehicle equipped with high-precision digital diagnostic tools, auxiliary memory power supplies, and fresh batteries.",
      color: "from-[#FFC400]/20 to-[#FFC400]/5",
      iconColor: "text-[#FFC400]",
      borderColor: "border-[#FFC400]/30",
      gradient: "from-[#FFC400]/20 to-[#FFC400]/5",
    },
    {
      number: "03",
      icon: RiSettings4Line,
      title: "Onsite Diagnostic, Swap & BMS Registration",
      description: "We run a full digital load test on your battery, starter motor, and alternator. Once confirmed, we swap your battery using an auxiliary power keeper to preserve your car's memory settings, followed by computerized ECU/BMS coding.",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      gradient: "from-purple-600/20 to-purple-600/5",
    },
    {
      number: "04",
      icon: RiBankCardLine,
      title: "Onsite Digital System Report & Easy Payment",
      description: "You receive a printed/digital battery health report and an official warranty certificate. Pay easily at your vehicle using Cash, Credit Card, or Apple Pay only after you are 100% satisfied.",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30",
      gradient: "from-green-600/20 to-green-600/5",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Simple Process</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
            How Our Doorstep Mobile Car Battery <span className="text-[#FFC400]">Replacement Service Works</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Get back on the road in 4 simple steps without stepping foot in an auto repair shop.
          </p>
        </div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-linear-to-b from-[#FFC400]/20 via-[#FFC400]/40 to-[#FFC400]/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}>
                  {/* Content */}
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
                    <div className={`bg-white dark:bg-[#0D1117] rounded-2xl p-6 border ${step.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/5 transition-all duration-300 group hover:border-[#FFC400]/50`}>
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-linear-to-br ${step.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-bold text-[#FFC400]">{step.number}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-[#FFC400] shadow-lg shadow-[#FFC400]/30 flex items-center justify-center z-10">
                    <span className="text-lg font-bold text-[#090B0D]">{step.number}</span>
                  </div>

                  {/* Empty spacer */}
                  <div className="w-[calc(50%-2rem)]"></div>
                </div>

                {/* Arrow connector between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg className="w-6 h-6 text-[#FFC400]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet Stacked */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className={`bg-white dark:bg-[#0D1117] rounded-2xl p-6 border ${step.borderColor} hover:shadow-xl hover:shadow-[#FFC400]/5 transition-all duration-300 group hover:border-[#FFC400]/50`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${step.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header with number and icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFC400] flex items-center justify-center shadow-lg shadow-[#FFC400]/30 shrink-0">
                      <span className="text-sm font-bold text-[#090B0D]">{step.number}</span>
                    </div>
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-[#090B0D] dark:text-white mb-2 group-hover:text-[#FFC400] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <svg className="w-6 h-6 text-[#FFC400]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}