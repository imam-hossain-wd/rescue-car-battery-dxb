import CarBrandsPage from '@/pages/CarBrandsPage/CarBrandsPage'
import { siteMetadata } from '@/seo/metaData/metaData'
import React from 'react'

export const metadata = siteMetadata.carBrands;
export default function CarBrands() {
  return <CarBrandsPage />
}
