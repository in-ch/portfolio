import { useContext, useEffect, useRef, useState } from "react";
import { overflow } from "src/apollo/client";
import DotRing from "src/components/DotRing/DotRing";
import { MouseContext } from "src/context/mouse-context";
import styled from "styled-components";

const Container = styled.div`
    p{
        color:RGB(247,247,247);
    }
`;
const Section = styled.section`
    width:100%;
    height:100vh;
`;
const Button = styled.input`
    background-color:"RGB(250,250,250)";
    width:100px;
    height:100px;
    border-radius:20px;
    box-shadow:"5px 5px 12px 0px RGBA(0,0,0,0.2)";
    border-top:"3px solid RGB(255,255,255,0.8)";
    border-left:"3px solid RGB(255,255,255,0.8)";
`;
const Home = () => {

    const [slideNum, setSlideNum] = useState<number>(0);   // 슬라이드 넘버 



    const handleScrollAnimation = (e:any) => {
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

    useEffect(()=>{
        document.documentElement.scrollTo(0,0);
    },[]);

    return(
        <Container>
            <DotRing />
                <Section>
                    <div ref={homeRef}>
                        {/* <Slide 
                            isSlide={true}
                            slideNum={slideNum}
                        /> */}
                        <Button 
                            type="button"
                        />
                    </div>
                </Section>
        </Container>
    )
};

export default Home;