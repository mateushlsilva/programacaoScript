import trevoQuina from "../assets/trevo-quina.png"
import Ganhadores from "../components/ganhadores/Ganhadores";
import InforConcurso from "../components/infoConcurso/InforConcurso";
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio";
import NumerosSorteadosQuina from "../components/numerosSorteados/NumerosSorteadosQuina";
import TituloQuina from "../components/titulo/tituloQuina";
import ValorQuina from "../components/valor/valorQuina";
import { useContexto } from "../hooks";

export default function Quina(){

    const {quina} = useContexto()

    return(
        
        <div className='cont'>{ /* quina */}

        <div className='direito'>

          <div className='trevo'><img src={trevoQuina} /><TituloQuina titulo={"Quina"} /> </div>
          <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${quina.dataProximoConcurso}:`} />
          <ValorQuina valor={quina.valorEstimadoProximoConcurso} />

          </div>

          <div className='esquerdo'>

          <NumerosSorteadosQuina numeros={quina.dezenas} />
          <Ganhadores ganhadores={quina.quantidadeGanhadores ? `${quina.quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
          <InforConcurso informacoes={`Concuso: ${quina.numeroDoConcurso} -`} data={` ${quina.dataPorExtenso}`} />

          </div>
      </div>
    )
}