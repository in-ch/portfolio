import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div<CardProps>`
    width:100%;
    height:100vh;
    background-color:black;
    position:absolute;
    top:${(props)=>props.slideNum === 1 ? 0 : - window.innerHeight}px;
    left:0px;
    transition: all 1s;
    position:relative;
`;
const Bubble1 = styled.div<BubbleProps>`
    background-color:RGBA(200,200,200,0.3);
    width:500px;
    height:500px;
    border-radius:50%;
    position:absolute;
    bottom:-250px;
    left:${(props)=>props.position ? -250 : -500}px;
    transition:all 0.5s;
    z-index:2;
`;
const Bubble2 = styled.div<BubbleProps>`
    background-color:RGBA(200,200,200,0.3);
    width:300px;
    height:300px;
    border-radius:50%;
    position:absolute;
    top:-150px;
    right:${(props)=>props.position ? -150 : -300}px;
    z-index:2;
    transition:all 0.5s;
`;
const Leather = styled.img`
    width:100%;
    height:100vh;
    position:absolute;
    top:0px;
    z-index:1;
    left:0px;
    opacity:0.6;
`;
// const Pattern = styled.img<BubbleProps>`
//     width:150px;
//     height:300px;
//     background-color:red;
//     position:absolute;
//     top:${(props)=>props.position ? 0 : -300}px;
//     left:0px;
//     opacity:0.7;
// `;



interface Props {
    isSlide:boolean,
    slideNum:number,
}
interface CardProps {
    slideNum:number,
}
interface BubbleProps {
    position:boolean;
}

const Card1 = ({isSlide, slideNum}:Props) => {

    const [bubbleAmi1, setBubbleAmi1] = useState<boolean>(false);
    const [bubbleAmi2, setBubbleAmi2] = useState<boolean>(false);
    const [bubbleAmi3, setBubbleAmi3] = useState<boolean>(false);
    
    useEffect(()=>{
        if(slideNum===1){
            setTimeout(()=>{
                setBubbleAmi1(true);
            },1000);
            setTimeout(()=>{
                setBubbleAmi2(true);
            },1500);
            setTimeout(()=>{
                setBubbleAmi3(true);
            },2000);
        } else {
            setBubbleAmi1(false);
            setBubbleAmi2(false);
            setBubbleAmi3(false);
        }
    },[slideNum]);
    return (
        <Card
            slideNum={slideNum}
        >
            <Bubble1 
                position={bubbleAmi1}
            />
            <Bubble2 
                position={bubbleAmi2}
            />
            {/* <Pattern
                position={bubbleAmi3}
                src={require("../../assets/resource/dark-pattern.jpeg").default}
            /> */}
            {/* <img src={require("../../assets/resource/leather-black-dark-pattern.jpeg").default} /> */}
            <Leather 
                src={require("../../assets/resource/leather-black-dark-pattern.jpeg").default} 
            />
        </Card>
    )
};

export default Card1;