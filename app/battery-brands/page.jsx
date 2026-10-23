import BatteryBrandsPage from '@/pages/BatteryBrandsPage/BatteryBrandsPage'
import { siteMetadata } from '@/seo/metaData/metaData'
import React from 'react'

export const metadata = siteMetadata.batteryBrands;
export default function BatteryBrand() {
  return <BatteryBrandsPage />
}
