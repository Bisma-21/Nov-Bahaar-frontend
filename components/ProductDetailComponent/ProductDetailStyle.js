import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 50px; */
  width: 100vw;
  /* position: absolute;
  top: 10%; */
  margin-top: 7px;
  /* z-index: 0.5; */
`;

const Container = styled.div`
  /* border: 2px solid red; */
  /* padding: 20px 0; */
  display: flex;
  /* width: 100vw; */
  /* grid-template-columns: 1fr 1fr; */
  /* gap: 50px; */
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
  gap: 20px;
  /* width: 100%; */
`;
const InnerContainer = styled.div`
  /* border: 1px dotted red; */
  display: flex;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  justify-content: center;
  /* width: 200px; */
  /* height: 350px; */
  max-height: 326px;
`;
const ImageContainer = styled.div`
  /* border: 1px solid blue; */
  /* padding: 20px; */
  /* width: 35vw;
  height: 79vh; */
  width: 300px;
  /* height: 340px; */
  overflow: hidden;
  border-radius: 1%;
  /* height: 290px; */
  /* height: 80vh; */
  img {
    /* padding: 20px; */
    width: 100%;
    height: 100%;
    /* height: 79vh; */
    border-radius: 1%;
  }
  img:hover {
    /* border-radius: 5%; */
    transform: scale(1.2);
    transition: transform 0.5s linear;
    cursor: pointer;
    border-radius: 1%;
  }
`;
const DescriptionContainer = styled.div`
  /* border: 1px double green; */
  padding: 20 20px;
  /* width: 30vw; */
  width: 412px;
  /* height: 79vh; */
`;
const TitleContainer = styled.div`
  /* border: 1px solid red; */

  /* display: flex; */
`;

const Title = styled.h1`
  /* border: 2px solid green; */
  color: #2b2b2b;
  font-size: 23px;
  margin-bottom: 7px;
  letter-spacing: 1px;
  font-family: serif;
  /* font-style: italic; */
`;
const Category = styled.p`
  color: #2b2b2b;
  font-size: 15px;
  margin-bottom: 7px;
  letter-spacing: 1px;
  font-family: serif;
  /* border: 2px solid blue; */
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 5px; */
  /* border: 1px solid green; */
  padding: 3px 0;
  /* margin-top: 5px; */
`;
const PriceBody = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
`;
const PriceTag = styled.p`
  /* border: 2px solid blue; */
  color: #2b2b2b;
  margin-right: 5px;
  font-size: 15px;
  letter-spacing: 1.3px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Price = styled.h3`
  /* border: 2px solid purple; */
  color: #2b2b2b;
  letter-spacing: 1px;
  font-family: "Brush Script MT", cursive;
  font-size: 16px;
`;
const DiscountContainer = styled.div``;
const Discount = styled.p`
  /* border: 2px solid red; */
  color: green;
  font-size: 15px;
  letter-spacing: 1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  /* margin-right: 30px; */
`;
const ProductDetailContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5px 0px;
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
`;
const Head = styled.h3`
  /* border: 2px solid blueviolet; */

  color: #2b2b2b;
  /* text-align: center; */
  font-family: serif;
`;
const Description = styled.p`
  /* border: 1px solid blue; */
  margin-top: 7px;
  margin-bottom: 15px;
  color: #2b2b2b;
  line-height: 22px;
  font-size: 16px;
  word-spacing: 2px;
  letter-spacing: 0.6px;
  word-break: break-all;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* padding: 10px; */
`;
const WishListContainer = styled.div`
  /* cursor: pointer; */
  /* border: 1px solid blue; */
  /* margin-top: -10px; */
  /* :hover {
    background-color: red;
  } */
  /* padding: 3px 0; */
`;
const SaveProductContainer = styled.div`
  border: 1px solid #c6bbac;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  padding: 9px 0px;

  cursor: pointer;
  .whishlisted {
    margin-right: 6px;
    width: 80px;
    background-color: #fff;
    border: none;
    margin-right: 0px;
    font-size: 14px;
    :hover {
      background-color: #c6bbac;
      /* background-color: #c6bbac; */

      /* .filled-heart:hover {
        color: black;
      } */
    }
  }
  .filled-heart {
    /* color: #c8c4c4; */
    :hover {
      color: red;
    }
  }
  .empty-heart {
    /* color: red; */
    margin-left: 5px;
    font-size: 17px;
  }
  .whishlist {
    /* border: 1px solid red; */
    margin-right: 6px;
    width: 80px;
    background-color: #fff;
    border: none;
    margin-right: -9px;
    font-size: 14px;
    letter-spacing: 0.6px;
    :hover {
      background-color: #c6bbac;
    }
  }
  :hover {
    background-color: #c6bbac;
    /* background-color: red; */
    .whishlist {
      background-color: #c6bbac;
      /* border: 1px solid red; */
    }
    .whishlisted {
      background-color: #c6bbac;
    }
    .filled-heart {
      color: grey;
    }
  }
`;
const WishListText = styled.p`
  margin-right: 6px;
  font-size: 14px;
`;
const AddToCartContainer = styled.div`
  margin-top: 15px;
  background-color: #c6bbac;
  /* border: 1px solid blue; */
  cursor: pointer;
  /* :hover {
    background-color: white;
    border: 1px solid #c6bbac;
  } */
`;
//
const AddToCartDiv = styled.div`
  border: 1px solid #c6bbac;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0px;
  cursor: pointer;
  .cart-btn {
    margin-right: 6px;
    width: 80px;
    background-color: #c6bbac;
    border: none;
    margin-right: 0px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
  }
  :hover {
    background-color: white;
    border: 1px solid #c6bbac;
    .cart-btn {
      background-color: white;
    }
  }
`;
const AddedToCartDiv = styled.div`
  border: 1px solid #c6bbac;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0px;
  cursor: pointer;
  .disable-icon {
    color: grey;
  }
  .already-in-cart-btn {
    margin-right: 6px;
    width: 80px;
    background-color: #c6bbac;
    border: none;
    margin-right: -10px;
    font-size: 14px;
    /* border: 1px solid red; */
  }
  :hover {
    background-color: white;
    border: 1px solid #c6bbac;
    .already-in-cart-btn {
      background-color: white;
    }
  }
`;
const CartText = styled.p`
  margin-right: 6px;

  /* border: 1px solid #c6bbac; */
`;
const LeftContainer = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */
  height: 300px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: start;
