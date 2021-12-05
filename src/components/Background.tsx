import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:#000;
    position:fixed;
    top:0px;
    left:0px;
    z-index:-1;
`;
const Triangle = styled.div<TriangleProp>`
    width: 0px;
    height: 0px;
    border-top: 30px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 40px solid #2993f6;
    position:absolute;
    top:10%;
    left:3%;
    transition: all ease 500s;
    transform: ${(props)=>props.triangleValue};
`;
const BoxDonut = styled.div<BoxDonutProps>`
    background: radial-gradient(circle, transparent 40%, #6935db 60%);
    height:50px;
    width:50px;
    border-radius:20%;
    position:absolute;
    bottom:10%;
    right:10%;
    transition: all ease 100s;
    transform: ${(props)=>props.boxDonut};
`;
const Donut = styled.div`
    width:100px;
    height:100px;
    border:16px solid #ff3561;
    border-radius:50px;
    position:absolute;
    bottom:20%;
    left:8%;
    animation: motion 10s linear 0s infinite alternate;
    @keyframes motion {
        0% {
            bottom: 10%;
            left:8%;
        }
        30% {
            bottom: 15%;
            left:4%
        }
        60% {
            bottom: 20%;
            left:8%;
        }
        100% {
            bottom: 10%;
            left:8%;
        }
    }
`;
const Donut2 = styled.div<TriangleProp>`
    width:30px;
    height:30px;
    border:6px solid #499689;
    border-radius:50px;
    position:absolute;
    top:10%;
    right:15%;
    animation: motion2 20s linear 0s infinite alternate;
    @keyframes motion2 {
        0% {
            top: 10%;
            right:8%;
        }
        10% {
            top: 15%;
            right:4%
        }
        20% {
            top: 20%;
            right:8%;
        }
        30% {
            top: 25%;
            right:10%;
        }
        40% {
            top: 26%;
            right:12%;
        }
        50% {
            top: 28%;
            right:14%;
        }
        60% {
            top: 26%;
            right:12%;
        }
        70% {
            top: 25%;
            right:10%;
        }
        80% {
            top: 20%;
            right:8%;
        }
        90% {
            top: 15%;
            right:4%
        }
    }
`;
const AsuraBox = styled.div<TriangleProp>`
    background: linear-gradient(90deg, #6935db 50%, #ffffff 50%);
    width:20px;
    height:20px;
    position:absolute;
    top:30%;
    right:40%;
    border-radius:50%;
    transition: all ease 800s;
    transform: ${(props)=>props.triangleValue};
`;
interface TriangleProp{
    triangleValue:string;
};
interface BoxDonutProps {
    boxDonut:string;
};
const Background = () => {
    
    const [triangleValue, setTriangleValue] = useState<number>(0);
    const [boxDonutValue, setBoxDonutValue] = useState<number>(0);

    const TriangleEvent = () => {
        setTriangleValue(8000);
    };
    const BoxDonutEvent = () =>{
        setBoxDonutValue(800);
    };

    useEffect(()=>{
        setTimeout(()=>{
            TriangleEvent();
            BoxDonutEvent();
        },0);
    },[]);
    return(
        <Container>
            <Triangle 
                triangleValue={`rotate( ${triangleValue}deg )`}
            />
            <BoxDonut
                boxDonut={`rotateZ( ${boxDonutValue}deg )`}
            />
            <Donut />
            <Donut2 
                triangleValue={`rotate( ${triangleValue}deg )`}
            />
            <AsuraBox 
                triangleValue={`rotate( -${triangleValue}deg )`}
            />
        </Container>
    )
};

export default Background;