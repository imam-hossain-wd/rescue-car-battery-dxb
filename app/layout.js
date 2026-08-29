import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EmergencyAnnouncementBar from "@/components/shared/EmergencyAnnouncementBar/EmergencyAnnouncementBar";
import Navbar from "@/components/shared/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fix Battery Dubai",
  description: "Best Battery Rescue in dubai area",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <body>
<EmergencyAnnouncementBar />
<Navbar/>
        {children}
        </body>
        </body>
    </html>
  );
}
