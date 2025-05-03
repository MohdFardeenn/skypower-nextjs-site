import ContactSection from "@/ui/components/Home/ContactSection";
import CosmoGreenFeatures from "@/ui/components/Home/CosmoGreenFeatures";
import CustomerTestimonials from "@/ui/components/Home/CustomerTestimonials";
import FeaturedProducts from "@/ui/components/Home/FeaturedProducts";
import LandingPage from "@/ui/components/Home/LandingPage";
// import Image from "next/image";

export default function Home() {
  return(
    <>
      <LandingPage/>
      <CosmoGreenFeatures />
      <FeaturedProducts/>
      <CustomerTestimonials/>
      <ContactSection/>
    </>
  )
}
