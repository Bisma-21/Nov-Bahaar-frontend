import {
    Header, MiddleDiv, RightDiv, LeftDiv, Label, MainBody,
    IconDiv, Circle, Icon, HeartDiv, LogoutDiv, ImageDiv
} from "./NavbarStyle"
import { BsSearch } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { GrFacebookOption } from "react-icons/gr"
import { BsPinterest } from "react-icons/bs"
import ButtonComponent from "../Commons/ButtonComponent/ButtonComponent"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { HiShoppingCart } from "react-icons/hi"
import { AiTwotoneHeart } from "react-icons/ai"
import { RiLogoutBoxRFill } from "react-icons/ri"
import { removeToken } from "../../utils/localStorage"
import { saveUserDetails } from "../../store/action/userAction"
import { toast } from "react-toastify"
const NavbarComponent = (props) => {
    // console.log("remove tokenn===", removeToken())
    const router = useRouter()
    const dispatch = useDispatch()
    const userSelector = useSelector((state) => state.whishlist.whishlistDetails)
    // console.log("YYYYYYY", userSelector)
    // console.log("XXXXXX", userSelector?.length)
    const whishlistCount = userSelector?.length
    // console.log("wishlist count==", whishlistCount)
    const selector = useSelector((state) => state.cart.cartDetails)
    // console.log("yyyyyy", selector)
    const user = useSelector((state) => state.users.userDetail)
    // console.log("55555555555", user)
    // const cartRedux = useSelector((state) => state.users.userDetail.userCart.products)
    // console.log("7777777777777", selector.products?.length)
    // const t = cartRedux.map((e, index) => {
    //     return index
    // })
    // console.log("4444444444444", cartRedux.length)
    const userArray = Object?.keys(user)
    let checkArrayLength = userArray.length
    // console.log("navrbar selector=========>", checkArrayLength)

    const loginHandler = () => {
        router.push("/login")
    }
    const signupHandler = () => {
        // console.log("inside signup handler")
        router.push("/signup")
    }
    const cartHandler = () => {
        router.push("/cart")
    }
    const whishlistHandler = () => {
        router.push("/whishlist")
    }
    const logoutHandler = (e) => {
        console.log("logoutHandler===", e)
        removeToken()
        router.push("/login")
        toast.error("Logout Successfully!.")
        dispatch(saveUserDetails())

    }
    const homeHandler = () => {
        console.log("homeHandler")
        router.push("/home")
    }
    return (
        <>
            <Header>
                <LeftDiv>
                    <ImageDiv>
                        <img src="/logo.png" alt="" onClick={homeHandler} />
                    </ImageDiv>
                    {/* <BsSearch className="icon" />
                    <FaInstagram className="icon" />
                    <GrFacebookOption className="icon" />
                    <BsPinterest className="icon" /> */}
                </LeftDiv>
                <MiddleDiv>
                    {/* <Label>HOME</Label>
                    <Label>DAILY LOOKS</Label>
                    <Label>SUMMER CAPSULE</Label>
                    <Label>SPRING/SUMMER FASHION</Label>
                    <Label>TRY-ON HAULS</Label>
                    <Label>BEAUTY</Label> */}
                </MiddleDiv>
                <RightDiv>

                    {/* <ButtonComponent title="Login" className="login-btn" click={loginHandler} />
                    <ButtonComponent title="Signup" className="signup-btn" click={signupHandler} /> */}
                    {
                        checkArrayLength == 0
                            ?
                            <> <ButtonComponent title="Login" className="login-btn" click={loginHandler} />
                                <ButtonComponent title="Signup" className="signup-btn" click={signupHandler} />
                            </>
                            :
                            <>
                                <HeartDiv onClick={whishlistHandler}>
                                    <AiTwotoneHeart className="heart-icon" />
                                    <Circle>
                                        {
                                            whishlistCount?.length
                                                ?
                                                <h2>0</h2>
                                                :
                                                <h2>{whishlistCount}</h2>

                                        }
                                        {/* <h2>{whishlistCount}</h2> */}
                                    </Circle>
                                </HeartDiv>
                                <IconDiv onClick={cartHandler}>

                                    {/* <Icon>  */}
                                    <HiShoppingCart className="icon" />
                                    {/* </Icon> */}

                                    <Circle >
                                        {
                                            !selector?.products?.length
                                                ?
                                                <h2>0</h2>
                                                :
                                                <h2>{selector?.products?.length}</h2>
                                        }
                                        {/* <h2>{selector?.products?.length}</h2> */}
                                    </Circle>

                                </IconDiv>
                                <LogoutDiv onClick={logoutHandler}>
                                    <RiLogoutBoxRFill className="logout" />
                                </LogoutDiv>

                            </>
                    }

                </RightDiv>
            </Header>
            {/* <MainBody>
                {props.children}
            </MainBody> */}
        </>
    )
}

export default NavbarComponent;