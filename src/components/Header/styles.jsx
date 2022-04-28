import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around ;
    border-bottom: 1px solid #e3e3e3;
`
export const Logo = styled.div`
h1{
    cursor: pointer;
}
`
export const Nav = styled.div`
    button{
        border: none;
        background-color: transparent;
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        cursor: pointer;
        color: #4A5561;
        margin-left: 2rem;
    }
    button:hover{
        color: #E61B2B;
        border-bottom: 2px solid #E61B2B;
    }
`