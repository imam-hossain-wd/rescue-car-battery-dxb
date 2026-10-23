import HomePage from "@/pages/HomePage/HomePage";
import { siteMetadata } from "@/seo/metaData/metaData";


export const metadata = siteMetadata.home;
export default function Home() {
  return <HomePage />
}
