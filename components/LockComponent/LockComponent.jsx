import styled from "styled-components"

const ImageDiv = styled.div`
    //  background-color: green; 
     width: 100vw;
    position: fixed;
    top: 24.5%;
   display: flex;
   justify-content: center;
    img{
    // border: 2px solid red;
    width: 50vw;
    // height: 68vh;
 height: 53.5vh;
    }
`
const Container = styled.div`
// border:2px solid red;
height: 53.5vh;
`
// const Image = styled.img`
//     border: 2px solid red;
//    src: url("/lock.png");

// `
const LockComponent = () => {
    return (
        <>
           <Container>
           <ImageDiv>
                {/* <Image /> */}
                <img src="/lock.png" alt="" />
            </ImageDiv>
           </Container>
        </>
    )
}
export default LockComponent