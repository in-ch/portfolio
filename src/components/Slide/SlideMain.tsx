import styled from "styled-components";
import Card1 from "./Card1";

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:white;
    position:relative;
    overflow:hidden;
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
                isSlide={isSlide}
            />
        </Container>
    );
}

export default Slide;