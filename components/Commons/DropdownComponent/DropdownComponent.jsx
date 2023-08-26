
import { useState } from "react"
import {
    OuterContainer, MainContainer, Select, Arrow,
    Options, OptionContainer, SelectContainer, OptionsDiv
} from "./DropdownStyle"
import { BiChevronDown } from "react-icons/bi"

const DropdownComponent = (props) => {
    let { className, selectContainer, optionContainer, data, click, selectedOption, setMethod, setCod } = props
    // console.log("value selectedOption==============>>>>>>>>>>", selectedOption)
    const [showOptions, setShowOptions] = useState(false)
    const [chooseOption, setChooseOption] = useState("")
    const [selectActive, setSelectActive] = useState(false)
    const selectHandler = () => {
        if (showOptions) {
            setShowOptions(false)
            // setSelectActive(true)
        }
        else {
            setShowOptions(true)

        }
    }
    const optionHandler = (value) => {
        // console.log("inside otipn handler", value)
        // const value = event.target.textContent;
        // console.log('Value:', value);
        setChooseOption(value)
        setSelectActive(true)
        selectedOption(value)
        setShowOptions(false)
        if (setMethod) {
            setMethod(true)
            setCod(false)
        }

    }
    // console.log("vvvvvvvvvvvvvv", country)
    return (
        <>
            <OuterContainer >
                <MainContainer className={className}>
                    <SelectContainer className={selectContainer}>
                        {
                            !selectActive ?
                                <Select Select > Select</Select>
                                :
                                <Select>{chooseOption}</Select>

                        }
                        {/* <Select>Select</Select> */}
                        {/* <Arrow> */}
                        <BiChevronDown className="arrow" onClick={selectHandler} />
                        {/* </Arrow> */}

                    </SelectContainer>
                    {
                        showOptions
                            ?
                            <>
                                <OptionContainer className={optionContainer}>
                                    <OptionsDiv>
                                        <Options className="choose" active>choose</Options>
                                        {
                                            data.map((e) => {
                                                return <> <div key={e._id}>
                                                    <Options onClick={optionHandler.bind(this, e)}>{e}</Options>
                                                </div >
                                                </>
                                            })
                                        }
                                        {/* <Options onCanPlay={optionContainer}>{data}</Options> */}
                                    </OptionsDiv>
                                </OptionContainer>
                            </>
                            : null
                    }
                </MainContainer>
            </OuterContainer >
        </>
    )
}
export default DropdownComponent