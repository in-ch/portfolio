import { useContext, useEffect, useRef, useState } from "react";
import { overflow } from "src/apollo/client";
import Background from "src/components/Background"
import DotRing from "src/components/DotRing/DotRing";
import Intro from "src/components/Intro";
import Slide from "src/components/Slide/SlideMain";
import SlideText from "src/components/SlideText";
import SmoothScroll from "src/components/SmoothScroll/SmoothScroll";
import { MouseContext } from "src/context/mouse-context";
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
    const [slideNum, setSlideNum] = useState<number>(0);   // 슬라이드 넘버 




    const handleScrollAnimation = (e:any) => {
        setScroll(window.pageYOffset);
        
        if(Number(homeRef?.current?.offsetTop) - Number(80)  < Number(scroll)){
            setIsSlide(true);
            overflow(true);
            setSlideNum(1);
            console.log("t");
        } else {
            setIsSlide(false);

        }
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

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const homeRef = useRef<HTMLDivElement>(null);   // 슬라이드 위치 변수 
    const [isSlide, setIsSlide] = useState<boolean>(false);  // 슬라이드 위치 

    return(
        <Container>
            <Background />
            <DotRing />
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
                <Section>
                    <div ref={homeRef}>
                        <Slide 
                            isSlide={isSlide}
                            slideNum={slideNum}
                        />
                    </div>
                </Section>
        </Container>
    )
};

export default Home;