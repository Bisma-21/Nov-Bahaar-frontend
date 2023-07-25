import styled from "styled-components";

const OuterContainer = styled.div`
  /* border: 2px solid blue; */
  /* padding: 20px 0; */
  width: 170px;
  /* align-items: center; */
`;
const Input = styled.div`
  /* border: 1px solid red; */
  /* padding: 10px 0; */
  /* align-items: center; */
  input {
    padding: 1px 0;
    /* align-items: center; */
    /* border: 1px solid grey; */
    border: none;
    /* margin-right: 10px; */
  }
  /* input:focus {
    border: none;
  } */
`;

const Text = styled.p`
  color: red;
`;
export { OuterContainer, Input, Text };
