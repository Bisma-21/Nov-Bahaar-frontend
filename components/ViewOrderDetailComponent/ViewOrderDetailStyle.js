import styled from "styled-components";

const OuterContainer = styled.div`
  /* border: 1px solid grey; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 800px;
  border-radius: 4px;
  justify-content: center;
  background-color: #e7e7e7;
  margin-top: 30px;
`;
const InnerContainer = styled.div`
  /* border: 1px solid grey; */
  padding: 20px 15px;
  background-color: whitesmoke;
  /* place-items: center; */
  /* justify-content: end; */
  /* text-align: center; */
  /* align-items: center; */
  /* gap: 20px; */
  width: 100%;
  border-radius: 4px;
`;
const LeftContainer = styled.div`
  /* border: 2px solid pink; */
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 10px;
`;
const RightContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 10px;
`;
const OrderIdDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
  /* margin-bottom: 5px; */
`;
const Order = styled.p`
  color: grey;
`;
const OrderId = styled.p`
  color: black;
  letter-spacing: 0.5px;
  /* font-family: serif; */
  /* font-family: "Brush Script MT", cursive; */
`;
const DeliveryStatusDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const Status = styled.p`
  color: green;
  font-style: italic;
  letter-spacing: 0.6px;
  /* font-family: "Brush Script MT", cursive; */
`;
const DeliveryStatus = styled.p`
  color: grey;
`;
const ProductNameDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const ProductName = styled.p`
  color: grey;
`;
const PName = styled.p`
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  /* font-weight: 600; */
`;
const ProductPriceDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const ProductPrice = styled.p`
  color: grey;
`;
const PPrice = styled.p`
  color: black;
  font-family: "Brush Script MT", cursive;
  letter-spacing: 0.5px;
`;
const QuantityDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const Quantity = styled.p`
  color: grey;
`;
const QNumber = styled.p`
  color: black;
  font-family: "Brush Script MT", cursive;
`;
const TotalPriceDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const TotalPrice = styled.p`
  color: grey;
`;
const TPNumber = styled.p`
  color: black;
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
  letter-spacing: 0.6px;
`;
const PaymentMethodDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const PaymentMethod = styled.p`
  color: grey;
`;
const PMType = styled.p`
  color: #3498db;
  font-style: italic;
  letter-spacing: 0.6px;
`;
const AddressDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const ShippingAddress = styled.p`
  color: grey;
`;
const Address = styled.p`
  color: black;
`;
const DateDiv = styled.div`
  /* border: 1px solid grey; */
  display: flex;
  justify-content: space-between;
  padding: 10px 7px;
  background-color: whitesmoke;
  border-radius: 4px;
`;
const OrderBy = styled.p`
  color: grey;
`;
const Date = styled.p`
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const Body = styled.div`
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  background-color: #fff;
  /* gap: 2px; */
  /* padding: 10px; */
`;
const Heading = styled.div`
  /* border: 1px solid blue; */
  padding: 10px 0;
  margin-bottom: 5px;
  padding-left: 10px;
`;
const Main = styled.div`
  /* border: 3px solid red; */
  display: flex;
  justify-content: center;
  height: 79vh;
`;
const Head = styled.p`
  color: black;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
`;
export {
  OuterContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  OrderIdDiv,
  Order,
  OrderId,
  DeliveryStatusDiv,
  DeliveryStatus,
  Status,
  ProductNameDiv,
  ProductName,
  PName,
  ProductPriceDiv,
  ProductPrice,
  PPrice,
  QuantityDiv,
  Quantity,
  QNumber,
  TotalPriceDiv,
  TotalPrice,
  TPNumber,
  AddressDiv,
  Address,
  ShippingAddress,
  PaymentMethodDiv,
  PaymentMethod,
  PMType,
  Body,
  DateDiv,
  Date,
  OrderBy,
  Heading,
  Head,
  Main,
};
