"use client"

import { useState } from "react";
import { 
  RiQuestionLine, 
  RiAddLine, 
  RiSubtractLine,
  RiArrowRightLine,
  RiCustomerService2Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can you reach me in Dubai?",
      answer: "Our response time typically ranges from 5-15 minutes, depending on your exact location, traffic conditions, and technician availability. We'll provide an estimated arrival time when you share your location. ETA is confirmed after location sharing for accuracy."
    },
    {
      question: "Do you provide 24/7 car battery replacement?",
      answer: "Yes, we operate 24 hours a day, 7 days a week, including weekends and public holidays. We're always ready to assist you with any battery emergency, day or night."
    },
    {
      question: "Can you replace my battery at home?",
      answer: "Absolutely. We come directly to your home, office, parking area, or any location in Dubai. You don't need to bring your car anywhere. Our mobile service brings the workshop to you."
    },
    {
      question: "Can you replace a battery in basement parking?",
      answer: "Yes, our mobile service can reach you in basement parking, underground garages, and other covered areas across Dubai. We're equipped to handle all parking situations."
    },
    {
      question: "Do you provide genuine car batteries?",
      answer: "Yes, we only supply factory-sealed, genuine batteries from trusted brands like VARTA, Bosch, Amaron, ACDelco, and others. We never use recycled or refurbished batteries as new."
    },
    {
      question: "How much does a car battery cost in Dubai?",
      answer: "Battery prices vary depending on your vehicle, battery type, capacity, and warranty. We provide transparent quotes before installation. Prices typically range from AED 250 to AED 1,500+ for premium AGM batteries."
    },
    {
      question: "Which battery does my car need?",
      answer: "We'll recommend the right battery based on your vehicle make, model, year, and electrical requirements. Send us your car details and we'll help you choose the perfect match."
    },
    {
      question: "Do you replace AGM and EFB batteries?",
      answer: "Yes, we specialize in AGM (Absorbent Glass Mat) and EFB (Enhanced Flooded Battery) replacement for modern Start-Stop vehicles and high-electrical-demand cars."
    },
    {
      question: "Do you provide battery warranty?",
      answer: "Yes, all our batteries come with a manufacturer's warranty. We provide clear warranty terms and documentation before installation. Warranties typically range from 12 to 48 months depending on the battery tier."
    },
    {
      question: "Can you jump-start my car instead of replacing the battery?",
      answer: "Yes, we offer professional jump-start services. However, if the battery is failing, we recommend replacement to avoid being stranded again. We'll test your battery and advise the best solution."
    },
    {
      question: "Will you test my alternator?",
      answer: "Yes, we perform comprehensive charging system testing to ensure the problem isn't your alternator. We check battery voltage, charging output, and starting performance."
    },
    {
      question: "Do you service luxury cars?",
      answer: "Absolutely. We service all luxury vehicles including Mercedes, BMW, Audi, Porsche, Range Rover, Bentley, Rolls-Royce, Ferrari, Lamborghini, and more."
    },
    {
      question: "Which areas of Dubai do you cover?",
      answer: "We cover all areas of Dubai including Marina, JBR, JLT, Downtown, Business Bay, DIFC, Sheikh Zayed Road, Al Barsha, JVC, JVT, Arabian Ranches, Motor City, Sports City, Dubai Silicon Oasis, International City, Mirdif, Deira, Bur Dubai, and many more."
    },
    {
      question: "Can I pay by card?",
      answer: "Yes, we accept card payments, digital payments, and cash. Payment is processed after the service is completed. We offer multiple payment options for your convenience."
    },
    {
      question: "What happens to my old battery?",
      answer: "We responsibly remove and recycle your old battery in accordance with environmental regulations. You don't need to worry about disposal."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-linear-to-b from-white dark:from-[#090B0D] to-gray-50 dark:to-[#0D1117] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FFC400]/10 border border-[#FFC400]/20 rounded-full px-4 py-1.5 mb-4">
              <RiQuestionLine className="w-4 h-4 text-[#FFC400]" />
              <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-wider">Got Questions?</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090B0D] dark:text-white mb-3">
              Frequently Asked <span className="text-[#FFC400]">Questions</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Everything you need to know about our mobile battery rescue service. Can't find your answer? Contact us directly.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-[#0D1117] rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-[#FFC400]/50 shadow-lg shadow-[#FFC400]/5'
                    : 'border-gray-200 dark:border-white/10 hover:border-[#FFC400]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#090B0D] dark:text-white flex-1">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#FFC400]/10 flex items-center justify-center transition-transform duration-300">
                    {openIndex === index ? (
                      <RiSubtractLine className="w-4 h-4 text-[#FFC400]" />
                    ) : (
                      <RiAddLine className="w-4 h-4 text-[#FFC400]" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <div className="pt-1 border-t border-gray-200 dark:border-white/10">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-10 sm:mt-12">
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <Button  className="bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 group">
                <Link href="#" className="flex items-center gap-2">
                  <RiCustomerService2Line className="w-4 h-4" />
                  Still Have Questions?
                  <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button variant="outline" className="border-2 border-[#090B0D] dark:border-white hover:bg-[#090B0D] hover:text-white dark:hover:bg-white dark:hover:text-[#090B0D] px-8 py-3 rounded-full font-semibold transition-all duration-200">
                <Link href="#" className="flex items-center gap-2">
                  <RiQuestionLine className="w-4 h-4" />
                  View All FAQs
                </Link>
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}