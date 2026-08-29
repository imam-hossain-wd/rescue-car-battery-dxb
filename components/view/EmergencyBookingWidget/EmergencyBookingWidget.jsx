"use client";

import { useState } from "react";
import { 
  RiMapPin2Line, 
  RiCarLine, 
  RiSmartphoneLine, 
  RiWhatsappLine,
  RiSendPlane2Line,
  RiCloseLine,
  RiAlertLine,
  RiCheckboxCircleLine
} from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function EmergencyBookingWidget() {
  const [formData, setFormData] = useState({
    location: "",
    carMake: "",
    carModel: "",
    batteryIssue: "",
    phoneNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsApp = () => {
    // Handle WhatsApp redirect with pre-filled message
    const message = `Emergency Battery Rescue Request%0A%0ALocation: ${formData.location || 'Not specified'}%0ACar Make: ${formData.carMake || 'Not specified'}%0ACar Model: ${formData.carModel || 'Not specified'}%0ABattery Issue: ${formData.batteryIssue || 'Not specified'}%0APhone: ${formData.phoneNumber || 'Not specified'}`;
    window.open(`https://wa.me/971XXXXXXXXX?text=${message}`, '_blank');
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Handle location sharing - open WhatsApp with location
          const message = `Emergency Battery Rescue - Location: https://maps.google.com/?q=${latitude},${longitude}`;
          window.open(`https://wa.me/971XXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Please enable location services to share your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const batteryIssues = [
    "Car won't start",
    "Clicking sound",
    "Dim headlights",
    "Battery warning light",
    "Frequent jump starts",
    "Not sure",
  ];

  return (
    <section className="w-full bg-linear-to-br from-[#090B0D] via-[#0D1117] to-[#090B0D] py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Tell Us Where You Are <span className="text-[#FFC400]">We'll Handle the Rest</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Fill in your details and our rescue team will be on their way. Fast, professional, and reliable.
            </p>
          </div>

          {/* Form Card */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-[#090B0D]/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10 animate-in fade-in duration-300">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RiCheckboxCircleLine className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Emergency Assistance Dispatched!</h3>
                  <p className="text-gray-400">Our rescue team is on their way to your location.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Location */}
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                  <RiMapPin2Line className="inline w-3.5 h-3.5 mr-1" />
                  Your Location
                </label>
                <input
                  type="text"
                  placeholder="Dubai Marina, JBR, Downtown, etc."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                  required
                />
              </div>

              {/* Car Make & Model - 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    <RiCarLine className="inline w-3.5 h-3.5 mr-1" />
                    Car Make
                  </label>
                  <input
                    type="text"
                    placeholder="Toyota, BMW, Mercedes, etc."
                    value={formData.carMake}
                    onChange={(e) => setFormData({ ...formData, carMake: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    Car Model
                  </label>
                  <input
                    type="text"
                    placeholder="Camry, X5, S-Class, etc."
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Battery Issue & Phone - 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    <RiAlertLine className="inline w-3.5 h-3.5 mr-1" />
                    Battery Issue
                  </label>
                  <select
                    value={formData.batteryIssue}
                    onChange={(e) => setFormData({ ...formData, batteryIssue: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="" className="bg-[#090B0D]">Select issue</option>
                    {batteryIssues.map((issue) => (
                      <option key={issue} value={issue} className="bg-[#090B0D]">
                        {issue}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                    <RiSmartphoneLine className="inline w-3.5 h-3.5 mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="05X XXX XXXX"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  className="flex-1 bg-[#FFC400] hover:bg-[#FFC400]/90 text-[#090B0D] font-bold py-5 px-6 rounded shadow-lg shadow-[#FFC400]/20 hover:shadow-[#FFC400]/40 transition-all duration-200 text-sm sm:text-base"
                >
                  <RiSendPlane2Line className="w-4 h-4 mr-2" />
                  Get Emergency Assistance
                </Button>
                
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold py-5 px-6 rounded shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-200 text-sm sm:text-base"
                >
                  <RiWhatsappLine className="w-4 h-4 mr-2" />
                  Send Location on WhatsApp
                </Button>
              </div>

              {/* Alternative Action */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleShareLocation}
                  className="text-sm text-gray-400 hover:text-[#FFC400] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <RiMapPin2Line className="w-4 h-4" />
                  📍 Share My Location
                </button>
              </div>
            </form>

            {/* Trust indicators */}
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                24/7 Response
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#FFC400] rounded-full"></span>
                No Hidden Charges
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Genuine Batteries
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Certified Technicians
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}