import { Analytics } from '@vercel/analytics/react';
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarNew from './Components/Navbar';
import FooterNew from './Components/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins"
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mont"
})

export const metadata = {
  title: "Qoptars: Redefining Aerial Exploration",
  description: "Unleash Your Creativity with Premium Videography Drones and Immersive FPV Quadcopters. Elevate Your Photography and Adventure to New Heights. Discover Your Perfect Drone Experience Now!",
  openGraph: {
    title: "Qoptars: Redefining Aerial Exploration",
    description: "Unleash Your Creativity with Premium Videography Drones and Immersive FPV Quadcopters. Elevate Your Photography and Adventure to New Heights. Discover Your Perfect Drone Experience Now!",
    url: "https://qoptars.com",
    siteName: 'Qoptars.com',
    images: [
      {
        url: 'https://www.qoptars.com/images/vision.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: "Qoptars: Redefining Aerial Exploration",
    description: "Unleash Your Creativity with Premium Videography Drones and Immersive FPV Quadcopters. Elevate Your Photography and Adventure to New Heights. Discover Your Perfect Drone Experience Now!",
    image: 
      {
        url: 'https://www.qoptars.com/images/vision.webp',
        width: 800,
        height: 600,
      },
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: false,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mont.variable} scroll-smooth`}>
      <body className={poppins.className}>
        <NavbarNew />
        {children}
        <Analytics />
        <FooterNew />
      </body>
    </html>
  );
}