`;
const ImageBody = styled.div`
  /* border: 4px solid green; */
  /* padding: 10px; */

  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 40px; */
  border-radius: 2px;
  cursor: pointer;
`;
const ImageDivision = styled.div`
  /* border: 2px solid red; */
  width: 45px;
  height: 55px;
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
  /* gap: 30px; */
  div {
    border: 2px solid blue;
  }
  img {
    /* border: 1px solid green; */
    width: 100%;
    height: 100%;
    border-radius: 2px;
    cursor: pointer;
  }
`;
const ReviewContainer = styled.div`
  /* border: 3px solid green; */
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 30px;
  /* margin-left: 30px; */
  /* justify-content: space-evenly; */
`;
const ReviewBody = styled.div`
  /* border: 1px solid green; */
  /* padding: 10px 0; */
  /* width: 412px; */
  /* margin-left: 396px; */
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 60px;
  width: 306px;
  overflow-y: scroll;
  height: 160px;
`;
const AllReviewContainer = styled.div`
  /* border: 1px solid red; */
  /* padding: 5px; */
`;
const MyReviewContainer = styled.div`
  border: 1px solid #eae7e7;
  padding: 2px 10px;
  width: 412px;
  border-radius: 3px;
`;
const AboveDiv = styled.div`
  /* border: 1px solid blue; */
  padding: 0 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const UserName = styled.p`
  /* border: 1px solid blue; */
  /* padding: 5px; */
  font-weight: 600;
  font-family: serif;
  letter-spacing: 0.6;
`;
const DateTime = styled.p`
  /* border: 1px solid blue; */
  /* padding: 5px; */
  display: flex;
  justify-content: end;
  color: #3498db;
  /* font-size: 16px; */
  /* font-style: italic; */
  font-size: 15px;
  letter-spacing: 1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
`;
const BelowDiv = styled.div`
  /* border: 1px solid blue; */
  padding: 0 5px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const Comment = styled.p`
  /* border: 1px solid blue; */
  /* padding: 5px; */
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  word-spacing: -3.8px;
  letter-spacing: -1px;
`;
const Rating = styled.p`
  /* border: 1px solid blue; */
  /* padding: 5px; */
  display: flex;
  justify-content: end;
  color: goldenrod;
  align-items: center;
`;
const HeadingDiv = styled.div``;
const InputDiv = styled.div`
  display: grid;
  /* grid-template-columns: 3fr 1fr;
  gap: 5px; */
  margin: 0 0 5px 0;
`;
const ButtonDiv = styled.div`
  /* border: 1px solid blue; */
  /* margin-top: 4px; */
  .btn {
    width: 100%;
    background-color: #34aadc;
    border: none;
    margin-right: 0px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    padding: 9px 0;
    margin-top: 2px;
  }
`;
const Heading = styled.p`
  font-family: serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 16px;
`;
const Input = styled.input`
  height: 35px;
  padding: 10px;
`;
const RatingDiv = styled.div`
  /* border: 1px solid red; */
  /* padding: 5px; */
  margin: 0 0 10px 0;
  color: goldenrod;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const MyReviewBody = styled.div`
  /* border: 1px solid red; */
  /* padding: 5px; */
  margin-top: 8px;
`;
const NotComment = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* align-items: end; */
  justify-content: center;
  height: 150px;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transition: transform(-50, -50); */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  div {
    display: flex;
    align-items: center;
  }
`;
export {
  OuterContainer,
  Container,
  InnerContainer,
  ImageContainer,
  DescriptionContainer,
  Title,
  TitleContainer,
  Category,
  PriceContainer,
  PriceBody,
  PriceTag,
  Price,
  DiscountContainer,
  Discount,
  ProductDetailContainer,
  Head,
  Description,
  WishListContainer,
  SaveProductContainer,
  WishListText,
  AddToCartContainer,
  CartText,
  AddToCartDiv,
  AddedToCartDiv,
  ImageBody,
  LeftContainer,
  ImageDivision,
  ReviewContainer,
  ReviewBody,
  AllReviewContainer,
  MyReviewContainer,
  AboveDiv,
  UserName,
  DateTime,
  BelowDiv,
  Comment,
  Rating,
  Heading,
  HeadingDiv,
  InputDiv,
  Input,
  ButtonDiv,
  RatingDiv,
  MyReviewBody,
  NotComment,
};
