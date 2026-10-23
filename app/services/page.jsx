import ServicesPage from '@/pages/ServicePage/ServicePage'
import { siteMetadata } from '@/seo/metaData/metaData'
import React from 'react'

export const metadata = siteMetadata.services;
export default function page() {
  return <ServicesPage />
}
