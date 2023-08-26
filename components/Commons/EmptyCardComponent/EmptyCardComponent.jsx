import SmallFooterComponent from "@/components/SmallFooterComponent/SmallFooterComponent"
import {
    OuterContainer,
    InnerContainer,
    Body,
    HeadingDiv,
    IconDiv,
    Heading,
    SubHeading,
} from "./EmptyCardStyle"
import { AiOutlineDown } from "react-icons/ai"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

const EmptyCardComponent = (props) => {
    let { title, subHeading, icon } = props
    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    <Body>
                        <HeadingDiv>
                            <Heading>{title}</Heading>
                            <SubHeading>{subHeading}</SubHeading>
                        </HeadingDiv>
                        <IconDiv>
                            <AiOutlineDown />
                            {icon}
                            {/* <BsFillBookmarkHeartFill className="click" /> */}
                        </IconDiv>
                    </Body>
                </InnerContainer>
            </OuterContainer>
            {/* <SmallFooterComponent /> */}
        </>
    )
}
export default EmptyCardComponent