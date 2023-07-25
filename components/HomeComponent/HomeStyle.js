import styled from "styled-components";

const OuterContainer = styled.div`
  /* border: 4px solid green; */
  /* padding: 90px; */
  /* height: 600px; */
  /* width: 100vw; */
  /* margin-top: 20px; */
  /* position: absolute;
  top: 32%;
  z-index: 0.3; */
`;

const Container = styled.div`
  /* border: 2px solid green; */
  /* padding: 40px; */
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  /* border: 2px solid blue; */
  /* padding: 10px; */
  width: 85vw;
  /* height: 30vh; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  /* margin-bottom: 10px; */
  padding-bottom: 30px;
`;

const CardBody = styled.div`
  /* border: 3px solid pink; */
  /* height: 33vh; */
  max-width: 200px;
`;

const ImageContainer = styled.div`
  /* border: 3px solid red; */
  margin-bottom: 7px;
  /* height: 33vh; */
  height: 170px;
  max-width: 200px;
  overflow: hidden;
  border-radius: 2px;
  img {
    width: 100%;
    transition: transform 0.5s linear;
    height: 100%;
    border-radius: 2px;

    /* height: 33vh; */
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.1);
    /* transition: transform 0.5s linear; */
    border-radius: 5%;
  }
`;

const DetailContainer = styled.div`
  /* border: 1px solid red; */
`;
const Title = styled.h3`
  color: #2b2b2b;
  /* font-style: italic; */
`;

const PriceContainer = styled.div`
  /* color: #2b2b2b;
  font-style: italic; */
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  /* border: 1px solid red; */
  color: #2b2b2b;
  font-style: italic;
  margin-left: -3px;
`;

const Discount = styled.p`
  color: green;
`;

const DetailBody = styled.div`
  /* border: 3px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  /* padding: 0 10px; */
`;

const Rating = styled.p`
  color: goldenrod;
`;

export {
  OuterContainer,
  Container,
  CardContainer,
  CardBody,
  ImageContainer,
  DetailContainer,
  PriceContainer,
  Title,
  Discount,
  DetailBody,
  Rating,
  Price,
};
