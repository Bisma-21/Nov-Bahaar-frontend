import {
  OuterContainer,
  Body,
  IstDiv,
  SecondDiv,
  ThirdDiv,
  FourthDiv,
  HeadingDiv,
  Heading,
  NameDiv,
  CoName,
  CoNameDiv,
  AppLink,
  Year,
  By,
  ByDiv,
  Name,
  YearDiv,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "./SmallFooterStyle";
import { useRouter } from "next/router";
const SmallFooterComponent = () => {
  const router = useRouter();
  return (
    <>
      <OuterContainer>
        <Body>
          <InnerContainer>
            <LeftContainer>
              <IstDiv>
                <img src="/logo.png" alt="" />
              </IstDiv>
              <SecondDiv>
                <HeadingDiv>
                  <Heading> Nov Bahaar</Heading>
                </HeadingDiv>
              </SecondDiv>
            </LeftContainer>
            <RightContainer>
              <ByDiv>
                <By>Developed By</By>
              </ByDiv>
              <ThirdDiv>
                <NameDiv>
                  <Name>
                    <a href="https://www.linkedin.com/in/bisma-manzoor-a5703121a">
                      Bismah Manzoor
                    </a>
                  </Name>
                </NameDiv>
              </ThirdDiv>
              <FourthDiv>
                <AppLink onClick={() => router.replace("/")}>
                  <p>NB.app</p>
                </AppLink>
              </FourthDiv>
              <CoNameDiv>
                {/* <CoName>
                                    Gortnm Innovations Pvt Ltd.
                                </CoName> */}
              </CoNameDiv>

              <YearDiv>
                <Year>@ 2023</Year>
              </YearDiv>
            </RightContainer>
          </InnerContainer>
        </Body>
      </OuterContainer>
    </>
  );
};
export default SmallFooterComponent;
