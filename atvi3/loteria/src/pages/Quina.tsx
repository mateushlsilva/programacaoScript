import trevoQuina from "../assets/trevo-quina.png"
import { useContexto } from "../hooks";
import{ ThemeProvider } from"styled-components";
import  Titulo from "../components/NomeLoteria/nomeLoteria"
import Valor from "../components/Estimativa/estimativa"
import NumerosSorteados from "../components/Resultado/resultado"
import Ganhadores from "../components/Acumulou/acumulou";
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio"
import InforConcurso from "../components/Data/data"
import { quinaT } from "../styles/themes";


export default function Quina(){

    const {quina} = useContexto()

    return(
      <ThemeProvider theme={quinaT}>
          <div className='cont'>{ /* quina */}

          <div className='direito'>

            <div className='trevo'><img src={trevoQuina} /><Titulo titulo={"Quina"} /> </div>
            <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${quina.dataProximoConcurso}:`} />
            <Valor valor={quina.valorEstimadoProximoConcurso} />

            </div>

            <div className='esquerdo'>

            <NumerosSorteados numeros={quina.dezenas} />
            <Ganhadores ganhadores={quina.quantidadeGanhadores ? `${quina.quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
            <InforConcurso informacoes={`Concuso: ${quina.numeroDoConcurso} -`} data={` ${quina.dataPorExtenso}`} />

            </div>
        </div>
      </ThemeProvider>
    )
}