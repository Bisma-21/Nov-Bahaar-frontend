import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 0 0 5px 0; */
  background-color: whitesmoke;
  border-radius: 3px;
  > div {
    /* border: 1px solid red; */
    overflow-y: scroll;
    height: 180px;
    /* scroll-margin: 2px; */
    /* scrollbar-track-color: red; */
    /* scrollbar-width: 2px; */
    /* width: 10px; */
    /* scroll-behavior: smooth;
    scroll-snap-align: initial; */
  }
  /* div::-webkit-scrollbar {
    width: 10px;
  }
  div::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  div::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d;
  } */
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
`;
const MainContainer = styled.div`
  border: 1px solid #ebdede;
  /* border: 2px solid red; */
  padding: 5px;
  /* width: 250px; */
  display: grid;
  grid-template-columns: 0.35fr 1.7fr;
  gap: 10px;
  border-radius: 4px;
  /* background-color: whitesmoke; */
  /* overflow-y: scroll;
  height: 200px; */
`;
const LeftContainer = styled.div`
  /* border: 1px solid blue; */
  border-radius: 4px;

  /* padding: 10px; */
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
const RightContainer = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px; */
  border-radius: 4px;
  height: 94%;
  /* margin-right: 60px; */
`;
const DetailContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const NameDiv = styled.div`
  /* border: 1px solid green; */
  padding: 3px 0;
  /* padding: 5px 0 10px 0; */

  border-radius: 4px;
  word-break: break-all;
`;
const PriceQuantityDiv = styled.div`
  /* border: 1px solid green; */
  /* padding: 9px 0; */
  border-radius: 4px;
  padding: 3px 0;

  display: flex;
  align-items: center;
`;
const Name = styled.p`
  /* color: red; */
  font-size: 14px;
  font-weight: 600;
  font-family: serif;
  font-size: 15px;
  letter-spacing: 0.1px;
`;
const Price = styled.p`
  /* color: blue; */
  font-size: 14px;
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
`;
const Quantity = styled.p`
  color: grey;
  font-size: 14px;
  font-family: "Brush Script MT", cursive;
`;
const Star = styled.p`
  color: grey;
  font-size: 14px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: 10px;
`;

export {
  OuterContainer,
  MainContainer,
  LeftContainer,
  RightContainer,
  DetailContainer,
  NameDiv,
  Name,
  PriceQuantityDiv,
  Price,
  Quantity,
  Star,
};
