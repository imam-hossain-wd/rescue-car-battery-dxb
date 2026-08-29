import CoreValueProposition from '@/components/view/CoreValueProposition/CoreValueProposition'
import EmergencyBookingWidget from '@/components/view/EmergencyBookingWidget/EmergencyBookingWidget'
import Hero from '@/components/view/Hero/Hero'
import InstantTrustStrip from '@/components/view/InstantTrustStrip/InstantTrustStrip'
import React from 'react'

export default function HomePage() {
  return (
    <div>
    
      <Hero />
      <InstantTrustStrip />
      <EmergencyBookingWidget/>
      <CoreValueProposition />
       </div>
  )
}
