import styled from "styled-components";
import Particles from "react-tsparticles";
import TypeAnimation from 'react-type-animation';
import "../assets/font/font.css";

const Container = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:50px;
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
`;

const Particle = () => {

    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    
    return (
        <Container>
            <Particles id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                    color: {
                        value: "#043564",
                    },
                    image:"url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
                    // position:"120% 40%",
                    position:"0% 40%",
                    repeat: "no-repeat",
                    size:"200%",
                    size:"60%",
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
                        sequence={['인쵸리는 오늘도 달리는 중 ...!!', 4000, '늘.. 열.. 심.. 히.. ㅋㅋ']}
                        wrapper="h2"
                    />
                </Text>
        </Container>
    );
};

export default Particle;