import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    border:1px solid #000;
    p{
        color:RGB(100,100,100);
    }
`;

interface Props {
    slideNum:number;
}

const Content1 = ({slideNum}:Props) => {

    return (
        <Container>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
            <p>page 1 </p>
        </Container>
    );
};

export default Content1;