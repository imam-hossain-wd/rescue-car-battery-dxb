import ContactPage from '@/pages/ContactPage/ContactPage'
import { siteMetadata } from '@/seo/metaData/metaData'
import React from 'react'

export const metadata = siteMetadata.contact;
export default function page() {
  return <ContactPage />
}
