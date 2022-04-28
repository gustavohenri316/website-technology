import styled from "styled-components";

export const Container = styled.div`
position: absolute;
    width: 1200px;
    height: 400px;
    background-color: #e3e3e3;
    border-radius: 40px;
    margin-left: 20%;
    display: flex;
    align-items: center;
    background-color: #444444;
    justify-content: space-around;
   

    h2{
        z-index: 1;
        opacity: 100%;
        color: #FFF;
    }

    h3{
        color: #FFF;
    }
    button{
        width: 200px;
        height: 60px;
        background: #E61B2B;
        border-radius: 38.5px;
        border: none;
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
    }
`