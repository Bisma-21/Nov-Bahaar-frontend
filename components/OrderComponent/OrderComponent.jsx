import DropdownComponent from "../Commons/DropdownComponent/DropdownComponent";
import InputComponent from "../Commons/InputComponent/InputComponent";
import OrderProductCardComponent from "../OrderProductCardComponent/OrderProductCardComponent";
import {
  OuterContainer,
  MainContainer,
  LeftContainer,
  RightContainer,
  ShippingContainer,
  PaymentContainer,
  CartContainer,
  NameAddressContainer,
  NameDiv,
  Name,
  Input,
  AddressDiv,
  Address,
  CountryPinContainer,
  CountryDiv,
  Country,
  PinCodeDiv,
  PinCode,
  Select,
  ShippingName,
  PaymentName,
  CodContainer,
  OnlineContainer,
  MethodContainer,
  Cod,
  Upi,
  GrandTotalContainer,
  GrandTotalBody,
  SumOfProductsDiv,
  GrandTotalDiv,
  DiscountDiv,
  TotalProducts,
  Number,
  Discount,
  DiscountPerc,
  Total,
  TotalNumber,
  ButtonContainer,
  PaymentDiv,
} from "./OrderStyle";
import country from "../../json/countries.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ButtonComponent from "../Commons/ButtonComponent/ButtonComponent";
import { getToken } from "@/utils/localStorage";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { updateCartOnOrderCreateAction } from "../../store/action/cartAction";
import ProtectRouteComponent from "../ProtectRouteComponent/ProtectRouteComponent";
import LoaderComponent from "../Commons/LoaderComponent/LoaderComponent";
// import OrderSuccessModal from "../AllOrdersComponent/OrderSuccessfulModal/OrderSuccessfulModalComponent"
const OrderComponent = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [cod, setCod] = useState(false);
  const [seletedCountry, setSeletedCountry] = useState("");
  const [selectedUpi, setSelectedUpi] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [orderLoader, setOrderLoader] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  let onlinepayment = ["GPAY", "PHONEPE", "PAYTM", "WALLET", "CARD"];
  const countries = country.data;
  const value = countries.map((e) => e.value);
  const cart = useSelector((state) => state.cart.cartDetails);
  console.log(" cart order==========>>>>=========", router);
  // const user = useSelector((state) => state.users.userDetail)
  let totalQuantity = 0;
  let totalPrice = 0;
  let productIds = [];
  const t = cart.products?.map((e) => {
    // console.log("44444444444", e)
    (totalPrice = e.quantity * e.pId.price + totalPrice),
      (totalQuantity = e.quantity + totalQuantity);
    // productIds = [e.pId._id + "," + productIds]
    productIds.push(e.pId._id);
    // return {
    //     totalPrice: (e.quantity * e.pId.price) + totalPrice,
    //     totalQuantity: e.quantity + totalQuantity
    // }
  });
  // console.log("88888888888", t)
  // console.log("totalquantity", totalQuantity)
  // console.log("totalprice", totalPrice)
  // console.log("productIds", productIds)

  const user = useSelector((state) => state.users.userDetail);
  console.log(">>>>>>>user==========>>>>=========", user);
  useEffect(() => {
    setName(user.name);
  }, [user]);
  // console.log("value<<<<<<<<<<<>>>>>>>>>>>>", name)
  const nameHandler = (e) => {
    // console.log("name handlerr============", e.target.value)
    const data = e.target.value;
    setName(data);
  };
  const addressHandler = (e) => {
    // console.log("addressHandler=====>", e.target.value)
    const data = e.target.value;
    setAddress(data);
  };
  const pinHandler = (e) => {
    // console.log("pinHandler=====>", e.target.value)
    const data = e.target.value;
    setPin(data);
  };
  const codHandler = (e) => {
    console.log("codHandler=====>", e.target.value);
    // if (e.target.value == "COD" && !paymentMethod) {
    //     setCod(true)
    //     setPaymentMethod(true)
    // }
    // if (!e.target.value) {
    //     setCod(false)
    // }
    // if (paymentMethod && e.target.value == "COD") {
    //     setCod(false)
    // }
    setCod(true);
    setPaymentMethod(false);
    const data = e.target.value;
    setSelectedUpi(data);
  };
  const createOrderHandler = async () => {
    setOrderLoader(true);
    try {
      const response = await fetch(
        "https://novbahaar-backend.onrender.com/order/create",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-access-token": getToken(),
          },
          body: JSON.stringify({
            userId: user._id,
            totalAmount: totalPrice,
            address: {
              pincode: pin,
              country: seletedCountry,
              address: address,
            },
            paymentMethod: selectedUpi,
            products: productIds,
          }),
        }
      );
      // console.log("uuuuuu", response)
      if (response.status >= 400) {
        setOrderLoader(false);
        return toast.error("Something went wrong!.");
      }

      const result = await response.json();
      console.log("order created result>>>>>>>>", result);
      dispatch(updateCartOnOrderCreateAction(result.response.updatedCart));
      toast.success("Order Created Successfully!.");
      router.push("/allorders");
      setOrderLoader(false);
    } catch (err) {
      setOrderLoader(false);
      console.log("err", err);
    }
  };
  const countryHandler = (event) => {
    console.log("countryHandler=====>", event);
    // const value = event.target.textContent;

    // console.log('Value:', value);
  };
  return (
    <>
      {/* <DropdownComponent className="dropdown" /> */}
      {/* <InputComponent /> */}
      {/* <OrderProductCardComponent /> */}

      <OuterContainer>
        <MainContainer>
          <LeftContainer>
            <ShippingContainer>
              <ShippingName>Shipping Details</ShippingName>
              <NameAddressContainer>
                <NameDiv>
                  <Name>Name</Name>
                  <InputComponent
                    className="name"
                    value={name}
                    placeholder="Enter Name"
                    change={nameHandler}
                  />
                </NameDiv>
                <AddressDiv>
                  <Address>Address</Address>
                  <InputComponent
                    className="address"
                    change={addressHandler}
                    value={address}
                  />
                </AddressDiv>
              </NameAddressContainer>
              <CountryPinContainer>
                <PinCodeDiv>
                  <PinCode>Pincode</PinCode>
                  <InputComponent
                    className="pin"
                    change={pinHandler}
                    value={pin}
                  />
                </PinCodeDiv>
                <CountryDiv>
                  <Country>Country</Country>
                  <DropdownComponent
                    className="dropdown"
                    selectContainer="select-div"
                    optionContainer="option-div"
                    data={value}
                    click={countryHandler}
                    selectedOption={setSeletedCountry}
                  />
                </CountryDiv>
              </CountryPinContainer>
            </ShippingContainer>
            <PaymentContainer>
              <PaymentName> Payment Method</PaymentName>
              <MethodContainer>
                <PaymentDiv>
                  <CodContainer>
                    <Cod>Cash on Delivery</Cod>
                    <InputComponent
                      type="radio"
                      className="input-cod"
                      change={codHandler}
                      value="COD"
                      checked={cod ? true : false}
                    />
                  </CodContainer>

                  {cod ? (
                    <OnlineContainer>
                      <Upi>Online Method</Upi>
                      <div className="div">
                        <DropdownComponent
                          className="upi-options"
                          selectContainer="select-div"
                          optionContainer="option-div"
                          data={onlinepayment}
                          selectedOption={setSelectedUpi}
                          setMethod={setPaymentMethod}
                          setCod={setCod}
                        />
                      </div>
                    </OnlineContainer>
                  ) : (
                    <OnlineContainer>
                      <Upi>Online Method</Upi>
                      <div className="div" style={{ pointerEvents: "auto" }}>
                        <DropdownComponent
                          className="upi-options"
                          selectContainer="select-div"
                          optionContainer="option-div"
                          data={onlinepayment}
                          selectedOption={setSelectedUpi}
                          setMethod={setPaymentMethod}
                          setCod={setCod}
                        />
                      </div>

                      {/* <div className="div">
                                            <DropdownComponent className="upi-options"
                                                selectContainer="select-div"
                                                optionContainer="option-div"
                                                data={onlinepayment}
                                                selectedOption={setSelectedUpi}
                                            />
                                        </div> */}
                    </OnlineContainer>
                  )}
                </PaymentDiv>
                <ButtonContainer>
                  <ButtonComponent
                    title={orderLoader ? <LoaderComponent /> : "Create Order"}
                    className="order-btn"
                    click={createOrderHandler}
                  />
                </ButtonContainer>
              </MethodContainer>
            </PaymentContainer>
          </LeftContainer>
          <RightContainer>
            <CartContainer>
              <OrderProductCardComponent className="card" />
              <GrandTotalContainer>
                <GrandTotalBody>
                  <SumOfProductsDiv>
                    <TotalProducts>Total Products</TotalProducts>
                    {totalQuantity <= 9 ? (
                      <Number>0{totalQuantity}</Number>
                    ) : (
                      <Number>{totalQuantity}</Number>
                    )}
                    {/* <Number>{totalQuantity}</Number> */}
                  </SumOfProductsDiv>
                  <DiscountDiv>
                    <Discount> Discount</Discount>
                    <DiscountPerc> 12%</DiscountPerc>
                  </DiscountDiv>
                  <GrandTotalDiv>
                    <Total> Total</Total>
                    <TotalNumber> ₹{totalPrice}</TotalNumber>
                  </GrandTotalDiv>
                </GrandTotalBody>
                {/* {
                                    cart.products.map((e) => {
                                        console.log("eeeeeeeeeee====", e)
                                        return <><GrandTotalBody key={e.pId}>
                                            <SumOfProductsDiv>
                                                <TotalProducts>Total Products</TotalProducts>
                                                <Number>03</Number>
                                            </SumOfProductsDiv>
                                            <DiscountDiv>
                                                <Discount> Discount</Discount>
                                                <DiscountPerc> 12%</DiscountPerc>
                                            </DiscountDiv>
                                            <GrandTotalDiv>
                                                <Total> Total</Total>
                                                <TotalNumber> ₹13000</TotalNumber>
                                            </GrandTotalDiv>
                                        </GrandTotalBody>
                                        </>

                                    })
                                } */}
              </GrandTotalContainer>
            </CartContainer>
          </RightContainer>
        </MainContainer>
      </OuterContainer>
    </>
  );
};
export default ProtectRouteComponent(OrderComponent);
// export default OrderComponent
