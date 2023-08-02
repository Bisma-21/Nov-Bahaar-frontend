import { useEffect, useState } from "react"
import {
    OuterContainer, Container,
    CartContainer, CartBody,
    ImageConatiner, ProductDetailContainer, TotalPriceContainer,
    Title, Price, CounterContainer, CounterBody,
    DecrementContainer, Minus, Number, Plus,
    TotalPriceDiv, TotalPrice,
    SaveDiv, DeleteDiv, ButtonDiv, Save, Delete, InStock, InstockDiv,
    DeliveryContainer, DeliveryBody, DeliveryDiv,
    Delivery, DeliveryType, FreeDiv, ExpressDiv,
    Free, Express, DeliveryDateDiv, DeliveryDate, Date, PromoCodeContainer,
    PromoCodeDiv, Input, GrandTotalContainer, GrandTotal, GrandTotalPrice,
    ButtonContainer, SubContainer, Heading, Head, Body, EmptyCartContainer,
    ButtonCon, Text, IconDiv, TextDiv
} from "./CartStyle"
import { MdDelete } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import ButtonComponent from "../Commons/ButtonComponent/ButtonComponent"
import { useDispatch, useSelector } from "react-redux"
import { getToken } from "@/utils/localStorage"
import { getCartOfSingleUserAction } from "../../store/action/cartAction"
import { incrementCartProductOfAUserAction, decrementCartProductOfAUserAction } from "../../store/action/cartAction"
import { useRouter } from "next/router"
import { AiOutlineDown } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs"
import { removeProductFromCartAction } from "../../store/action/cartAction"
import { toast } from "react-toastify"
import EmptyCardComponent from "../Commons/EmptyCardComponent/EmptyCardComponent"
import LoaderComponent from "../Commons/LoaderComponent/LoaderComponent"
import ProtectRouteComponent from "../ProtectRouteComponent/ProtectRouteComponent"
const CartComponent = () => {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    // const [grandTotal, setGrandTotal] = useState(0)
    const dispatch = useDispatch()
    const router = useRouter()
    // console.log("88888888888888888888888============", grandTotal)
    const selector = useSelector((state) => state.cart)
    // console.log("selector =========<<<<<<>>>>>>>>>>>>>>>", selector)
    const data = Object.keys(selector)
    // console.log("iiiiiii", data)
    let productInCart = {}
    if (data.length >= 1) {
        productInCart = selector.cartDetails
    }
    // console.log("2222222222222========", productInCart)
    let grandTotal = 0
    productInCart?.products?.map((e) => {
        grandTotal = grandTotal + e.quantity * e?.pId?.price

    })
    // console.log("ttttttttttttttttttt", grandTotal)
    useEffect(() => {
        // console.log("inside the my cart use efffect")
        const fun = async () => {
            setLoading(true)
            const response = await fetch("https://novbahaar-backend.onrender.com/cart/my", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "x-access-token": getToken()
                },
            })
            const result = await response.json()
            // console.log("resultt============>", result)
            dispatch(getCartOfSingleUserAction(result.response))
            setLoading(false)
        }
        fun()
    }, [])
    const minusHandler = async (id, q) => {
        // const data = count - 1
        // setCount(data)

        // console.log("minus Handler", q, id)
        const response = await fetch("https://novbahaar-backend.onrender.com/cart/decrease-quantity", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "x-access-token": getToken()
            },
            body: JSON.stringify({ pId: id })

        })
        const result = await response.json()
        // console.log("decrement console================> ", result.response.products)
        dispatch(decrementCartProductOfAUserAction(result.response.products, id))


    }
    const plusHandler = async (id) => {
        const data = count + 1
        setCount(data)
        // console.log("plus Handler", data, id)
        const response = await fetch("https://novbahaar-backend.onrender.com/cart/increase-quantity", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "x-access-token": getToken()
            },
            body: JSON.stringify({ pId: id })

        })
        const result = await response.json()
        // console.log("increment console================> ", result.message.products)
        dispatch(incrementCartProductOfAUserAction(result.message.products, id))
    }
    const checkoutHandler = () => {
        // console.log("checkoutHandler")
        setLoading(true)
        toast.success("checkout successfullt done!.")
        setLoading(false)
        router.push("/order")
    }
    const homeHandler = () => {
        // console.log("homeHandler")
        router.push("/home")
    }
    const removeProductFromCartHandler = async (id) => {
        // console.log("removeProductFromCartHandler", id)

        try {

            const response = await fetch("https://novbahaar-backend.onrender.com/cart/remove-item", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "x-access-token": getToken()
                },
                body: JSON.stringify({ productId: id })
            })
            if (response.status >= 400) {
                return toast.error("Something Went Wrong!.")
            }
            const result = await response.json()
            // console.log("/remove-from-cart====>", result)
            dispatch(removeProductFromCartAction(result.response))
            toast.success("Product Removed From Cart!.")
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <>
            <OuterContainer>
                {
                    !selector.cartDetails || !selector.cartDetails?.products?.length
                        ?
                        <></>
                        :
                        <Heading>
                            <Head>Cart Products</Head>
                        </Heading>
                }
                {loading ? <LoaderComponent className="loader" /> : null}
                {
                    !selector.cartDetails || !selector.cartDetails?.products?.length && !loading
                        ?
                        <EmptyCardComponent title="Your Cart is Empty"
                            subHeading="Please Fill Your Cart with Happiness."
                            icon={<BsCartPlus />}
                        />
                        :
                        <Body>
                            <Container>
                                {
                                    productInCart?.products?.map((e) => {
                                        // console.log("eeeeeeeeeeeeeee", e)
                                        return e ?
                                            // <>
                                            // </>
                                            <CartContainer key={e.pId?._id}>
                                                <ImageConatiner>
                                                    <img src={e.pId?.images[0]} alt="" />
                                                </ImageConatiner>
                                                <CartBody>
                                                    <ProductDetailContainer>
                                                        <Title> {e?.pId?.title}</Title>
                                                        <TotalPrice>
                                                            ₹{e.quantity * e.pId?.price}
                                                        </TotalPrice>
                                                    </ProductDetailContainer>
                                                    <TotalPriceContainer>
                                                        <Price> ₹{e.pId?.price}</Price>
                                                        <InstockDiv>
                                                            <InStock>Instock</InStock>
                                                        </InstockDiv>
                                                    </TotalPriceContainer>
                                                    <ButtonDiv>
                                                        <CounterContainer>
                                                            <CounterBody>
                                                                <DecrementContainer>
                                                                    {
                                                                        e.quantity > 1
                                                                            ?
                                                                            <ButtonComponent title="-" className="minus"
                                                                                click={minusHandler.bind(this, e.pId?._id, e.quantity)} />
                                                                            :
                                                                            <ButtonComponent title="-" className="disable" disabled={true}
                                                                                click={minusHandler.bind(this, e.pId?._id, e.quantity)} />
                                                                    }
                                                                    {/* <ButtonComponent title="-" className="minus"
                                                            click={minusHandler.bind(this, e.pId._id, e.quantity)} /> */}
                                                                    {/* <Minus onClick={minusHandler.bind(this, e.pId._id)}>-</Minus> */}
                                                                    <Number>{e.quantity}</Number>
                                                                    <ButtonComponent title="+" className="plus"
                                                                        click={plusHandler.bind(this, e.pId?._id)} />
                                                                    {/* <Plus onClick={plusHandler.bind(this, e.pId._id)}>+</Plus> */}
                                                                </DecrementContainer>
                                                            </CounterBody>
                                                        </CounterContainer>
                                                        {/* <SaveDiv>
                                                    <AiFillHeart className="save-icon" />
                                                    <Save>Save</Save>
                                                </SaveDiv> */}
                                                        <DeleteDiv onClick={removeProductFromCartHandler.bind(this, e.pId?._id)}>
                                                            <MdDelete className="del-icon" />
                                                            <ButtonComponent title="Delete" className="del-btn" />
                                                        </DeleteDiv>
                                                    </ButtonDiv>
                                                </CartBody>
                                            </CartContainer>
                                            : null
                                    })
                                }
                            </Container>
                            <SubContainer>
                                <DeliveryContainer>
                                    <DeliveryBody>
                                        <DeliveryDiv>
                                            <Delivery> Delivery</Delivery>
                                            <DeliveryType>
                                                <FreeDiv>
                                                    <Free> Free</Free>
                                                </FreeDiv>
                                                <ExpressDiv>
                                                    <Express> Express</Express>
                                                </ExpressDiv>
                                            </DeliveryType>
                                        </DeliveryDiv>
                                        <DeliveryDateDiv>
                                            <DeliveryDate> Delivery date:</DeliveryDate>
                                            <Date>Jan 24</Date>
                                        </DeliveryDateDiv>
                                        <GrandTotalContainer>
                                            <GrandTotal> Grand Total</GrandTotal>
                                            <GrandTotalPrice>₹{grandTotal}</GrandTotalPrice>
                                        </GrandTotalContainer>
                                        <ButtonContainer>

                                            <ButtonComponent title={loading? <LoaderComponent className="checkout-loader"/>:"Checkout"} className="checkout-btn" click={checkoutHandler} />
                                            {/* <ButtonComponent title="Proceed" className="proceed-btn" /> */}
                                        </ButtonContainer>
                                    </DeliveryBody>
                                </DeliveryContainer>
                            </SubContainer>
                        </Body>
                }


            </OuterContainer >
        </>
    )
}
// export default CartComponent
export default ProtectRouteComponent(CartComponent)