import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 2px solid green; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 88vh;
`;
const InnerContainer = styled.div`
  /* border: 2px solid green; */
  /* padding: 10px; */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Body = styled.div`
  /* border: 2px solid green; */
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  min-width: 440px;
  background-color: #ececec;
  border-radius: 4px;
  /* height: 100px; */
`;
const HeadingDiv = styled.div`
  /* border: 2px solid red; */
  padding: 25px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
const IconDiv = styled.div`
  /* border: 2px solid blue; */
  padding: 15px 15px 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  .click {
    /* cursor: pointer; */
  }
`;
const SubHeading = styled.p`
  /* color: green; */
  /* font-weight: 600; */
  color: grey;
  /* font-family: "Courier New", Courier, monospace; */
  font-family: "Brush Script MT", cursive;
  letter-spacing: 0.5px;
`;
const Heading = styled.h3`
  /* color: green; */
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
  font-family: serif;
  letter-spacing: 1px;
`;
export {
  OuterContainer,
  InnerContainer,
  Body,
  HeadingDiv,
  IconDiv,
  Heading,
  SubHeading,
};
