import React from 'react'
import * as C from './styles'
import {useNavigate} from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
  return (
    <C.Container>
        <C.Logo>
            <h1 onClick={() => navigate('/')}>Logo</h1>
        </C.Logo>
        <C.Nav>
            <button onClick={() => navigate('QuemSomos')}>QUEM SOMOS</button>
            <button onClick={() => navigate('Servicos')}>SERVIÇOS</button>
            <button onClick={() => navigate('Produtos')}>PRODUTOS</button>
            <button onClick={() => navigate('Blog')}>BLOG</button>
            <button onClick={() => navigate('Carreira')}>CARREIRA</button>
            <button onClick={() => navigate('Contatos')}>CONTATO</button>
        </C.Nav>
    </C.Container>
  )
}
