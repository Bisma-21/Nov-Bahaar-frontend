import styled from "styled-components";
const OuterContainer = styled.div`
  /* border: 5px solid red; */
  /* padding: 20px; */
  /* margin-top: 20px; */
  /* position: relative;
  bottom: 0%; */
  width: 100%;
  margin-top: auto;
`;
const Body = styled.div`
  /* border: 5px solid #f5f1ec; */
  /* padding: 10px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: black;
  /* padding-bottom: 20px; */
`;
const IstDiv = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const SecondDiv = styled.div`
  /* border: 1px solid green; */
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const ThirdDiv = styled.div`
  /* border: 2px solid pink; */
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 20px;
`;
const FourthDiv = styled.div`
  /* border: 2px solid yellow; */
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const HeadingDiv = styled.div`
  /* border: 2px solid yellow; */
  padding: 10px;
  /* padding: 10px 20px 30px 20px; */
`;
const MailDiv = styled.div`
  /* border: 2px solid yellow; */
  padding: 10px;
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
  /* color: whi; */
  .input {
    /* background-color: red; */
    input {
      /* border: 1px solid yellow; */
      background-color: black;
      /* font-size: 5px; */
      width: 210px;
      padding-top: 10px;
      /* color: red; */
    }
    input::placeholder {
      color: white;
      font-size: 18px;
      font-weight: 500;
      font-family: "Times New Roman", Times, serif;
      letter-spacing: 1px;
    }
    hr {
      margin-top: 4px;
      /* border-width: 13px; */
      /* width: 50%; */
    }
  }
`;
const ButtonDiv = styled.div`
  /* border: 2px solid yellow; */
  /* padding: 10px; */
  margin-left: 65px;
  .btn {
    /* border: 2px solid yellow; */
    background-color: red;
    width: 80px;
    height: 34px;
    border-radius: 30px;
    background-color: white;
    :hover {
      cursor: pointer;
      background-color: #3498db;
      color: white;
      border: none;
    }
  }
`;
const Head = styled.p`
  color: #e3d4c1;
  font-weight: 600;
  /* font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif; */
  letter-spacing: 1px;
  font-size: 25px;
  font-family: serif;
`;
const HeadTag = styled.p`
  color: whitesmoke;
  font-weight: 600;
  font-family: "Brush Script MT", cursive;
  letter-spacing: 2px;
  font-size: 17px;
`;
const InputDiv = styled.div``;
const SecondDetailDiv = styled.div`
  /* border: 1px solid yellow; */
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const PhoneDiv = styled.div`
  /* border: 1px solid yellow; */
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const EmailDiv = styled.div`
  /* border: 1px solid yellow; */
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddressDiv = styled.div`
  /* border: 1px solid yellow; */
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const IconDiv = styled.div`
  /* border: 1px solid whitesmoke; */
  /* padding: 10px; */
  padding: 3px 0;

  display: flex;
  gap: 12px;
  justify-content: start;
  /* flex-direction: column; */
  .icon {
    color: whitesmoke;
    :hover {
      color: #3498db;
      cursor: pointer;
    }
  }
`;
const SecondHeadDiv = styled.div`
  /* border: 1px solid yellow; */
  /* padding: 5px; */
  margin-bottom: 15px;
`;
const Phone = styled.p`
  color: whitesmoke;
  font-family: monospace;
  font-size: 16px;
`;
const PhoneNumber = styled.p`
  color: whitesmoke;
`;
const Email = styled.p`
  color: whitesmoke;
  font-family: monospace;
  font-size: 16px;
`;
const Eaddress = styled.p`
  color: whitesmoke;
`;
const Address = styled.p`
  color: whitesmoke;
  font-family: monospace;
  font-size: 16px;
  /* font-weight: 100; */
`;
const Location = styled.p`
  color: whitesmoke;
`;
const ThirdDetailDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* align-items: center; */
  p {
    color: whitesmoke;
    font-family: "Courier New", Courier, monospace;
    /* font-family: "Brush Script MT", cursive; */
  }
  p:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #3498db;
  }
`;
const AboutDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* padding: 5px; */
`;
const ServiceDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* padding: 5px; */
`;
const AdditionalDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* padding: 5px; */
`;
const CopyRightDiv = styled.div`
  /* border: 1px solid yellowgreen; */
  /* padding: 5px; */
  display: flex;
  /* justify-content: space-between; */
  margin-top: 7px;
  align-items: center;
  :hover {
    transform: scale(1.04);
    transition: transform 300ms linear;
  }
  /* justify-content: center; */
`;
const IconContainer = styled.div`
  border: 1px solid whitesmoke;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  :hover {
    border: 1px solid #3498db;
    cursor: pointer;
  }
`;
const CopyRightText = styled.p`
  color: whitesmoke;
  font-family: "Brush Script MT", cursive;
  /* font-weight: 600; */
  /* font-family: "Times New Roman", Times, serif; */
  /* font-family: "Brush Script MT", cursive; */
  /* :hover {
    transform: scale(1.1);
    transition: transform 300ms linear;
  } */
`;
const Title = styled.p`
  color: #3498db;
  font-family: "Brush Script MT", cursive;
  margin-right: 3px;
  /* :hover {
    transform: scale(1.1);
    transition: transform 300ms linear;
  } */
`;
const ImageDiv = styled.div`
  /* border: 1px solid red; */
  width: 60px;
  height: 55px;
  margin: 0 10px;
  margin-top: 3px;
`;
export {
  OuterContainer,
  Body,
  IstDiv,
  SecondDiv,
  ThirdDiv,
  FourthDiv,
  HeadingDiv,
  MailDiv,
  ButtonDiv,
  Head,
  InputDiv,
  SecondDetailDiv,
  PhoneDiv,
  EmailDiv,
  AddressDiv,
  IconDiv,
  SecondHeadDiv,
  HeadTag,
  Phone,
  PhoneNumber,
  Email,
  Eaddress,
  Address,
  Location,
  ThirdDetailDiv,
  AboutDiv,
  ServiceDiv,
  AdditionalDiv,
  CopyRightDiv,
  IconContainer,
  CopyRightText,
  Title,
  ImageDiv,
};
