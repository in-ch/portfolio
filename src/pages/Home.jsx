import { useEffect, useRef, useState } from "react";
import DotRing from "src/components/DotRing/DotRing";
import styled from "styled-components";
import Particle from "src/components/Particle";
import Loading from "src/components/Loading";
import Content1 from "src/components/Contents/Content1";
import Sidebar from "src/components/SideBar/Sidebar";

const Container = styled.div`
    p{
        color:RGB(247,247,247);
    }
    width:100%;
    height:100vh;
    overflow:hidden;
`;
const Section = styled.section`
    width:100%;
    height:100vh;
    overflow:hidden;
`;


const SideBar = styled.div`
    width:100px;
    height:100vh;
    background-color:gray;
    position:fixed;
    top:0px;
    left:0px;
`;



const Home = () => {

    const [slideNum, setSlideNum] = useState(-1);   // 슬라이드 넘버 
    const [eventCheck, setEventCheck] = useState(false);  // 이벤트 실행 조건 (시간)

    const mainRef = useRef(null);   // 메인 슬라이드 위치 
    const homeRef = useRef(null);   // 슬라이드 위치 변수 
    const homeRef2 = useRef(null);   // 슬라이드 위치 변수 

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    const DownEvent = () => {
        console.log("gg");
        if(eventCheck){
            mainRef?.current?.scrollTo({
                top: homeRef2?.current?.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    const UpEvent = () => {
        if(eventCheck){
            mainRef?.current?.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    const scrollEvent = (e) => {
        if(e.deltaY>0){ 
            DownEvent();
        } else {
            UpEvent();
        }
    };

    useEffect(()=>{

        setTimeout(()=>{
            setSlideNum(0);
            setEventCheck(true); // 슬라이드 가능하게끔 바꿔줌. 
        },1600);

    },[]);  // 슬라이드 페이지 시작

    return(
        <Container onWheel={scrollEvent} ref={mainRef}>
            {/* <Loading /> */}
            <DotRing />
            
            <Section>
                <Particle />
                <Content1
                    slideNum={slideNum}
                />
            </Section>
            <Section style={{backgroundColor:"blue"}}>
                <div ref={homeRef2}>
                </div>
            </Section>
            <Sidebar 
                iindex={slideNum}
                setIndex={(number)=>setSlideNum(number)}
            />
        </Container>
    )
};

export default Home;