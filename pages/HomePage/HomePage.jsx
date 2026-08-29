import AllCarBrands from '@/components/view/AllCarBrands/AllCarBrands'
import BatteryBrandShowcase from '@/components/view/BatteryBrandShowcase/BatteryBrandShowcase'
import BatteryCategories from '@/components/view/BatteryCategories/BatteryCategories'
import CoreValueProposition from '@/components/view/CoreValueProposition/CoreValueProposition'
import DubaiServiceAreas from '@/components/view/DubaiServiceAreas/DubaiServiceAreas'
import EmergencyBookingWidget from '@/components/view/EmergencyBookingWidget/EmergencyBookingWidget'
import EmergencySituations from '@/components/view/EmergencySituations/EmergencySituations'
import Hero from '@/components/view/Hero/Hero'
import HonestPricing from '@/components/view/HonestPricing/HonestPricing'
import HowRescueWorks from '@/components/view/HowRescueWorks/HowRescueWorks'
import InstantTrustStrip from '@/components/view/InstantTrustStrip/InstantTrustStrip'
import ServicesSection from '@/components/view/ServicesSection/ServicesSection'
import React from 'react'

export default function HomePage() {
  return (
    <div>
    
      <Hero />
      <InstantTrustStrip />
      <EmergencyBookingWidget/>
      <CoreValueProposition />
      <ServicesSection />
      <HowRescueWorks />
      <BatteryBrandShowcase />
      <BatteryCategories />
      <AllCarBrands />
      <EmergencySituations />
      <HonestPricing />
      <DubaiServiceAreas />
       </div>
  )
}
