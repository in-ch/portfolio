import styled from "styled-components";

const Container = styled.div`
    width:90%;
    margin-left:5%;
    border-top:1px solid #777;
    border-bottom:1px solid #777;
    height:300px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow:hidden;
`;
const P1 = styled.p`
    font-size:20px;
    color:white;
`;
const P2 = styled.p<Props>`
    font-size:100px;
    color:white;
    text-overflow:visible;
    white-space: nowrap;
    position:relative;
    left:${(props)=>props.slideData}px;
    transition: all 1s smooth;
`;
interface Props {
    slideData:number,
} 

const SlideText = ({slideData}:Props) => {

    return (
        <>
            <Container>
                <P1>asdf</P1>
                <P2
                    slideData={1100 - slideData}
                >명석하게 그지없고 박식하기 그지없는 수재요.</P2>
            </Container>
            <Container>
                <P1>asdf</P1>
                <P2 
                    style={{
                        filter:'flipv()'
                    }}
                    slideData={slideData - 1100}
                >명석하게 그지없고 박식하기 그지없는 수재요.</P2>
            </Container>
            <Container>
                <P1>asdf</P1>
                <P2
                    slideData={1100 - slideData}
                >명석하게 그지없고 박식하기 그지없는 수재요.</P2>
            </Container>
        </>
    )
};  

export default SlideText;