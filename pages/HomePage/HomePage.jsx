import AllCarBrands from '@/components/view/AllCarBrands/AllCarBrands'
import BatteryBrandShowcase from '@/components/view/BatteryBrandShowcase/BatteryBrandShowcase'
import BatteryCarousel from '@/components/view/BatteryCarousel/BatteryCarousel'
import BatteryCategories from '@/components/view/BatteryCategories/BatteryCategories'
import BatteryFailingSigns from '@/components/view/BatteryFailingSigns/BatteryFailingSigns'
import ComparisonSection from '@/components/view/ComparisonSection/ComparisonSection'
import CoreValueProposition from '@/components/view/CoreValueProposition/CoreValueProposition'
import CTA from '@/components/view/CTA/CTA'
import DubaiServiceAreas from '@/components/view/DubaiServiceAreas/DubaiServiceAreas'
import EmergencyBookingWidget from '@/components/view/EmergencyBookingWidget/EmergencyBookingWidget'
import EmergencySituations from '@/components/view/EmergencySituations/EmergencySituations'
import EmergencyTrustBanner from '@/components/view/EmergencyTrustBanner/EmergencyTrustBanner'
import FAQSection from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import Hero from '@/components/view/Hero/Hero'
import HonestPricing from '@/components/view/HonestPricing/HonestPricing'
import HowItWorksSection from '@/components/view/HowItWorksSection/HowItWorksSection'
import HowRescueWorks from '@/components/view/HowRescueWorks/HowRescueWorks'
import InstantTrustStrip from '@/components/view/InstantTrustStrip/InstantTrustStrip'
import MobileFleetTechnician from '@/components/view/MobileFleetTechnician/MobileFleetTechnician'
import ServicesSection from '@/components/view/ServicesSection/ServicesSection'
import WhoWeAre from '@/components/view/WhoWeAre/WhoWeAre'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import React from 'react'

export default function HomePage() {
  return (
    <div>
    
      <Hero />
      <EmergencyTrustBanner/>
      <HowItWorksSection/>
      <FeaturedServices/>
      <WhoWeAre/>
      <WhyChooseUs />
      <BatteryCarousel/>
      <InstantTrustStrip />
      <CoreValueProposition />
      <ServicesSection />
      <HowRescueWorks />
      <BatteryBrandShowcase />
      <BatteryCategories />
      <AllCarBrands />
      <EmergencySituations />
      <HonestPricing />
      <DubaiServiceAreas />
      <MobileFleetTechnician />
      <ComparisonSection />
      <BatteryFailingSigns />
      <FAQSection />
      <EmergencyBookingWidget/>
      <CTA />
       </div>
  )
}
