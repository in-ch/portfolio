import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// import Header from "./Header";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    input{
        all:unset;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:RGB(24,24,24);
        scroll-behavior: smooth;
        @media (max-width: 520px) {
            overflow:scroll;
        }
        font-family: 'Nanum Pen Script', cursive;
        font-family: 'Noto Sans KR', sans-serif;
        -ms-overflow-style: none; /* IE, Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;


type Props = {
    children: JSX.Element,
}

const Container = styled.div`
    width:100%;
`;

const Layout = ({children}:Props) => {
    return (
        <>
            <GlobalStyle />
            <Container>
                {/* <Header /> */}
                {children}
            </Container>
        </>

    )
};

export default Layout;