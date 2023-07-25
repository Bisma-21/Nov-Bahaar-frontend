import ButtonComponent from "../Commons/ButtonComponent/ButtonComponent"
import InputComponent from "../Commons/InputComponent/InputComponent"
import {
    OuterContainer, Body,
    IstDiv, SecondDiv, ThirdDiv,
    FourthDiv, HeadingDiv, MailDiv, ButtonDiv, Head, InputDiv,
    SecondDetailDiv, PhoneDiv, EmailDiv, AddressDiv,
    IconDiv, SecondHeadDiv, HeadTag,
    Phone, PhoneNumber, Email, Eaddress, Address, Location,
    ThirdDetailDiv, AboutDiv, ServiceDiv, AdditionalDiv,
    CopyRightDiv, IconContainer, CopyRightText, Title,
    ImageDiv
} from "./FooterStyle"
import { FaInstagram } from "react-icons/fa"
import { GrFacebookOption } from "react-icons/gr"
import { BsPinterest } from "react-icons/bs"
import { IoLogoYoutube } from "react-icons/io"
import { FaTwitter } from "react-icons/fa"
import { AiOutlineGooglePlus } from "react-icons/ai"
const FooterComponent = () => {
    return (
        <>
            <OuterContainer>
                <Body>
                    <IstDiv>
                        <div>
                            <ImageDiv>
                                <img src="/logo.png" alt="" />
                            </ImageDiv>
                            <HeadingDiv>
                                <Head>Nov Bahaar</Head>
                            </HeadingDiv>
                        </div>
                        <MailDiv>
                            <InputDiv>
                                <InputComponent className="input" placeholder="Enter Your Mail*" />
                                <hr />
                            </InputDiv>
                            <ButtonDiv>
                                <ButtonComponent className="btn" title="Submit" />
                            </ButtonDiv>
                        </MailDiv>
                    </IstDiv>
                    <SecondDiv>
                        <SecondHeadDiv>
                            <HeadTag> Mobirise</HeadTag>
                        </SecondHeadDiv>
                        <SecondDetailDiv>
                            <PhoneDiv>
                                <Phone> Phone:</Phone>
                                <PhoneNumber>+91-9149900676</PhoneNumber>
                            </PhoneDiv>
                            <EmailDiv>
                                <Email> Email:</Email>
                                <Eaddress> bisma@gmail.com</Eaddress>
                            </EmailDiv>
                            <AddressDiv>
                                <Address> Address:</Address>
                                <Location> Dr. Ali Jan road.</Location>
                            </AddressDiv>
                        </SecondDetailDiv>
                        {/* <IconDiv>
                        </IconDiv> */}
                    </SecondDiv>
                    <ThirdDiv>
                        <SecondHeadDiv>
                            <HeadTag> Recents</HeadTag>
                        </SecondHeadDiv>
                        <ThirdDetailDiv>
                            <AboutDiv>
                                <p>About Us</p>
                            </AboutDiv>
                            <ServiceDiv>
                                <p>Services</p>
                            </ServiceDiv>
                            <AdditionalDiv>
                                <p>Contact Us</p>
                            </AdditionalDiv>
                        </ThirdDetailDiv>
                    </ThirdDiv>
                    <FourthDiv>
                        <SecondHeadDiv>
                            <HeadTag> Links</HeadTag>
                        </SecondHeadDiv>
                        <IconDiv>
                            <IconContainer>
                                <FaInstagram className="icon" />
                            </IconContainer>
                            <IconContainer>
                                <GrFacebookOption className="icon" />
                            </IconContainer>
                            <IconContainer>
                                <BsPinterest className="icon" />
                            </IconContainer>
                            <IconContainer>
                                <IoLogoYoutube className="icon" />
                            </IconContainer>
                            <IconContainer>
                                <AiOutlineGooglePlus className="icon" />
                            </IconContainer>
                            <IconContainer>
                                <FaTwitter className="icon" />
                            </IconContainer>

                            {/* <GrFacebookOption className="icon" />
                            <BsPinterest className="icon" />
                            <IoLogoYoutube className="icon" />
                            <FaTwitter className="icon" />
                            <AiOutlineGooglePlus className="icon" /> */}
                        </IconDiv>
                        <CopyRightDiv>
                            <Title>Developed By </Title>
                            <CopyRightText>Bismah Manzoor</CopyRightText>
                        </CopyRightDiv>
                    </FourthDiv>
                </Body>
            </OuterContainer>
        </>
    )
}
export default FooterComponent