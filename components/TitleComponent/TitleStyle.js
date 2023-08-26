import styled from "styled-components";
const OuterContainer = styled.div`
  background-color: #fffefd;
  /* padding: 50px; */
  /* border: 2px solid blue; */
  position: sticky;
  top: 45px;
  z-index: 1;
  width: 100vw;
  /* height: 99vh; */
  /* scroll-behavior: smooth; */
  /* bottom: -46px; */
`;

const Heading = styled.div`
  padding: 10px;
  background-color: #fffefd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* border: 1px solid red; */
`;
const Title = styled.h2`
  color: #2b2b2b;
  font-family: serif;
  font-size: 36px;
  /* border: 1px solid red; */
`;
const SubTitle = styled.p`
  /* margin-top: px; */
  /* border: 2px solid blue; */
  padding-top: 10px;
  color: #2b2b2b;
  font-family: garamond;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
`;
export { OuterContainer, Heading, Title, SubTitle };
