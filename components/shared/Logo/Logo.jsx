import { brandLogo } from '@/config/imageConfig'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <Image width={500} height={500} className='w-48 h-18 md:w-60 md:h-22' src={brandLogo.logo} alt='Dubai Mobile Car Battery Replacement' />
    </div>
  )
}
