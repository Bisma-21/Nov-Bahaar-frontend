import FooterComponent from "@/components/FooterComponent/FooterComponent";
import HomeComponent from "@/components/HomeComponent/HomeComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import TitleComponent from "@/components/TitleComponent/TitleComponent";

const home = () => {
  return (
    <>
      <NavbarComponent />
      <TitleComponent />
      <HomeComponent />
      <FooterComponent />
    </>
  );
};

export default home;
