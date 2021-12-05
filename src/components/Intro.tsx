import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Column = styled.div`
    width:100%;
    overflow:hidden;
    position:relative;
    top:-70px;
`;
const Row = styled.div<Props>`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left:120px;
    position:relative;
    width:400%;    
    left:-${(props)=>props.scrollY}px;   // 0 -> 600
    transition: all 0.2s smooth;
`;
const Row2 = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left:120px;
    position:relative;
    width:100%;
`;
const Space = styled.div<Props>`
    width:${(props)=>(props.scrollY*2)+100}px;  // 100 -> 1300
    height:15px;
    opacity:0.6;
    background-color:white;
    position:relative;
    top:-10px;
    margin-left:20px;
    margin-right:20px;
    transition: all 0.2s smooth;
`;
const P = styled.p`
    font-size:220px;
    opacity:0.6;
    vertical-align: baseline;
    transition: all 0.5s;
    font-weight:bold;
    letter-spacing: -.999rem;
    &:hover{
        opacity:0.8;
    }
`;
interface Props {
    scrollY:number,
}
interface PropsMain {
    slideData:number,
}  
const Intro = ({slideData}:PropsMain) => {

    return (
        <Container>
            <Column>
                <Row
                    scrollY={slideData}
                >
                    <P>N</P>
                    <P>A</P>
                    <P>M</P>
                    <P>E</P>
                    <Space 
                        scrollY={slideData}
                    />
                    <P>I</P>
                    <P>N</P>
                    <P>C</P>
                    <P>H</P>
                    <P>.</P>
                </Row>
                <Row2>
                    <P>I</P>
                    <P>N</P>
                    <P>T</P>
                    <P>R</P>
                    <P>O</P>
                    <P>D</P>
                    <P>U</P>
                    <P>C</P>
                    <P>E</P>
                </Row2>
            </Column>
        </Container>
    )
};

export default Intro;