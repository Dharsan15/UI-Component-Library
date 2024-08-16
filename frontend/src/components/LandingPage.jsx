import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ContentsLayout from "./ContentsLayout";
import ComponentsSection from "./ComponentsSection";
import Sidebar from "./Sidebar";
import "../index.css";
import("tailwindcss").Config;
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
