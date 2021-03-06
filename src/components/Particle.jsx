import styled from "styled-components";
import Particles from "react-tsparticles";
import TypeAnimation from 'react-type-animation';
import "../assets/font/font.css";
import { useEffect, useState } from "react";

const Container = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    display:${(props)=>props.display ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    margin-top:50px;
    opacity:${(props)=>props.hide ? 0 : 1};
    transition: all 2s;
`;
const Text = styled.p`
    width:300px;
    height:30px;
    font-size:25px;
    text-align:center;
    z-index:2;
    position:relative;
    left:42px;
    font-family:"sf";
    @media (max-width: 520px) {
        left:20px;
    }
`;


const Particle = () => {

    const [size, setSize] = useState(true);
    const [hide, setHide] = useState(false);
    const [display, setDisplay] = useState(true);
    
    const particlesInit = (main) => {
    };

    const particlesLoaded = (container) => {
    };
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { 
          window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(()=>{
        if(window.innerWidth<520){
            setSize(true);
        } else {
            setSize(false);
        }
        setTimeout(() => {
            setHide(true);
        }, 15000);
        setTimeout(() => {
            setDisplay(false);
        },17000);
    },[])
    
    const handleResize = () => {
        if(window.innerWidth<520){
            setSize(true);
        } else {
            setSize(false);
        }
    }

    return (
        <Container 
            hide={hide}
            display={display}
        >
            <Particles id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                    color: { 
                        value: "#043564",
                    },
                    image:"url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
                    position: size ? "120% 40%" : "0% 40%",
                    repeat: "no-repeat",
                    size: size ? "200%" : "60%",
                    opacity:1
                    },
                    backgroundMask:{
                        composite:"destination-out",
                        cover:{
                        color:{
                            value:"#fff",
                            opacity:1,
                        },
                        },
                        enable:false
                    },
                }}
            />
                <Text>
                    <TypeAnimation
                        cursor={true}
                        sequence={[7000,'???????????? ????????? ????????? ??? !!!!', 3000, '???   ???   ???   ???.. ??????']}
                        wrapper="h2"
                    />
                </Text>
        </Container>
    );
};

export default Particle;