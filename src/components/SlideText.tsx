import styled from "styled-components";

const Container = styled.div`
    width:90%;
    margin-left:5%;
    border-top:1px solid #777;
    border-bottom:1px solid #777;
    height:30vh;
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
    text-overflow:visible;
    white-space: nowrap;
    position:relative;
    left:${(props)=>props.slideData}px;
    transition: all 0.2s smooth;
    color:#777;
    &:hover{
        /* &::after{
            width: 50%;
            transition: width .9s;
        } */
    }
    /* &::after{
        content: '';
        display: block;
        width: 0;
        height: 5px;
        position: absolute;
        left: 0;
        bottom: 0px;
        background: rgba(200, 125, 220, .6);
    } */
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
        </>
    )
};  

export default SlideText;