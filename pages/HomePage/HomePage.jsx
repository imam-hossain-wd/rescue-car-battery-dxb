import CoreValueProposition from '@/components/view/CoreValueProposition/CoreValueProposition'
import EmergencyBookingWidget from '@/components/view/EmergencyBookingWidget/EmergencyBookingWidget'
import Hero from '@/components/view/Hero/Hero'
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
       </div>
  )
}
