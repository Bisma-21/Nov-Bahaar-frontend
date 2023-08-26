import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 2px solid red;
  padding: 20px 10px; */
`;
const MainContainer = styled.div`
  /* border: 2px solid blue; */
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 62px;
  /* position: fixed; */
  z-index: 100;
  /* top: 14%; */
  .arrow {
    /* color: blue; */
    /* margin-right: 2px; */
    font-size: 18px;
  }
`;

const Select = styled.p`
  /* color: red; */
  font-size: 11px;
  margin-right: 1px;
  letter-spacing: 1px;
  margin-left: 4px;
`;

const Arrow = styled.div`
  /* border: 1px solid red; */
  align-items: center;
`;

const OptionContainer = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  min-height: 73px;
  display: flex;
  justify-content: center;
  margin-top: -1px;

  z-index: 1px;
  /* width: 62px; */
  /* padding: 30px; */
  /* margin-top: 20px; */
`;
const Options = styled.p`
  /* color: green; */
  /* border: 1px solid red; */
  padding: 5px 0;
  margin: 5px 0;
  width: 100%;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  font-size: 14px;
  /* background-color: blue; */
  /* width: 100%; */
  :hover {
    background-color: #3498db;
    color: white;
    cursor: default;
  }

  /* background-color: ${({ active }) =>
    active ? "#3498db" : "whitesmoke"}; */
`;
const SelectContainer = styled.div`
  /* border: 0.5px solid grey; */
  display: flex;
  width: 100%;
  /* padding: 1px 0; */
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 2px;
  /* padding-left: 1px; */
  /* margin-left: 2px; */
`;

const OptionsDiv = styled.div`
  /* border: 0.7px solid grey; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: whitesmoke;
  border-radius: 2px;
  /* font-size: 17px; */
  /* .choose {
    background-color: #3498db;
  } */
  /* background-color: ${({ active }) => (active ? "red" : "blue")}; */
`;
export {
  OuterContainer,
  MainContainer,
  Select,
  Arrow,
  Options,
  OptionContainer,
  SelectContainer,
  OptionsDiv,
};
