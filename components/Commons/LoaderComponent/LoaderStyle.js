import styled from "styled-components";

const CircleDiv = styled.div`
  border: 3px solid grey;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export { CircleDiv };
