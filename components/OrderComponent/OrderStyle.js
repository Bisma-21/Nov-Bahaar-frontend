import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 2px solid red; */
  padding: 40px 100px;
  height: 85.5vh;
`;
const MainContainer = styled.div`
  /* border: 2px solid blue; */
  padding: 20px 0;
  display: grid;
  align-items: center;
  justify-content: center;
  /* margin: 0 30px; */
  grid-template-columns: 0.6fr 0.9fr;
  gap: 30px;
  background-color: whitesmoke;
  border-radius: 3px;
  /* height: 350px; */
  /* width: 1200px; */
`;
const LeftContainer = styled.div`
  /* border: 2px solid red; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  border-radius: 2px;
  /* width: 100%; */
  /* height: 100%; */
`;
const RightContainer = styled.div`
  /* border: 2px solid green; */
  padding: 10px;
  background-color: #fff;
  /* background-color: red; */
  border-radius: 2px;
  /* height: 100%; */
  height: 100%;
`;
const ShippingContainer = styled.div`
  /* border: 2px solid green; */
  padding: 10px 10px;
  display: grid;
  background-color: whitesmoke;
  border-radius: 3px;
`;
const PaymentContainer = styled.div`
  /* border: 2px solid green; */
  background-color: whitesmoke;
  padding: 10px 10px;
  border-radius: 3px;

  /* padding: 10px; */
`;
const CartContainer = styled.div`
  /* border: 2px solid green; */
  /* padding: 10px; */
  height: 100%;
  background-color: #fff;
  /* background-color: yellow; */
  /* background-color: white; */
  border-radius: 3px;
  /* overflow-y: scroll; */
  /* height: 145px; */
  /* height: 100%; */

  .card {
    /* border: 2px solid green; */
    background-color: #fff;
    margin-bottom: 2px;

    /* overflow-y: scroll; */
    /* height: 100px; */
    /* border: none; */
  }
`;
const NameAddressContainer = styled.div`
  /* border: 2px dotted red; */
  padding: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center; */
  /* align-items: end; */
  /* justify-content: end; */
`;
const NameDiv = styled.div`
  /* border: 1px solid green; */
  /* padding: 10px; */
  display: flex;
  align-items: center;
  /* justify-content: end; */
  .name {
    /* margin-left: ; */
    input {
      width: 100%;
      /* border: 2px solid red; */
      padding: 5px 0 5px 5px;
      /* margin-right: 10px; */
      /* margin-left: 10px; */
      /* color: red; */
      /* padding-left: 5px; */
      height: 35px;
    }
  }
`;
const Name = styled.p`
  color: black;
  font-size: 13px;
  margin-right: 18px;
`;
const Input = styled.input`
  /* border: 1px solid blue; */
`;
const AddressDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  .address {
    input {
      width: 100%;

      /* border: 2px solid red; */
      /* padding: 5px 0; */
      padding: 5px 0 5px 5px;
      height: 35px;
    }
  }
`;
const Address = styled.p`
  color: black;
  font-size: 13px;
  margin-right: 5px;
`;
const CountryPinContainer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const CountryDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 256px;
  height: 100%;
  /* width: 200px; */
  .dropdown {
    border: none;
    /* border: 1px solid grey; */
    /* margin-top: -13px; */
    margin-left: 4px;
    height: 33px;
    /* height: 100%; */
    /* position: fixed; */
    min-width: 170px;
    /* width: 100%; */
    /* padding: 20px; */
    /* background-color: red; */
    /* overflow: hidden; */
  }
  .select-div {
    border: none;
    background-color: #fff;
    height: 100%;
    /* width: 70px; */
    /* border: 2px solid rebeccapurple; */
    > p {
      font-size: 14px;
      /* color: ; */
    }
  }
  .option-div {
    /* border: 1px solid red; */
    position: fixed;
    top: 43%;
    width: 170px;
    margin-top: 21px;
    /* width: 100%; */
    /* width: 78px; */
    z-index: 2px;
    > div {
      overflow-y: scroll;
      height: 200px;
      background-color: #fff;
      /* background-color: red; */
      /* border: none; */
      /* height: 3400px; */
      /* height: 100%; */
    }
    div::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    div::-webkit-scrollbar {
      width: 4px;
      /* height: 100px; */
      background-color: #f5f5f5;
    }

    div::-webkit-scrollbar-thumb {
      -webkit-border-radius: 20px;
      border-radius: 10px;
      background-color: #000000;
    }
  }
`;
const PinCodeDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  .pin {
    input {
      /* border: 2px solid red; */
      /* padding: 5px 0; */
      padding: 5px 0 5px 5px;
      width: 100%;
      height: 35px;
    }
  }
`;

const Country = styled.p`
  /* border: 1px solid red; */
  color: black;
  font-size: 13px;
  margin-right: 5px;
  padding: 7px 0;
  height: 100%;
`;
const PinCode = styled.p`
  color: black;
  font-size: 13px;
  margin-right: 5px;
`;
const Select = styled.select`
  border: 1px solid red;
`;

