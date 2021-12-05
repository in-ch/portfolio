import { useEffect, useState } from "react";
import Background from "src/components/Background"
import Intro from "src/components/Intro";
import SlideText from "src/components/SlideText";
import SmoothScroll from "src/components/SmoothScroll/SmoothScroll";
import styled from "styled-components";

const Container = styled.div`
    p{
        color:white;
    }
`;
const Section = styled.section`
    width:100%;
    height:100vh;
`;
const Home = () => {

    const [scroll,setScroll] = useState<number>(0);
    const handleScrollAnimation = (e:any) => {
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
            {/* <Intro 
                slideData={window.pageYOffset}
            />
            <SlideText 
                slideData={window.pageYOffset}
            />
            <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            <SmoothScroll>
                <Section >
                    <Intro 
                        slideData={window.pageYOffset}
                    />
                </Section>
                <Section >
                    <SlideText 
                        slideData={window.pageYOffset}
                    />
                </Section>
            </SmoothScroll>
        </Container>
    )
};

export default Home;