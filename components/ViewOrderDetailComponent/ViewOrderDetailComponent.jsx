import {
    InnerContainer, OuterContainer,
    LeftContainer, RightContainer,
    OrderIdDiv, Order, OrderId,
    DeliveryStatusDiv, DeliveryStatus, Status,
    ProductNameDiv, ProductName, PName,
    ProductPriceDiv, ProductPrice, PPrice,
    QuantityDiv, Quantity, QNumber,
    TotalPriceDiv, TotalPrice, TPNumber,
    AddressDiv, Address, ShippingAddress,
    PaymentMethodDiv, PaymentMethod, PMType,
    Body, DateDiv, Date, OrderBy, Heading, Head, Main
} from "./ViewOrderDetailStyle"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveOrderByIdOfAUserAction } from "../../store/action/orderAction"
import { AddressParser } from "../../utils/addressParse"
import { DateParser } from "../../utils/dateParser"
const ViewOrderDetailComponent = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    // console.log("nnnnnn", router)
    const order = useSelector((state) => state.order.orderDetail)
    let totalProducts = 0

    const data = order.map((e) => {
        e.products.map((f) => {
            return totalProducts = f.quantity + totalProducts
        })
    })
    console.log("9999999999999", data)
    const orderId = router.query['id']
    useEffect(() => {
        if (router.isReady) {
            fetch(`http://localhost:4000/order/` + orderId, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((result) => dispatch(saveOrderByIdOfAUserAction(result.response)))
                .catch((error) => console.log({ error }))
        }
    }, [orderId])
    return (
        <>
            <Main>
                <OuterContainer>
                    <Heading>
                        <Head>Order Details</Head>
                    </Heading>
                    <InnerContainer>
                        {
                            order.map((e) => {
                                return <Body key={e._id}>
                                    <LeftContainer>
                                        <OrderIdDiv>
                                            <Order>Order Id</Order>
                                            <OrderId>{e._id}</OrderId>
                                        </OrderIdDiv>
                                        <ProductNameDiv>
                                            <ProductName>Product Type</ProductName>
                                            {
                                                e.products.length <= 9
                                                    ?
                                                    <PName> 0{e.products.length}</PName>
                                                    :
                                                    <PName> {e.products.length}</PName>

                                            }
                                            {/* <PName> {e.products.length}</PName> */}
                                        </ProductNameDiv>

                                        <PaymentMethodDiv>
                                            <PaymentMethod>Payment Method</PaymentMethod>
                                            <PMType>{e.paymentMethod}</PMType>
                                        </PaymentMethodDiv>
                                        <DateDiv>
                                            <OrderBy>Order By</OrderBy>
                                            <Date>{DateParser(e.createdAt)}</Date>
                                        </DateDiv>
                                    </LeftContainer>
                                    <RightContainer>
                                        <DeliveryStatusDiv>
                                            <DeliveryStatus> Delivery Status</DeliveryStatus>
                                            <Status> {e.deliveryStatus}</Status>
                                        </DeliveryStatusDiv>
                                        {/* <ProductPriceDiv>
                                        <ProductPrice> Product Price</ProductPrice>
                                        <PPrice> ₹{e.products[0].pId.price}</PPrice>
                                    </ProductPriceDiv> */}
                                        <QuantityDiv>
                                            <Quantity>Total Products</Quantity>
                                            {
                                                totalProducts <= 9
                                                    ?
                                                    <QNumber>0{totalProducts}</QNumber>
                                                    : <QNumber>{totalProducts}</QNumber>
                                            }
                                            {/* <QNumber>0{e.products[0].quantity}</QNumber> */}
                                        </QuantityDiv>
                                        <TotalPriceDiv>
                                            <TotalPrice>Total Price</TotalPrice>
                                            <TPNumber>₹{e.totalAmount}</TPNumber>
                                        </TotalPriceDiv>
                                        <AddressDiv>
                                            <ShippingAddress> Address</ShippingAddress>
                                            <Address>{AddressParser(e.address)}</Address>
                                        </AddressDiv>

                                    </RightContainer>
                                </Body>
                            })
                        }
                    </InnerContainer>
                </OuterContainer>
            </Main>
        </>
    )
}
export default ViewOrderDetailComponent