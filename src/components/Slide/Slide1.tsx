import styled from "styled-components";
import BButton from "../BButton";

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:RGB(240,240,240);
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
            <BButton />
        </Container>
    );
}

export default Slide;