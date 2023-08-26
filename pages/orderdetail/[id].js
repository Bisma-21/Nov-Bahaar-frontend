import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import SmallFooterComponent from "@/components/SmallFooterComponent/SmallFooterComponent";
import ViewOrderDetailComponent from "@/components/ViewOrderDetailComponent/ViewOrderDetailComponent";

const orderDetail = () => {
  return (
    <>
      <NavbarComponent />;
      <ViewOrderDetailComponent />;
      <SmallFooterComponent />
    </>
  );
};
export default orderDetail;
