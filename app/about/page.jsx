import AboutPage from '@/pages/AboutPage/AboutPage'
import { siteMetadata } from '@/seo/metaData/metaData'


export const metadata = siteMetadata.about;
export default function About() {
  return <AboutPage />
}
