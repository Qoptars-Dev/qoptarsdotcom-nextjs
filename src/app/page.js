import HeroSlider from "@/app/components/HeroSlider";
import Welcome from "@/app/components/Welcome";
import VisionSection from "@/app/components/VisionSection";
import ProductSection from "@/app/components/ProductSection";
import ServicesSection from "@/app/components/ServicesSection";
import GallerySection from "@/app/components/GallerySection";
import TeamSection from "@/app/components/TeamSection";
import VerticalTimeline from "@/app/components/VerticalTimeline";
import InvestorsSection from "@/app/components/InvestorsSection";
import ClienteleSection from "@/app/components/ClienteleSection";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Welcome />
      <VisionSection flip={true}
        imageAlt="vayu-drone"
        title="Our Vision"
        text1="We're revolutionizing the drone industry with cutting-edge technology and design."
        text2="At Qoptars, we specialize in manufacturing quadcopters that are not only efficient but also easy to use. Our mission is to provide our customers with the best possible drone experience."
        />
        <ProductSection flip={false} 
          imageAlt={"airsonics"}
          title={"Our Products"}
          text1={"We have two products currently on the market: AirSonic and AirCine. "}
          text2={"Stay tuned for our upcoming product, Vayu, which is set to take the drone industry by storm."}
        />
        <ServicesSection />
        <GallerySection />
        <TeamSection />
        <VerticalTimeline />
        <InvestorsSection />
        <ClienteleSection />
        <Contact text="Feel free to contact us." />
    </div>
  )
}