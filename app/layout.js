import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import "./page.css";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Mutyam Steel Profile | Building India's Future with Trusted Steel Solutions",
  description: "Corporate profile of Mutyam Steel Pvt. Ltd. Founded in 2012, delivering premium steel products across India.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="bg-white text-[#0F172A] font-['Manrope'] antialiased selection:bg-[#EF4444] selection:text-white">
        <GlobalHeader />
        {children}
        <GlobalFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
