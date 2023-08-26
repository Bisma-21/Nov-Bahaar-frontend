import styled from "styled-components";

const Body = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  /* z-index: 1; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 3px;
`;
const Container = styled.div`
  /* border: 2px solid green; */
  width: 450px;
  padding: 15px 0;
`;
const SubContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const OuterConatiner = styled.div`
  /* border: 2px solid blue; */
  /* padding: 20px; */
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ButtonContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px 0; */
`;
const Heading = styled.p`
  /* border: 2px solid red; */
  padding: 3px 0 6px 0;
  font-style: italic;
`;
const Icon = styled.div`
  /* padding: 5px 0;
  border: 2px solid red; */
  /* padding: 3px 0; */
  color: green;
  font-size: 40px;
`;
const Button = styled.p`
  /* border: 1px solid red; */
  display: flex;
  justify-content: end;
  padding: 7px 0 5px 0;
  /* border-radius: none; */
  padding: 0 10px;
  gap: 5px;
  .done-btn {
    background-color: #c0bebe;
    width: 60px;
    padding: 8px 0;
    /* border-radius: none; */
    border: none;
    cursor: pointer;
    color: whitesmoke;
    letter-spacing: 1px;
  }
  .cancel-btn {
    background-color: #007aff;
    width: 60px;
    padding: 8px 0;
    /* border-radius: none; */
    border: none;
    cursor: pointer;
    color: whitesmoke;
    letter-spacing: 1px;
  }
`;
const InputContainer = styled.div`
  /* border: 1px solid red; */
  padding: 10px 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  input {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 16px;
  }
`;
export {
  OuterConatiner,
  Body,
  Container,
  SubContainer,
  ButtonContainer,
  Heading,
  Icon,
  Button,
  InputContainer,
};
