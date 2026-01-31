import About from "./About/page";
import Blog from "./Blogs/page";
import Brands from "./Brands/page";
import Contact from "./Contact/page";
import Experience from "./Experience/page";
import Hero from "./Hero/page";
import InfoText from "./InfoText/page";
import Portfolio from "./Portfolio/page";
import Pricing from "./Pricing/page";
import Service from "./Services/page";

export default function Index() {
  return (
    <>
      <Hero />
      <InfoText />
      <About />
      <Brands />
      <Service />
      <Portfolio />
      <Experience />
      <Pricing />
      <Blog />
      <Contact />
    </>
  )
}
