import ButtonComponent from "@/components/Commons/ButtonComponent/ButtonComponent"
import { Body, Container, SubContainer, ButtonContainer, Heading, Icon, Button, OuterConatiner } from "../OrderSuccessfulModal/OrderSuccessModalStyle"
import { AiFillCheckCircle } from "react-icons/ai"
import { useRouter } from "next/router"
const OrderSuccessModal = (props) => {
    let { closeModal } = props
    const router = useRouter()
    const allOrderHandler = () => {
        console.log("allOrderHandler===>")
        closeModal(false)
        // router.push("/allorders")
    }
    console.log("close modal", closeModal)
    return (
        <>
            <OuterConatiner onClick={() => closeModal(false)}>
                <Body onClick={(e) => e.stopPropagation()} >
                    <Container>
                        <SubContainer>
                            <Icon><AiFillCheckCircle /></Icon>
                            <Heading> Your order has been Placed Successfully</Heading>
                        </SubContainer>
                        <ButtonContainer>
                            <Button>
                                <ButtonComponent title="Done" className="done-btn" click={allOrderHandler} />
                            </Button>
                        </ButtonContainer>
                    </Container>
                </Body>
            </OuterConatiner>
        </>
    )
}
export default OrderSuccessModal