import { useEffect, useRef, useState } from "react";
import DotRing from "src/components/DotRing/DotRing";
import Slide from "src/components/Slide/Slide1";
import styled from "styled-components";
import Particle from "src/components/Particle";

const Container = styled.div`
    p{
        color:RGB(247,247,247);
    }
    width:100%;
    height:100vh;
    /* overflow:hidden; */
`;
const Section = styled.section`
    width:100%;
    height:100vh;
`;




const Home = () => {

    const [slideNum, setSlideNum] = useState(0);   // 슬라이드 넘버 
    const [eventCheck, setEventCheck] = useState(true);  // 이벤트 실행 조건 (시간)

    const homeRef = useRef(null);   // 슬라이드 위치 변수 
    const homeRef2 = useRef(null);   // 슬라이드 위치 변수 

    useEffect(()=>{
        document.documentElement.scrollTo(0,0);
    },[]);

    const DownEvent = () => {
        console.log(homeRef2.current?.offsetTop);
        if(eventCheck){
            setTimeout(() => {
                setEventCheck(false);
            }, 3000);
            window.scrollTo({
                top: homeRef2.current?.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    const UpEvent = () => {
        console.log("위");
    };
    const scrollEvent = (e) => {
        if(e.deltaY>0){ 
            DownEvent();
        } else {
            UpEvent();
        }
    };

    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };


    return(
        <Container onWheel={scrollEvent}>
            {/* <DotRing /> */}
                <Section>
                  <Particle />
                </Section>
                <Section>
                    <div ref={homeRef2}>
                    </div>
                </Section>
        </Container>
    )
};

export default Home;