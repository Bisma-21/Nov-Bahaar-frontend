import styled from "styled-components";
const OuterContainer = styled.div`
  width: 100%;
`;
const Body = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
  display: flex;
  gap: 10;
  background-color: #ab9e8e;
  /* border: 1px solid red; */
  /* padding: 20px; */
  padding: 2px;
`;
const IstDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* width: 50px; */
  height: 35px;
  display: flex;
  justify-content: center;
  /* margin-left: 20px; */
  /* border-radius: 50%; */
  margin-left: 15px;
  img {
    width: 35px;
    height: 100%;
    border-radius: 50%;
  }
`;
const SecondDiv = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-right: 95px;
`;
const ThirdDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const FourthDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 50px; */
`;
const HeadingDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* height: 100%; */
`;
const CoNameDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NameDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  :hover {
    transform: scale(1.04);
    transition: transform 300ms linear;
  }
`;
const ByDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 120px;
  margin-right: 10px;
`;
const YearDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerContainer = styled.div`
  /* border: 2px solid blue; */
  /* display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px; */
  display: grid;
  grid-template-columns: 2fr 6fr;
  width: 100%;
  /* justify-content: end; */
`;
const AppLink = styled.div`
  /* border: 1px solid yellowgreen; */
  a {
    color: #007aff;
    font-weight: bolder;
    /* font-family: bolder; */
    /* border: none;; */
    margin-right: 5px;
    margin-left: 290px;
  }
`;
const LeftContainer = styled.div`
  /* border: 1px solid yellowgreen; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
`;
const RightContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
`;
const Name = styled.p`
  color: #2b2b2b;
  /* font-family: serif; */
  font-family: "Brush Script MT", cursive;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  margin-right: 5px;
  margin-left: 5px;
  a {
    text-decoration: none;
    color: #2b2b2b;
  }
  /* border: 1px solid yellowgreen; */
`;
const CoName = styled.p`
  /* border: 1px solid yellowgreen; */
  color: #f5f1ec;
  letter-spacing: 1px;
  margin-right: 10px;
  margin-left: 10px;
`;
const By = styled.p`
  /* border: 1px solid yellowgreen; */
  font-family: "Courier New", Courier, monospace;
  /* font-weight: 600; */
  font-size: 18px;
  color: #f5f1ec;
  margin-right: 5px;
  margin-left: 5px;
`;
const Year = styled.p`
  /* border: 1px solid yellowgreen; */
  color: #f5f1ec;
  margin-right: 20px;
  margin-left: 10px;
`;
const Heading = styled.p`
  /* border: 1px solid yellowgreen; */
  font-size: 30px;
  font-family: serif;
  letter-spacing: 1px;
  color: #f5f1ec;
`;
export {
  OuterContainer,
  Body,
  IstDiv,
  SecondDiv,
  ThirdDiv,
  FourthDiv,
  HeadingDiv,
  Heading,
  NameDiv,
  CoName,
  CoNameDiv,
  AppLink,
  Year,
  By,
  ByDiv,
  Name,
  YearDiv,
  InnerContainer,
  RightContainer,
  LeftContainer,
};
