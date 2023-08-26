import { useEffect, useState } from "react"
import {
    Container,
    InputContainer,
    LowerContainer,
    LoginBody,
    OuterContainer,
    SubmitContainer,
    Body,
    ImgContainer,
    Heading,
    DivContainer,
    RightDiv,
    Label,
    LeftDiv,
    Link,
    FooterDiv,
    Hr
} from "./LoginStyle"
import { FcGoogle } from "react-icons/fc"
import { getToken, setToken } from "../../utils/localStorage"
import { useDispatch } from "react-redux"
import { saveUserDetails } from "../../store/action/userAction"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
const LoginComponent = () => {
    // console.log("tokennnn====", getToken())
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const router = useRouter()
    const emailHandler = async (e) => {
        console.log("inside the email handler")
        setEmail(e.target.value)

    }
    const passwordHandler = async (e) => {
        console.log("inside the password handler")
        setPassword(e.target.value)
    }
    const loginHandler = async () => {
        console.log("inside the login  handler", email, password)
        const value = { email, password }
        const response = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(value)
        })
        const result = await response.json()
        if (response.status >= 400) {
            toast.error("Something Went Wrong!.")
        }
        const token = result?.response?.token
        console.log("xxxxxxxxxxxxxxxxx", token)
        setToken(token)
        // localStorage.setItem("ecommerceLoginToken", token)
        console.log("resulttttt==", result.response)
        dispatch(saveUserDetails(result.response))
        if (response.status == 200) {
            toast.success("Successfully Log-in!.")
            router.push("/home")
        }
    }
    return (
        <>
            <OuterContainer>
                <Body>
                    <ImgContainer>
                        <img src="/login2.png" alt="" className="img" />
                    </ImgContainer>
                    <Container>
                        <Heading>
                            <div className="top-heading ">
                                <h1>Login</h1>
                                <p>Enter your Email and Password for Login</p>
                            </div>
                        </Heading>
                        <LoginBody>
                            <InputContainer>
                                <label htmlFor="" > Email</label>
                                <input type="email" placeholder="Enter Your Email Here......." onChange={emailHandler} />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="" > Password</label>
                                <input type="password" placeholder="Enter Your Password Here........" onChange={passwordHandler} />
                            </InputContainer>
                        </LoginBody>
                        <DivContainer>
                            <RightDiv>
                                <input type="checkbox" />
                                <Label> Remember me</Label>
                            </RightDiv>
                            <LeftDiv>
                                {/* <Link>Forget Password?</Link> */}
                            </LeftDiv>
                        </DivContainer>
                        <LowerContainer>
                            <SubmitContainer>
                                <button className="submit-button" onClick={loginHandler}> Login</button>
                            </SubmitContainer>
                        </LowerContainer>
                        {/* <Hr />
                        <FooterDiv>
                            <FcGoogle />
                            <Label className="google-signin"> Sign in with Google</Label>
                        </FooterDiv> */}
                    </Container>
                </Body>
            </OuterContainer>
        </>
    )
}

export default LoginComponent