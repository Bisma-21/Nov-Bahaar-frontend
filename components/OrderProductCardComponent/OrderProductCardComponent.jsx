import {
    OuterContainer, MainContainer,
    LeftContainer, RightContainer,
    DetailContainer, NameDiv, Name, PriceQuantityDiv,
    Price, Quantity, Star
} from "./OrderProductCardStyle"
import { useSelector } from "react-redux"

const OrderProductCardComponent = (props) => {
    let { className } = props
    const cart = useSelector((state) => state.cart.cartDetails)
    // console.log("order==========>>>>=========", cart)
    return (
        <>
            <OuterContainer>
                <div>
                    {
                        cart?.products?.map((e) => {
                            // console.log("eeeeeeeeeeee", e.pId)
                            return <MainContainer className={className} key={e.pId._id}>
                                <LeftContainer>
                                    <img src={e.pId.images[0]} alt="" />
                                </LeftContainer>
                                <RightContainer>
                                    <DetailContainer>
                                        <NameDiv>
                                            <Name>{e.pId.title}</Name>
                                        </NameDiv>
                                        <PriceQuantityDiv>
                                            <Price> ₹{e.pId.price} </Price>
                                            <Star> x</Star>
                                            {
                                                e.quantity < 9
                                                    ?
                                                    <Quantity>0{e.quantity}</Quantity>

                                                    :
                                                    <Quantity>{e.quantity}</Quantity>
                                            }
                                        </PriceQuantityDiv>
                                    </DetailContainer>
                                </RightContainer>
                            </MainContainer>

                        })
                    }
                </div>
            </OuterContainer>
        </>
    )
}

export default OrderProductCardComponent