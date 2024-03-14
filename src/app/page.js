import AddonSection from "./components/AddonSection";
import ApplicationsSection from "./components/ApplicationsSection";
import BannerSection from "./components/BannerSection";
import Faq from "./components/Faq";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import FeatureLowLight from "./components/FeatureLowLight";
import Header from "./components/Header";
import KitSection from "./components/KitSection";
import ModesSection from "./components/ModesSection";
import OverlaySection from "./components/OverlaySection";
import PriceSection from "./components/PriceSection";
import Section1 from "./components/Section1";

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <OverlaySection />
      <ApplicationsSection />
      <BannerSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <FeatureLowLight />
      <Feature4 />
      <ModesSection />
      <Feature5 />
      <KitSection />
      <PriceSection />
      <AddonSection />
      <Faq />
      <BannerSection />
    </>
  )
}