const ShippingName = styled.p`
  /* color: red; */
  /* border: 1px solid red; */
  margin-bottom: 10px;
  font-family: monospace;
  font-weight: 600;
  font-size: 14px;
  /* margin-left: 5px; */
`;
const PaymentName = styled.p`
  /* color: red; */
  /* border: 1px solid green; */
  margin-bottom: 10px;
  font-family: monospace;
  font-weight: 600;
  font-size: 14px;
`;
const CodContainer = styled.div`
  /* border: 1px solid red; */
  /* padding: 0 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* justify-content: center; */
  .input-cod {
    /* color: green; */
    width: 20px;
    text-align: center;
    margin-left: 5px;
    input {
      border: 1px solid red;

      /* background-color: red; */
      height: 35px;
    }
  }
`;
const OnlineContainer = styled.div`
  /* border: 1px solid blue; */
  pointer-events: none;
  /* padding: 10px; */
  /* display: flex; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  .div {
    /* background-color: red; */
    /* border: 2px solid green; */
    width: 120px;
  }
  .upi-options {
    /* border: 2px solid red; */
    margin-top: 2px;
    margin-left: 6px;
    height: 34px;
    min-width: 114px;
  }

  .select-div {
    border: none;
    background-color: #fff;
    height: 100%;
    /* width: 70px; */
    /* border: 2px solid rebeccapurple; */
    > p {
      font-size: 14px;
      /* color: ; */
    }
  }
  .option-div {
    /* border: 1px solid red; */
    position: fixed;
    top: 43%;
    width: 114px;
    margin-top: 129px;
    /* width: 100%; */
    /* width: 78px; */
    z-index: 2px;
    > div {
      overflow-y: scroll;
      height: 130px;
      background-color: #fff;
      width: 100%;
      /* background-color: red; */
      /* border: none; */
      /* height: 3400px; */
      /* height: 100%; */
    }
    div::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    div::-webkit-scrollbar {
      width: 4px;
      /* height: 100px; */
      background-color: #f5f5f5;
    }

    div::-webkit-scrollbar-thumb {
      -webkit-border-radius: 20px;
      border-radius: 10px;
      background-color: #000000;
    }
  }
`;

const MethodContainer = styled.div`
  /* border: 2px solid purple; */
  /* padding: 30px; */
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 70px;
  /* display: flex;
  gap: 10px;
  justify-content: space-around; */
  /* flex-direction: column; */
`;

const Cod = styled.p`
  /* color: red; */
  color: black;
  font-size: 13px;
  margin-right: 5px;
`;
const Upi = styled.p`
  /* color: red; */
  /* border: 2px solid purple; */

  color: black;
  font-size: 13px;
  margin-right: 5px;
  margin-top: 8px;
  /* padding-top: 5px; */
  /* margin-top: 5px; */
`;
const GrandTotalContainer = styled.div`
  /* border: 2px solid green; */
  padding: 0 10px;
  margin-top: 10px;
  background-color: whitesmoke;
  border-radius: 3px;
`;
const GrandTotalBody = styled.div`
  border-radius: 5px;

  /* border: 2px solid red; */
  padding: 4px 0;
`;
const SumOfProductsDiv = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;

  /* padding: 10px; */
`;
const GrandTotalDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  /* padding: 10px; */
`;
const DiscountDiv = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;

  /* padding: 10px; */
`;
const TotalProducts = styled.p`
  /* border: 1px solid green; */

  /* color: red; */
  font-size: 13px;
  font-family: monospace;
`;
const Number = styled.p`
  /* border: 1px solid green; */
  height: 100%;
  font-family: "Brush Script MT", cursive;
  /* color: blue; */
  font-size: 14px;
  letter-spacing: 0.6px;
  /* font-weight: 600; */
`;
const Discount = styled.p`
  /* color: blue; */
  font-size: 13px;
  font-family: monospace;
  color: grey;
  /* font-style: italic; */
`;
const DiscountPerc = styled.p`
  color: green;
  font-size: 12px;
  letter-spacing: 0.6px;

  font-style: italic;
`;
const Total = styled.p`
  /* color: orange; */
  font-size: 13px;
  font-family: serif;
  font-weight: 600;
  letter-spacing: 0.6px;
`;
const TotalNumber = styled.p`
  /* color: purple; */
  font-size: 13px;
  font-family: "Brush Script MT", cursive;
  letter-spacing: 0.6px;
`;
const ButtonContainer = styled.div`
  /* border: 2px solid green; */
  /* padding: 10px; */
  .order-btn {
    width: 100%;
    height: 100%;
    background-color: #3498db;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: white;
  }
`;
const PaymentDiv = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px; */
  height: 35px;
`;
export {
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
};
