import AddonSection from "./Components/AddonSection";
import ApplicationsSection from "./Components/ApplicationsSection";
import BannerSection from "./Components/BannerSection";
import Faq from "./Components/Faq";
import Feature1 from "./Components/Feature1";
import Feature2 from "./Components/Feature2";
import Feature3 from "./Components/Feature3";
import Feature4 from "./Components/Feature4";
import Feature5 from "./Components/Feature5";
import FeatureLowLight from "./Components/FeatureLowLight";
import Header from "./Components/Header";
import KitSection from "./Components/KitSection";
import ModesSection from "./Components/ModesSection";
import OverlaySection from "./Components/OverlaySection";
import PriceSection from "./Components/PriceSection";
import Section1 from "./Components/Section1";

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