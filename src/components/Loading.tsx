import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div<Props>`
    width:100%;
    height:100vh;
    background-color:#000;
    position:fixed;
    top:0px;
    left:0px;
    z-index:3;
    opacity:${(props)=>props.opacity ? 1 : 0};
    display:${(props)=>props.display ?  'block': 'none'};
    transition: opacity 3s;
`;
const LoadingView = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

interface Props {
    display:boolean;
    opacity:boolean;
};

const Loading = () => {

    const [display, setDisplay] = useState<boolean>(true);
    const [opacity, setOpacity] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(() => {
            setOpacity(false);
        }, 6000);
        setTimeout(() => {
            setDisplay(false);
        }, 9500);
    },[]);
    return (
        <Container 
            display={display}
            opacity={opacity}
        >
            <LoadingView>
                <img src={require("../assets/resource/loading-now-loading.gif").default} />
            </LoadingView>
        </Container>
    );
};

export default Loading;