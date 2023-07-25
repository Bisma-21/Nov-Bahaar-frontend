import { OuterContainer, Input, Text } from "./InputStyle"
const InputComponent = (props) => {
    let { placeholder, type, className, change, value, click, checked } = props
    // console.log("insde the inputHandler ", change, value)

    return (
        <>
            <OuterContainer className={className} >
                <Input>
                    <input type={type} placeholder={placeholder} onChange={change} value={value} onClick={click} checked={checked} />
                </Input>
            </OuterContainer>
        </>
    )
}

export default InputComponent