
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Portfolio from "@/components/Portfolio/Portfolio";
import Process from "@/components/Process/Process";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/Testimonial/Testimonial";
import Service from "@/components/Service/Service";
import Packages from "@/components/Packages/Packages";
import Footer from "@/components/Footer/Footer";
import StayUpdate from "@/components/StayUpdate/StayUpdate";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Banner />
      <About></About>
      <Portfolio/>
      <Service/>
      <Packages/>
      <Team/>
      <Contact></Contact>
      <Process/>
      <Testimonial/>
      <StayUpdate/>
    </>
  );
}
