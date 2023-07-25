import styled from "styled-components";

const OuterContainer = styled.div`
  /* padding: 10px 40px; */
  /* border: 2px solid red; */
  /* overflow-y: scroll; */
  /* height: 80vh; */
`;

const TableContainer = styled.table`
  /* border: 1px solid blue; */
  /* padding: 0 40px; */
  /* overflow-y: scroll; */
  /* height: 200px; */
  width: 100%;
  /* margin-top: 44px; */
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  #customers td {
    p:hover {
      color: #3498db;
      text-decoration: underline;
    }
  }
  #customers .status {
    color: #3498db;
    font-style: italic;
  }
  #customers tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #customers tr:hover {
    background-color: #ddd;
    cursor: pointer;
    /* text-decoration: underline; */
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #a1a195;
    /* background-color: red; */
    color: white;
    /* position: fixed;
    top: 15%;
    width: 93.9%; */
    /* z-index: 1;
    /* bottom: -5%; */
    /* border: 4px solid blue; */
    /* > .data {
      border: 4px solid blue;
      padding: 20px;
    } */
  }
`;
const HeadingContainer = styled.div`
  /* padding: 20px 40px; */
  /* border: 2px solid green; */
  /* padding: 10px; */
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  /* color: red; */
  font-weight: 600;
  font-size: 24px;
  font-family: serif;
  letter-spacing: 0.6px;
`;
const Count = styled.p`
  /* color: purple; */
  font-size: 25px;
  font-family: "Brush Script MT", cursive;
  font-weight: 700;
`;
const TableBody = styled.div`
  /* border: 4px solid red; */
  overflow-y: scroll;
  height: 74.2vh;
  /* height: 100px; */
`;
const Body = styled.div`
  /* border: 3px solid purple; */
  padding: 10px 40px;
`;
export {
  OuterContainer,
  TableContainer,
  HeadingContainer,
  Count,
  Title,
  Body,
  TableBody,
};
