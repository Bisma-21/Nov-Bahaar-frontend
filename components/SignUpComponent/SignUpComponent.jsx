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
    Hr,
    CircleDiv
} from "./SignUpStyle"
import { useRouter } from "next/router"
import { FcGoogle } from "react-icons/fc"
import { getToken, setToken } from "../../utils/localStorage"
import { useDispatch } from "react-redux"
import { saveUserDetails } from "../../store/action/userAction"
import { toast } from "react-toastify"
import LoaderComponent from "../Commons/LoaderComponent/LoaderComponent"

const SignUpComponent = () => {
    // console.log("tokennnn====", getToken())
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad] = useState(false)
    const [name, setName] = useState("")
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
    const nameHandler = async (e) => {
        console.log("inside name handler")
        setName(e.target.value)
    }
    const signUpHandler = async () => {
        setLoad(true)
        console.log("inside the login  handler", email, password, name)
        const value = { email, password, name }
        const response = await fetch("http://localhost:4000/user/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(value)
        })
        const result = await response.json()
        const object = result.response
        // console.log("signup login==========>", object)
        // console.log("signup login==========>", Object.keys(object).length)

        // if (Object.keys(object).length <= 0) {
        //     setLoad(false)
        //     return toast.warn("Please Fill up the Required Fields!.")
        // }
        if (result.response >= 400) {
            setLoad(false)
            toast.error("Something Went Wrong!.")
        }
        if (result.response = 200) {
            toast.success("User Created Successfully!.")
            router.push("/login")
            setLoad(false)
        }
    }

    return (
        <>
            <OuterContainer>
                <Body>
                    <Container>
                        <Heading>
                            <div className="top-heading ">
                                <h1>SignUp</h1>
                                <p>Enter your Email and Password for SignUp</p>
                            </div>
                        </Heading>
                        <LoginBody>
                            <InputContainer>
                                <label htmlFor="" > Name</label>
                                <input type="name" placeholder="Enter Your Name Here......." onChange={nameHandler} />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="" > Email</label>
                                <input type="email" placeholder="Enter Your Email Here......." onChange={emailHandler} />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="" > Password</label>
                                <input type="password" placeholder="Enter Your Password Here........" onChange={passwordHandler} />
                            </InputContainer>
                        </LoginBody>
                        {/* <DivContainer>
                            <RightDiv>
                                <input type="checkbox" />
                                <Label> Remember me</Label>
                            </RightDiv>
                            <LeftDiv>
                                <Link>Forget Password?</Link>
                            </LeftDiv>
                        </DivContainer> */}
                        <LowerContainer>
                            <SubmitContainer>
                                <button className="submit-button" onClick={signUpHandler}>
                                    {load ?
                                        <LoaderComponent className="loader" />
                                        : "Signup"}
                                </button>
                            </SubmitContainer>
                        </LowerContainer>
                        <Hr />
                        <FooterDiv>
                            <FcGoogle />
                            <Label className="google-signin"> Sign Up with Google</Label>
                        </FooterDiv>
                    </Container>
                    <ImgContainer>
                        <img src="/signup.png" alt="" className="img" />
                    </ImgContainer>
                </Body>
            </OuterContainer>
        </>
    )
}

export default SignUpComponent