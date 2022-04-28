import * as C from './styles'
import Typical from 'react-typical'
import IMG from '../../assets/img/img.svg'
import { useNavigate } from 'react-router-dom'
import { CardInfos } from '../../components/CardInfos'
import DEV from '../../assets/img/dev.png'
import OUT from '../../assets/img/out.png'
import RS from '../../assets/img/rs.png'
import TI from '../../assets/img/ti.png'
import { SobreHome } from '../../components/Sobre'
import { Inovacao } from '../../components/Inovacao'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <C.Container>
        <C.Conteudo>
          <div>
            <h2>
              Somos <br />
              especialistas em <br />
              Desenvolvimento <br />
              {" "}
              <span>
                <Typical
                  loop={Infinity}
                  wrapper="z"
                  steps={[
                    "aplicações Web",
                    1000,
                    "de aplicações Mobile",
                    1000,
                    "de aplicações Cloud",
                    1000,
                    "de Software",
                    1000,
                  ]} />
              </span>
            </h2>
            <p>Ajudamos você no processo de transformação digital e <br /> inovação!</p>
          </div>
          <button onClick={() => navigate('Contatos')}>FALE COM UM CONSULTOR</button>
        </C.Conteudo>
        <C.Image>
          <img src={IMG} alt="" />
        </C.Image>
      </C.Container>
      <C.Apresentacao>
        <main>
          <h4>Bem Vindo</h4>
          <h3>Solution Provider de TI</h3>
          <section>
            <span>Somos o seu parceiro de TI para desenvolvimento de software, <br />
              plataforma multicloud para microsserviços, integração e <br />
              atualização de sistemas legados.</span>

          </section>
        </main>
        <div>
          <div>
            <CardInfos
              img={DEV}
              title="Desenvolvimento de software"
              describe="Desenvolvemos softwares a fim de te
            ajudar na integração e atualização de sistemas
             aumentando resultados, favorecendo
            a flexibilização de recursos e
              redução de custos."
            />
          </div>
          <div>
            <CardInfos
              img={TI}
              title=" Infraestrutura de TI"
              describe="Desenvolvemos toda a estrutura
             de TI do seu negócio."
            />
          </div>
          <div>
            <CardInfos
              img={OUT}
              title="Outsourcing"
              describe="Disponibilizamos profissionais
             especialistas para somar à 
             sua equipe de trabalho."
            />
          </div>
          <div>
            <CardInfos
              img={RS}
              title="Recrutamento e seleção"
              describe="Por meio de nossos processos,
             ferramentas e do entendimento real do seu negócio,
              garantimos o profissional certo."
            />
          </div>
        </div>
      </C.Apresentacao>
      <Inovacao />
      <SobreHome />
    </>
  )
}
