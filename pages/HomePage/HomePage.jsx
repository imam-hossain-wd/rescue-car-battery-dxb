import Maps from '@/components/shared/Maps/Maps'
import BatteryBrandsSection from '@/components/view/BatteryBrandShowcase/BatteryBrands'
import BatteryCategories from '@/components/view/BatteryCategories/BatteryCategories'
import BatteryFailingSigns from '@/components/view/BatteryFailingSigns/BatteryFailingSigns'
import CarBrandsTabs from '@/components/view/CarBrandsTabs/CarBrandsTabs'
import ComparisonSection from '@/components/view/ComparisonSection/ComparisonSection'
import CTA from '@/components/view/CTA/CTA'
import DubaiServiceAreas from '@/components/view/DubaiServiceAreas/DubaiServiceAreas'
import EmergencyBookingWidget from '@/components/view/EmergencyBookingWidget/EmergencyBookingWidget'
import EmergencySituations from '@/components/view/EmergencySituations/EmergencySituations'
import FAQSection from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import Hero from '@/components/view/Hero/Hero'
import HonestPricing from '@/components/view/HonestPricing/HonestPricing'
import HowItWorksSection from '@/components/view/HowItWorksSection/HowItWorksSection'
import HowRescueWorks from '@/components/view/HowRescueWorks/HowRescueWorks'
import MobileFleetTechnician from '@/components/view/MobileFleetTechnician/MobileFleetTechnician'
import Reviews from '@/components/view/Reviews/Reviews'
import WhoWeAre from '@/components/view/WhoWeAre/WhoWeAre'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import React from 'react'

export default function HomePage() {
  return (
    <div>
    
      <Hero />
      <HowItWorksSection/>
      <FeaturedServices/>
      <BatteryBrandsSection />
      <CarBrandsTabs />
      <WhoWeAre/>
      <WhyChooseUs />
      <Maps/>
      <Reviews/>
      {/* <InstantTrustStrip /> */}
      {/* <CoreValueProposition /> */}
      {/* <ServicesSection /> */}
      {/* <HowRescueWorks /> */}
      <BatteryCategories />
      {/* <AllCarBrands /> */}
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
