import { useEffect, useState } from "react";
import Background from "src/components/Background"
import Intro from "src/components/Intro";
import SlideText from "src/components/SlideText";
import styled from "styled-components";

const Container = styled.div`
    p{
        color:white;
    }
`;

const Home = () => {

    const [scroll,setScroll] = useState<number>(0);
    const handleScrollAnimation = (e:any) => {
        console.log(window.pageYOffset);
        setScroll(window.pageYOffset);
    }
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            handleScrollAnimation(e);
        });
        
        return () => {
            window.removeEventListener('scroll', (e) => {
                handleScrollAnimation(e);
            });
        };
    });

    return(
        <Container>
            <Background />
            <Intro 
                slideData={window.pageYOffset}
            />
            <SlideText 
                slideData={window.pageYOffset}
            />
            <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Container>
    )
};

export default Home;