import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 2px solid red; */
  /* display: grid;
  grid-template-columns: 0.4fr 0.2fr;
  align-items: start;
  justify-content: center;
  gap: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 18px; */
  padding-top: 18px;
  height: 85.5vh;
`;

const Container = styled.div`
  /* border: 2px solid green; */
  /* display: grid; */
  /* grid-template-rows: 1fr 1fr */
  /* gap: 0px;

  /* display: grid; */
  /* flex-direction: column;
  align-items: center; */
  /* justify-content: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
  max-height: 250px;
  gap: 10px;
  /* margin-top: 20px; */
  /* padding-top: 40px; */
  /* border: 2px solid red; */
  /* margin-top: 20px;
  padding: 15px;
  border: 2px solid red;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  gap: 20px;
  h1 {
    margin-top: 20px;
  } */
`;
const CartContainer = styled.div`
  border: 1px solid #dddcdc;
  border-radius: 2px;
  background-color: whitesmoke;
  padding: 10px;
  /* border: 2px solid blue; */
  display: flex;
  /* flex-direction: column; */
  /* margin-top: 30px; */
  /* margin-top: 10px; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* display: grid;
  grid-template-columns: 1fr 1.3fr; */
  gap: 10px;
  margin-bottom: 10px;
  /* margin-top: 20px; */
`;
const CartBody = styled.div`
  /* border: 2px solid green; */
  /* padding: 20px; */
  /* height: 10px; */
  width: 178px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  /* justify-content: center; */

  /* display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: 1fr 2fr 0.5fr;
  gap: 20px; */
  /* display: flex;
  flex-direction: column; */
`;
const ImageConatiner = styled.div`
  /* border: 2px solid pink; */
  height: 90px;
  object-fit: cover;
  width: 90px;
  border-radius: 3px;
  /* width: 30px; */
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: cover;
  }
`;
const ProductDetailContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #fff; */
  padding: 2px 0;

  /* padding-top: 30px; */

  /*   
  display: flex;

  justify-content: center;
  align-items: center; */
`;

const Title = styled.h3`
  /* border: 1px solid greenyellow; */
  font-family: serif;
  letter-spacing: 0.7px;
  /* height: 100%; */
  /* color: #2b2b2b;
  font-family: serif;
  letter-spacing: 1px; */
`;
const TotalPrice = styled.h3`
  /* border: 2px solid purple; */
  color: black;
  font-size: 15px;
  /* font-weight: 600; */
  letter-spacing: 0.2px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Price = styled.p`
  /* border: 2px solid blue; */
  color: #2b2b2b;
  letter-spacing: 1px;
  font-size: 17px;
  /* font-weight: 600; */
  font-family: "Times New Roman", Times, serif;
  /* color: #2b2b2b;
  font-size: 15px;
  padding: 5px;
  padding-left: 7px;

  letter-spacing: 1px; */
  /* color: blue; */
`;
const CounterContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px; */
  margin-right: 22px;
`;
const CounterBody = styled.div`
  /* border: 2px solid blue; */
  /* margin-left: 7px; */

  /* padding: 10px; */
  /* display: flex; */
  /* justify-content: cen; */
`;
const DecrementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c6bbac;
  /* border: 2px solid red; */
  /* height: 100%; */
  background-color: whitesmoke;
  width: 60px;
  /* padding: 4px 0; */
  /* margin-top: 3px; */
  /* margin-right: 64px; */
  /* height: 28px; */
  gap: 10px;
  padding: 5px;

  border-radius: 2px;

  /* text-align: center; */
  .minus {
    cursor: pointer;
    color: #2b2b2b;
    border: none;

    /* font-size: 17px; */
  }
  .disable {
    border: none;
    /* border: 1px solid red; */
  }
  .plus {
    cursor: pointer;
    color: #2b2b2b;
    border: none;
  }
`;
const Minus = styled.p`
  cursor: pointer;
  color: #2b2b2b;
  font-size: 17px;
`;
const Number = styled.h4`
  color: #2b2b2b;
  font-size: 14px;
  /* color: red; */
`;
const Plus = styled.p`
  cursor: pointer;
  color: #2b2b2b;
  font-size: 17px;
`;
const TotalPriceContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  /* background-color: #fff; */

  /* padding-top: 10px; */

  /* display: flex;
  padding-top: 10px;
  flex-direction: column;
  gap: 17px; */
`;

