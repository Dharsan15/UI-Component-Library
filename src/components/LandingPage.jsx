import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ContentsLayout from "./ContentsLayout";
import ComponentsSection from "./ComponentsSection";
import Sidebar from "./Sidebar";
import "../index.css";
import("tailwindcss").Config;

const LandingPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      {/* <ComponentsSection /> */}
    </div>
  );
};

export default LandingPage;
