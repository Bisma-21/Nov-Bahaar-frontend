import styled from "styled-components";

const OuterContainer = styled.div`
  /* background-color: red; */
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 46px;
  padding: 20px;
`;
const Container = styled.div`
  /* width: 448px;
  height: 460px; */
  /* margin-right: 3px; */
  margin-top: 0px;
  /* width: 30rem; */
  /* height: 30rem; */
  /* border: 3px solid red; */
  /* background-image: linear-gradient(to bottom, black 10%, #8f018f); */
  /* background-color: rgb(40, 40, 40); */
  background-color: #f5f1ec;
  /* border-radius: 12px; */
  padding-bottom: 25px;
  /* background-color: white; */

  .top-heading {
    text-align: center;
    padding-top: 25px;
    color: #2b2b2b;
    font-style: italic;
    /* border: 2px solid red; */
    p {
      padding-top: 10px;
      /* margin-left: 10px; */
    }
  }

  /* margin: 20px 20px 20px 30px; */
`;

const LoginBody = styled.div`
  /* border: 3px solid blue; */
  width: 80%;
  /* margin: 23px 0 0 33px; */
  margin: 20px auto;
  /* padding-left: 10px; */
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* border-radius: 5px; */
  /* border: 3px solid red; */

  /* align-items: center; */
  > label {
    text-align: start;
    padding: 8px;
    color: #2b2b2b;
    /* float: left; */
  }
  > input {
    /* width: 22rem; */
    height: 2.2rem;
    border-radius: 5px;
    /* border: 1.5px solid grey; */
    padding-left: 10px;
    border: none;
  }
  > input:focus {
    outline: none;
  }
  .password {
    display: flex;
    height: 2.4rem;
    /* width: 80%; */
    border-radius: 2px;
    border: 1.5px solid grey;
    padding: 0 8px;
    > input {
      flex: 1;
      border: none;
    }
    > input:focus {
      outline: none;
    }
  }
`;

const SubmitContainer = styled.div`
  /* background-color: #eae8e8; */
  background-color: #c6bbac;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  border-radius: 4px;
  /* border: 1.5px solid red; */
  width: 80%;
  /* margin-left: 150px; */
  .submit-button {
    /* width: 40px; */
    height: 2.3rem;
    font-size: 15px;
    /* color: black; */
    color: #2b2b2b;
    font-style: italic;
    letter-spacing: 1px;
    background-color: #c6bbac;
    /* background-color: #eae8e8; */

    /* background-color: #7c3ec4; */
    border: none;
  }
`;
const LowerContainer = styled.div`
  /* padding-top: 50px; */
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 17px;
  /* border: 2px solid red; */
  /* flex-direction: row; */
  button {
    background-color: transparent;
    border: none;
    /* underline: none; */
    /* color: #7c3ec4; */
    /* color: #eae8e8; */
    font-size: 16px;
    cursor: pointer;

    /* font-weight: 500; */
  }
  button:hover {
    text-decoration: underline;
    color: #f5f1ec;
  }
`;
const iconStyle = {
  // border: "4px solid red",
  fontSize: "20px",
  height: "2.4rem",
  cursor: "pointer",
};
const Body = styled.div`
  max-width: 900px;
  /* width: 448px; */
  /* height: 450px; */

  /* margin-bottom: 10px; */
  /* width: 70vw; */
  /* height: 76vh; */
  /* padding: 10px; */
  /* min-height: ; */
  /* background-color: green; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid #c6bbac;
  /* position: relative; */
  /* align-items: baseline; */
  /* position: absolute; */
`;
const ImgContainer = styled.div`
  /* background-color: blue; */
  /* border: 2px solid red; */
  /* width: 448px;
  height: 460px; */
  /* padding: 30px; */
  .img {
    /* border: 2px solid blue; */

    width: 100%;
    height: 100%;
  }
`;
const Heading = styled.div`
  /* border: 2px solid blue; */
  /* display: flex;
  justify-content: start; */
`;

const DivContainer = styled.div`
  /* border: 2px solid red; */
  padding: 10px;
  width: 80%;
  /* margin: 23px 0 0 33px; */
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightDiv = styled.div`
  display: flex;
  /* border: 1px solid blue; */
`;
const LeftDiv = styled.div`
  display: flex;
  /* border: 1px solid blue; */
`;
const Link = styled.a`
  /* display: flex; */
  /* border: 1px solid blue; */
  color: blue;
  cursor: pointer;
  color: #2b2b2b;
  font-size: 14px;
  :hover {
    text-decoration: underline;
    color: #c6bbac;
  }
`;
const Label = styled.p`
  color: #2b2b2b;
  margin-left: 5px;
  font-size: 14px;
`;

const FooterDiv = styled.div`
  /* background-color: red; */
  padding: 9px;
  /* margin-top: 10px; */
  width: 80%;
  /* margin: 23px 0 0 33px; */
  margin: 19px auto 10px auto;
  border: 1px solid #c6bbac;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  .google-signin {
    cursor: pointer;
    :hover {
      text-decoration: underline;
      color: #c6bbac;
    }
  }
`;

const Hr = styled.hr`
  /* margin-top: 14px; */
  width: 80%;
  /* margin: 23px 0 0 33px; */
  margin: 14px auto;
`;
export {
  Container,
  OuterContainer,
  LoginBody,
  InputContainer,
  SubmitContainer,
  LowerContainer,
  iconStyle,
  Body,
  ImgContainer,
  Heading,
  DivContainer,
  RightDiv,
  Label,
  LeftDiv,
  Link,
  FooterDiv,
  Hr,
};
