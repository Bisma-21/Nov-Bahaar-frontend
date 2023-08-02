// import PostComponent from "@/components/PostComponent/PostComponent";
import HomeComponent from "@/components/HomeComponent/HomeComponent";
import LockComponent from "@/components/LockComponent/LockComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import TitleComponent from "@/components/TitleComponent/TitleComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

import { useSelector } from "react-redux";

const Index = () => {
  const selector = useSelector((state) => state.users.userDetail);
  console.log("selector", selector);
  return (
    <>
      <NavbarComponent />
      <TitleComponent />
      {Object.keys(selector).length ? <HomeComponent /> : <LockComponent />}

      {/* </NavbarComponent> */}

      
      <FooterComponent/>
    </>
  );
};
export default Index;
