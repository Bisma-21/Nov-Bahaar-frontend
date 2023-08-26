
// import ButtonComponent from "@/components/Commons/ButtonComponent/ButtonComponent"
import {
    Body, Container, SubContainer, ButtonContainer,
    Heading, Icon, Button, OuterConatiner, InputContainer
} from "./PaymentModelStyle"
import { AiFillCheckCircle } from "react-icons/ai"
import { useRouter } from "next/router"
import ButtonComponent from "@/components/Commons/ButtonComponent/ButtonComponent";
import axios from 'axios';
import { useState } from "react";
const PaymentModalComponent = (props) => {
    let { closeModal, name } = props
    const router = useRouter()
    // const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    // const [is , det]= useState
    const allOrderHandler = () => {
        console.log("allOrderHandler===>")
        closeModal(false)
        // router.push("/allorders")
    }
    const cardHandler = (e) => {
        console.log(e.target.value)
        setCardNumber(e.target.value)
    }

    const expiryHandler = (e) => {
        console.log(e.target.value)
        setExpiry(e.target.value)
    }
    const cvvHandler = (e) => {
        console.log(e.target.value)
        setCvv(e.target.value)
    }

    const handlePayment = async () => {
        try {
            console.log("inside handle payment")
            const response = await fetch("http://localhost:4000/order/create-payment", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, expiry, cvv, cardNumber })
            })
            // braincav 
            console.log(response)
            const result = await response.json()
            console.log(result)
            // if (response.data.success) {
            //     // Payment successful, update UI accordingly
            // } else {
            //     // Payment failed, show error message
            // }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle error scenario
        }
    };

    // console.log("close modal", closeModal)
    return (
        <>
            <OuterConatiner onClick={() => closeModal(false)}>
                <Body onClick={(e) => e.stopPropagation()} >
                    <Container>
                        <SubContainer>
                            {/* <Icon><AiFillCheckCircle /></Icon> */}
                            <Heading> Make Your Payment</Heading>
                        </SubContainer>
                        <InputContainer>
                            <label htmlFor="">Name</label>
                            <input type="text" value={name} />
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="">Card No.</label>
                            <input type="text" placeholder="XXXX XXXX XXXX 1234" onChange={cardHandler} value={cardNumber} />
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="">Expiry</label>
                            <input type="text" placeholder="09/25" onChange={expiryHandler} />
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="">CVV/CVC</label>
                            <input type="text" placeholder="XX2" onChange={cvvHandler} />
                        </InputContainer>
                        <ButtonContainer>
                            <Button>
                                {/* <ButtonComponent/> */}
                                <ButtonComponent title="Done" className="cancel-btn" click={handlePayment} />
                                <ButtonComponent title="Cancel" className="done-btn" click={allOrderHandler} />
                            </Button>
                        </ButtonContainer>
                    </Container>
                </Body>
            </OuterConatiner>
        </>
    );
};
export default PaymentModalComponent;