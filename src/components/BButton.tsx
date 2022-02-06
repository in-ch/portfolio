import React from "react";
import styled from "styled-components";


const ButtonWrapper = styled.input`
    background-color:white;
    width:100px;
    height:50px;
    border-radius:20px;
    box-shadow:5px 5px 12px 0px RGBA(0,0,0,0.2);
    border-top:3px solid RGB(255,255,255,0.8);
    border-left:3px solid RGB(255,255,255,0.8);
    text-align:center;
    color:RGB(50,50,50,0.8);
`;


const BButton = () => {
    return (
        <ButtonWrapper 
            type="button"
            value="Default"
        />
    );
};

export default BButton;