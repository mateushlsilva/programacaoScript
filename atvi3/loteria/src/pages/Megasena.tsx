import trevoMega from '../assets/trevo-megasena.png'
import Ganhadores from "../components/ganhadores/Ganhadores"
import InforConcurso from "../components/infoConcurso/InforConcurso"
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio"
import NumerosSorteados from "../components/numerosSorteados/NumerosSorteados"

import Valor from "../components/valor/valor"
import { useContexto } from "../hooks"
import{ ThemeProvider } from"styled-components";
import  Titulo from "../components/NomeLoteria/nomeLoteria"

const tema = {
  //fundo: "#e0ffff",
  cor: "#209869"
};
export default function Megasena(){

  const {megasena} = useContexto()

    return(
      <ThemeProvider theme={tema}>
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