const TotalPriceDiv = styled.div`
  /* border: 2px solid red; */
  /* display: flex;
  justify-content: end;
  margin-top: 3px; */
  /* gap: 15px; */
`;
const InstockDiv = styled.div`
  /* border: 2px solid red; */
  /* display: flex;
  justify-content: end;
  letter-spacing: 1.2px; */
  /* gap: 15px; */
`;
const SaveDiv = styled.div`
  border: 0.6px solid #c6bbac;
  /* border: 2px solid blue; */
  background-color: whitesmoke;
  /* border: 2px solid green; */
  /* padding: 6px; */
  /* border: 1px solid #c6bbac; */
  /* padding: 10px; */
  /* height: 100%; */
  padding: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  border-radius: 2px;
  .save-icon {
    /* color: red; */
    font-size: 15px;
  }
`;
const DeleteDiv = styled.div`
  border: 0.6px solid #c6bbac;
  padding: 3px;
  display: flex;
  align-items: center;
  width: 67px;
  gap: 3px;
  border-radius: 2px;
  background-color: whitesmoke;
  cursor: pointer;
  .del-icon {
    cursor: pointer;
  }
  .del-btn {
    /* color: rebeccapurple;
    background-color: pink; */
    border: none;
    cursor: pointer;
    /* margin-right: 5px; */
  }
`;
const AddToCartDiv = styled.div`
  border: 0.6px solid #c6bbac;
  /* border: 1px solid red; */
  padding: 3px;
  display: flex;
  align-items: center;
  width: 64px;
  gap: 3px;
  border-radius: 2px;
  background-color: whitesmoke;
  cursor: pointer;
  .cart {
    font-size: 14px;
    cursor: pointer;
  }
  .cart-btn {
    /* color: rebeccapurple;
    background-color: pink; */
    border: none;
    cursor: pointer;

    /* margin-right: 5px; */
  }
`;
const ButtonDiv = styled.div`
  /* border: 1px solid red; */
  /* background-color: #fff; */
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  /* justify-content: end; */
  /* margin-top: 10px; */
  /* padding: 4px; */
  /* padding-top: 10px; */

  /* padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-left: 140px; */
  /* margin-top: 10px; */
`;
const Delete = styled.p`
  color: #2b2b2b;
  margin-left: 4px;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const Save = styled.p`
  color: #2b2b2b;
  margin-left: 4px;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const InStock = styled.p`
  color: green;
  margin-right: 5px;
  letter-spacing: 0.4px;
  font-style: italic;
  font-family: monospace;
  font-size: 15px;
  /* border-radius: 1px solid red; */
`;
const DeliveryContainer = styled.div`
  border: 1px solid #dddcdc;
  /* border: 1px solid red; */
  background-color: whitesmoke;
  border-radius: 3px;
  /* padding: 10px; */
  /* margin-top: 20px; */
`;

const DeliveryBody = styled.div`
  /* border: 1px solid red; */
  /* border: 2px solid green;
  padding: 10px;
  background-color: pink; */
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const DeliveryDiv = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  padding-right: 10px;
  /* justify-content: end; */
  /* flex-direction: row; */
  /* gap: 5px; */
  /* margin-bottom: 10px; */
`;
const Delivery = styled.p`
  /* border: 2px solid blue; */
  color: #2b2b2b;
  /* margin-top: 20px; */
  /* padding: 5px 0; */
  /* padding: 7px 8px 7px 15px; */

  padding-left: 15px;
  font-weight: 500;
  /* padding-top: 6px; */
  /* padding-bottom: 6px; */
  /* background-color: #fff; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 0.7px;
`;
const DeliveryType = styled.div`
  /* border: 1px solid red; */
  display: flex;
  border-radius: 2px;
  /* margin-left: 80px; */
  /* width: 120px; */
  /* background-color: #fff; */
  /* padding: 7px 0; */
  /* padding-left: 5px; */

  /* gap: 1px; */
  /* margin-bottom: 8px; */
`;

const ExpressDiv = styled.div`
  letter-spacing: 0.5px;
  padding: 7px 8px 7px 0;
  border-radius: 2px;

  /* padding-left: 5px; */
  border: 1px solid #ece9e5;
  /* border: 1px solid red; */
  margin-right: 5px;
  /* padding: 10px; */
`;
const FreeDiv = styled.div`
  /* border: 0.5px solid red; */
  background-color: #fff;
  border-radius: 2px;
  /* padding-right: 8px; */
  padding: 7px 12px 7px 0;
  margin-left: 15px;
  /* padding-top: 2px;
  padding-bottom: 2px; */
  /* padding: 5px; */
  letter-spacing: 0.5px;
  /* padding: 10px; */
`;
const Free = styled.p`
  /* border: 0.5 solid red; */
  padding-left: 20px;
  font-family: monospace;
  /* padding-left: 5px; */
  /* padding: 6px 7px 6px 0; */
  /* border: 1px solid red; */
  /* padding-right: 7px; */

  /* padding: 6px 7px 6px 0;
  color: #2b2b2b;
  background-color: #fff;
  letter-spacing: 0.5px;
  border-radius: 3px; */
  /* height: 100%; */
`;
const Express = styled.p`
  padding-left: 9px;
  font-family: monospace;
  /* color: #2b2b2b;
  padding: 6px 0 6px 0;
  letter-spacing: 0.5px;
  margin-left: 5px; */
`;
const DeliveryDateDiv = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  gap: 10px;
  justify-content: space-between;
  /* justify-content: end; */
  align-items: center;
  /* padding: 5px 0; */
  padding-left: 15px;
  margin-top: 5px;
  padding-right: 10px;
  /* background-color: #fff; */
  /* justify-content: center; */
  /* padding: 10px; */
