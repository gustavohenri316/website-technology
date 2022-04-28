import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around ;
`
export const Conteudo = styled.div`
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    div{
        display: flex;
        flex-direction: column;
    }
    h2{
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 400;
        
        font-size: 48px;
        color: #091740;
    }
    span{
        font-weight: 600;
        color: #E61B2B;
    }
    p{
        padding-top: 3rem;
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #091740;
    }
    button{
        margin-right: 55% ;
        width: 230px;
        height: 60px;
        background: #E61B2B;
        border-radius: 38.5px;
        border: none;
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
`
export const Image = styled.div`
    
`

export const Apresentacao = styled.div`
    padding-top: 5rem;
    text-align: center;
        main{
            padding-right: 10%;
        }
        h4{
            margin-left: 20%;
            font-family: 'Titillium Web';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 37px;
            color: #748394;
        }
        h3{
            margin-left: 20%;
            font-family: 'Titillium Web';
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 61px;
            color: #091740;
        }
        section{
            margin-left: 20%;
        }
        span{
            
            font-family: 'Titillium Web';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 37px;
            text-align: center;
            color: #022222;
        }
        div{
            padding: 3rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        div>div{
            padding-left: 40px;
        }
`