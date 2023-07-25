import { useEffect, useState } from "react"
import {
    OuterContainer, Container,
    CartContainer, CartBody,
    ImageConatiner, ProductDetailContainer, TotalPriceContainer,
    Title, Price, Heading, Head, Body, AddToCartDiv, InstockDiv, InStock, ButtonDiv, DeleteDiv
} from "./WhishlistStyle"
import { MdDelete } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import ButtonComponent from "../Commons/ButtonComponent/ButtonComponent"
import { useDispatch, useSelector } from "react-redux"
import { getToken } from "@/utils/localStorage"
import { getCartOfSingleUserAction, saveProductToAddToCartAction } from "../../store/action/cartAction"
import { incrementCartProductOfAUserAction, decrementCartProductOfAUserAction } from "../../store/action/cartAction"
import { useRouter } from "next/router"
import { BsFillCartPlusFill } from "react-icons/bs"
import { addProductInWhishlistAction, removeProductFromWhishlistAction } from "../../store/action/whishlistAction"
import { toast } from "react-toastify"
import EmptyCardComponent from "../Commons/EmptyCardComponent/EmptyCardComponent"
import { BsFillBookmarkHeartFill } from "react-icons/bs"

const WhishlistComponent = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const selector = useSelector((state) => state.whishlist.whishlistDetails)
    console.log("selector =========<<<<<<>>>>>>>>>>>>>>>", selector)
    const removeProductHandler = async (id) => {
        console.log("removeProductHandler==", id)
        try {
            const response = await fetch("http://localhost:4000/whishlist/remove-product", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "x-access-token": getToken()
                },
                body: JSON.stringify({ productId: id })
            })
            if (response.status >= 400) {
                return
            }
            const result = await response.json()
            console.log("DELETE whishlist list====", result.response)
            dispatch(removeProductFromWhishlistAction(result.response))
        } catch (error) {
            console.log({ error })
        }
    }
    const addProductHandler = async (id) => {
        console.log("addProductHandler==", id)
        try {
            const response = await fetch("http://localhost:4000/cart/to-add", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "x-access-token": getToken()
                },
                body: JSON.stringify({ productId: id })
            })
            const result = await response.json()
            if (response.status >= 400) {
                return toast.error("Product is Already in Cart!.")
            }
            console.log("add to cart result====>", result)
            dispatch(saveProductToAddToCartAction(result.response))
            toast.success("Product Added In Cart!.")
            removeProductHandler(id)
            // router.push("/cart")
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <>
            <OuterContainer>
                {
                    !selector.length
                        ?
                        <EmptyCardComponent title="Your Whishlist is Empty"
                            subHeading="Please Fill Your Whishlist with Happiness."
                            icon={<BsFillBookmarkHeartFill />}
                        />
                        :
                        <>
                            <Heading>
                                <Head>Whishlist Products</Head>
                            </Heading>
                            <Body>
                                <Container>
                                    {
                                        selector?.map((e) => {
                                            // console.log("eeeeeeeeeeeeeee", e)
                                            return e ?
                                                <CartContainer key={e.pId._id}>
                                                    <ImageConatiner>
                                                        <img src={e.pId.images[0]} alt="" />
                                                    </ImageConatiner>
                                                    <CartBody>
                                                        <ProductDetailContainer>
                                                            <Title> {e.pId.title}</Title>

                                                            <InstockDiv>
                                                                <InStock>Instock</InStock>
                                                            </InstockDiv>

                                                        </ProductDetailContainer>
                                                        <TotalPriceContainer>

                                                            <Price> ₹{e.pId.price}</Price>
                                                        </TotalPriceContainer>
                                                        <ButtonDiv>
                                                            <DeleteDiv onClick={removeProductHandler.bind(this, e.pId._id)} >
                                                                <MdDelete className="del-icon" />
                                                                <ButtonComponent title="Delete" className="del-btn" />
                                                            </DeleteDiv>
                                                            <AddToCartDiv onClick={addProductHandler.bind(this, e.pId._id)} >
                                                                <BsFillCartPlusFill className="cart" />
                                                                <ButtonComponent title="Cart" className="cart-btn" />
                                                            </AddToCartDiv>
                                                        </ButtonDiv>
                                                    </CartBody>
                                                </CartContainer>
                                                : null
                                        })
                                    }
                                </Container>
                            </Body>
                        </>
                }

            </OuterContainer >
        </>
    )
}
export default WhishlistComponent