`;

const DeliveryDate = styled.p`
  /* border: 1px solid blue; */
  padding: 2px 0;

  color: grey;
  font-size: 14px;
  margin-right: 5px;
  /* margin-left: 10px; */
`;

const Date = styled.p`
  color: black;
  /* border: 1px solid red; */
  padding: 2px 0;
  font-size: 14px;
  font-family: monospace;
  /* padding-left: 10px; */

  /* margin-left: 20px; */
  margin-left: 124px;
  /* font-size: 15px; */
`;
const PromoCodeContainer = styled.div`
  /* border: 2px solid red;
  padding: 5px;
  background-color: yellow; */
`;
const PromoCodeDiv = styled.div`
  /* border: 2px solid red; */
  .btn {
    /* background-color: pink;
    width: 51px;
    padding: 6px;
    border: none; */
  }
`;
const Input = styled.input`
  /* border: 2px solid red; */
  /* padding: 4px;
  width: 90px; */
`;

const GrandTotalContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  margin-top: 5px;
  padding-right: 10px;
`;
const GrandTotal = styled.h4`
  /* border: 1px dotted blue; */
  margin-right: 5px;
  /* padding: 5px 0; */
  font-family: "Brush Script MT", cursive;
  color: #2b2b2b;
  letter-spacing: 1px;
`;
const GrandTotalPrice = styled.h5`
  /* border: 1px solid green; */
  /* margin-left: 122px; */
  padding: 2px 0;
  /* margin-right: 14px; */
  font-family: Garamond, serif;
  letter-spacing: 1px;
  font-family: "Brush Script MT", cursive;
`;
const ButtonContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  .checkout-btn {
    border: 1px solid #e0e0e0;
    /* border: 1px solid red; */
    width: 91%;
    padding: 6px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    /* background-color: #e0e0e0; */
    margin-left: 15px;
    border-radius: 2px;
    font-size: 15px;
    /* font-family: "Brush Script MT", cursive; */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    /* margin-right: 15px; */

    /* border: none; */
    :hover {
      background-color: whitesmoke;
      /* color: white; */
      /* border-radius: 1px solid white; */
    }
  }
  .proceed-btn {
    border: 2px solid blue;
    width: 91%;
    padding: 5px 0;
    background-color: red;
    margin-left: 15px;
    background-color: blue;
    color: white;
    margin-bottom: 5px;
    border-radius: 2px;
    font-size: 17px;
  }
`;

const SubContainer = styled.div`
  /* border: 2px solid purple; */
  /* display: flex;
  align-items: end; */
  /* width: 350px; */
`;
const Heading = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: start;
  /* width: 100%; */
  /* margin-bottom: 10px; */
  align-items: center;
  width: 620px;
  padding-left: 5px;
  margin-top: 15px;
`;
const Body = styled.div`
  /* border: 1px solid blue; */
  margin-top: 20px;

  /* display: grid; */
  /* grid-template-columns: 0.34fr 0.28fr; */
  /* grid-template-columns: 1fr 0.8fr; */
  /* gap: 10px; */
  /* background-color: yellow; */
  /* width: 100%; */
  /* margin-top: 10px; */
`;
const Head = styled.p`
  /* color: red; */
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: serif;
  align-items: center;
`;
// const AddToCartDiv = styled.div`
//   border: 1px solid red;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
export {
  OuterContainer,
  Container,
  CartContainer,
  CartBody,
  ProductDetailContainer,
  ImageConatiner,
  TotalPriceContainer,
  Price,
  Title,
  CounterContainer,
  CounterBody,
  DecrementContainer,
  Minus,
  Number,
  Plus,
  TotalPrice,
  TotalPriceDiv,
  DeleteDiv,
  SaveDiv,
  ButtonDiv,
  Save,
  Delete,
  InStock,
  InstockDiv,
  DeliveryBody,
  DeliveryContainer,
  DeliveryDiv,
  DeliveryType,
  Delivery,
  ExpressDiv,
  FreeDiv,
  Free,
  Express,
  DeliveryDateDiv,
  DeliveryDate,
  Date,
  Input,
  PromoCodeDiv,
  PromoCodeContainer,
  GrandTotalContainer,
  GrandTotal,
  GrandTotalPrice,
  ButtonContainer,
  SubContainer,
  Heading,
  Head,
  Body,
  AddToCartDiv,
};
