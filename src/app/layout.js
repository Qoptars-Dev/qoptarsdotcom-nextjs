import { Analytics } from '@vercel/analytics/react';
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import DefaultNavbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
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
        url: 'https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/321055830_1500143100510918_3568979088490182499_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S6qaPvIx2pAAX_2P6UM&_nc_ht=scontent-bom1-2.xx&oh=00_AfADQop8B_389GABaZcXImRGNdMjUdOXUeVPg6pfEKA9AA&oe=65466435',
        width: 800,
        height: 600,
      },
      {
        url: 'https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/321055830_1500143100510918_3568979088490182499_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S6qaPvIx2pAAX_2P6UM&_nc_ht=scontent-bom1-2.xx&oh=00_AfADQop8B_389GABaZcXImRGNdMjUdOXUeVPg6pfEKA9AA&oe=65466435',
        width: 1800,
        height: 1600,
        alt: 'AirsonicS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: false,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mont.variable}`}>
      <body className={poppins.className}>
        <DefaultNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
