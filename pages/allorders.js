import AllOrders from "@/components/AllOrdersComponent/AllOrdersComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import SmallFooterComponent from "@/components/SmallFooterComponent/SmallFooterComponent";

const allorders = () => {
  return (
    <>
      <NavbarComponent />
      <AllOrders />
      <SmallFooterComponent />
    </>
  );
};
export default allorders;
