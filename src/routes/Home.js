import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";
import Separator from "../components/Separator";
import stockMenu from "../images/stock-menu.png";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer";

// Utils
import {
  footerAccordians,
  photoGridItems,
  scheduleHeader,
  scheduleDays,
  homeHeroText,
  homeHeroTitle,
  homeSepText,
  homeSepTitle,
} from "../utils/utils";

function Home() {
  return (
    <>
      <main>
        <section id="welcome" className="landing-section menu-landing">
          <Navbar navLinks={["menu"]} />
          <Hero title={homeHeroTitle} text={homeHeroText} buttonLink="menu" buttonText="View Menu" />
        </section>
        {/* Time Schedule Table */}
        <Schedule headers={scheduleHeader} days={scheduleDays} />
        <Separator
          textSide="left"
          title={homeSepTitle}
          text={homeSepText}
          btnLink="menu"
          btnText="Take a Look"
          imgSrc={stockMenu}
        />
        <PhotoGrid items={photoGridItems} />
        <Footer accordians={footerAccordians} />
      </main>
    </>
  );
}

export default Home;
