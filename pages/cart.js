import CartComponent from "@/components/CartComponent/CartComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import SmallFooterComponent from "@/components/SmallFooterComponent/SmallFooterComponent";

const cart = () => {
  return (
    <>
      <NavbarComponent />
      <CartComponent />
      <SmallFooterComponent />
    </>
  );
};
export default cart;
