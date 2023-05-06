import trevoMega from '../assets/trevo-megasena.png'
import { useContexto } from "../hooks"
import{ ThemeProvider } from"styled-components";
import  Titulo from "../components/NomeLoteria/nomeLoteria"
import Valor from "../components/Estimativa/estimativa"
import NumerosSorteados from "../components/Resultado/resultado"
import Ganhadores from "../components/Acumulou/acumulou"
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio"
import InforConcurso from "../components/Data/data"
import { mega } from '../styles/themes';

export default function Megasena(){

  const {megasena} = useContexto()

    return(
      <ThemeProvider theme={mega}>
        <div className='cont'> { /* megasena */}

          <div className='direito'>

            <div className='trevo'><img src={trevoMega} /><Titulo titulo={"Mega-sena"} /> </div>
            <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${megasena.dataProximoConcurso}:`} />
            <Valor valor={megasena.valorEstimadoProximoConcurso} />

          </div>

          <div className='esquerdo'>

            <NumerosSorteados numeros={megasena.dezenas} />
            <Ganhadores ganhadores={megasena.quantidadeGanhadores ? `${megasena.quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
            <InforConcurso informacoes={`Concuso: ${megasena.numeroDoConcurso} -`} data={` ${megasena.dataPorExtenso}`} />

          </div>

        </div>
      </ThemeProvider>
    )
}