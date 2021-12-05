import Background from "src/components/Background"
import Intro from "src/components/Intro";
import styled from "styled-components";

const Container = styled.div`
    p{
        color:white;
    }
`;

const Home = () => {

    return(
        <Container>
            <Background />
            <Intro />
            <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Container>
    )
};

export default Home;