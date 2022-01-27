import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:white;
    position:relative;
    overflow:hidden;
`;
const Card1 = styled.div<CardProps>`
    width:100%;
    height:100vh;
    background-color:red;
    position:absolute;
    top:${(props)=>props.slideNum === 1 ? 0 : - window.innerHeight}px;
    left:0px;
    transition: all 1s;
`;
const Card2 = styled.div<CardProps>`
    width:100%;
    height:100vh;
    background-color:yellow;
    position:absolute;
    top:${(props)=>props.slideNum === 1 ? 0 : 0}px;
    left:0px;
`;
interface Props {
    isSlide:boolean,
    slideNum:number,
}
interface CardProps {
    slideNum:number,
}

const Slide = ({isSlide,slideNum}:Props) => {
    
    return (
        <Container>
            <Card1
                slideNum={slideNum}
            >
            </Card1>
            {/* <Card2>
            </Card2> */}
        </Container>
    );
}

export default Slide;