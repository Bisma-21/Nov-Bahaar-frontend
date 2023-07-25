import styled from "styled-components"

const ImageDiv = styled.div`
    /* background-color: green; */
     width: 100vw;
    position: fixed;
    top: 31.5%;
   display: flex;
   justify-content: center;
    img{
    /* border: 2px solid red; */
    width: 60vw;
    height: 68vh;
/* height: 100px; */
    }
`
// const Image = styled.img`
//     border: 2px solid red;
//    src: url("/lock.png");

// `
const LockComponent = () => {
    return (
        <>
            <ImageDiv>
                {/* <Image /> */}
                <img src="/lock.png" alt="" />
            </ImageDiv>
        </>
    )
}
export default LockComponent