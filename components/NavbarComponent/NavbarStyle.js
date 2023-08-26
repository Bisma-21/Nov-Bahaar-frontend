import styled from "styled-components";

const Header = styled.div`
  /* border: 2px solid red; */
  background-color: #f5f1ec;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.2fr;
  /* padding: 13px; */
  /* width: 100vw; */
  position: sticky;
  z-index: 1;
  top: 0;
  height: 45px;
  /* bottom: 77.5%; */
`;

const LeftDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  background-color: #f5f1ec;
  /* border: 3px solid blue; */
  place-items: center;
  font-size: 13px;
  margin-left: 10px;
  .icon {
    cursor: pointer;
    :hover {
      color: #c6bbac;
    }
  }

  /* justify-content: center; */
  /* padding: 10px; */
`;
const RightDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: end;
  /* gap: 5px; */
  /* padding-top: 10px; */
  /* margin-top: -13px; */
  /* height: 20px; */
  /* margin-bottom: 10px; */
  .login-btn {
    /* border: 2px solid blue; */
    width: 70px;
    margin-right: 0px;
    background-color: #c6bbac;
    font-size: 14px;
    letter-spacing: 1px;
    border: none;
    font-style: italic;
    cursor: pointer;
    :hover {
      background-color: #f5f1ec;
      /* transition: ; */
    }
    /* font-weight: 500;
    word-spacing: 10px; */
    /* height: 40px; */
    /* padding: 10px; */
    /* background-color: plum; */
  }
  .signup-btn {
    /* border: 2px solid blue; */
    width: 70px;
    margin-left: 2px;
    background-color: #c6bbac;
    font-size: 14px;
    letter-spacing: 1px;
    border: none;
    font-style: italic;
    cursor: pointer;
    :hover {
      background-color: #f5f1ec;
      /* transition: ; */
    }
  }
`;
const MiddleDiv = styled.div`
  /* border: 2px solid green; */
  background-color: #f5f1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* border: none; */
  /* background-color: yellowgreen; */
  > input {
    border: none;
    width: 300px;
    padding: 5px;
    border-bottom: 1px solid black;
    &:focus {
      outline: none; /* Remove the default focus outline */
      border-color: transparent; /* Set border color to transparent */
    }
  }
`;
const Label = styled.p`
  color: #2b2b2b;
  margin-right: 20px;
  /* margin-top: 6px; */
  font-size: 12px;
  cursor: pointer;
  :hover {
    color: #c6bbac;
    /* text-decoration: underline; */
  }
`;

const MainBody = styled.div`
  /* margin-top: 20px; */
  background-color: pink;
`;
const IconDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  /* padding-right: 15px; */
  /* margin-right: 15px; */
  cursor: pointer;
  :hover {
    /* color: grey; */
  }
  .icon {
    font-size: 23px;
    /* color: red; */
  }
`;
const Circle = styled.div`
  /* border: 2px solid blue; */
  /* background-color: #2b2b2b; */
  background-color: #2b2b2b;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-bottom: 22px;
  margin-left: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #c6bbac;
    /* color: gold; */
    text-align: center;
    font-size: 12px;
    /* margin-top: 1px; */
  }
`;
const Icon = styled.div``;
const HeartDiv = styled.div`
  /* border: 1px solid blue; */
  /* margin-right: 10px; */
  width: 50px;
  /* padding-right: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .heart-icon {
    /* color: red; */
    font-size: 21px;
  }
`;
const LogoutDiv = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  /* padding-right: 15px; */
  /* margin-right: 15px; */
  cursor: pointer;
  .logout {
    font-size: 25px;
    color: #ff2d55;
    /* color: red; */
  }
`;
const ImageDiv = styled.div`
  /* border: 1px solid red; */
  /* padding: 3px; */
  width: 50px;
  height: 45px;
  img {
    /* width: 10px; */
    height: 100%;
    width: 100%;
    cursor: pointer;
    /* background-color: black; */
    /* border: 1px solid red; */
  }
`;
export {
  Header,
  MiddleDiv,
  RightDiv,
  LeftDiv,
  Label,
  MainBody,
  IconDiv,
  Circle,
  Icon,
  HeartDiv,
  LogoutDiv,
  ImageDiv,
};
