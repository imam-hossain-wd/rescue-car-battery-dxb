import ServiceAreasPage from '@/pages/ServiceAreasPage/ServiceAreasPage'
import { siteMetadata } from '@/seo/metaData/metaData'
import React from 'react'

export const metadata = siteMetadata.serviceArea;
export default function ServiceAreas() {
  return <ServiceAreasPage/>
}
