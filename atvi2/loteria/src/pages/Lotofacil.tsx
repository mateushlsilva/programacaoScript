import trevoLoto from '../assets/trevo-lotofacil.png'
import Ganhadores from "../components/ganhadores/Ganhadores";
import InforConcurso from "../components/infoConcurso/InforConcurso";
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio";
import NumerosSorteadosLoto from "../components/numerosSorteados/NumerosSorteadosLoto";
import TituloLoto from "../components/titulo/tituloLoto";
import ValorLoto from "../components/valor/valorLoto";
import { useContexto } from "../hooks";

export default function Lotofacil(){
    
  const {lotofacil} = useContexto()

  return (
    <div className='cont'>{ /* lotofacil */}

        <div className='direito'>

          <div className='trevo'><img src={trevoLoto} /><TituloLoto titulo={"Loto facil"} /></div>
          <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${lotofacil.dataProximoConcurso}:`} />
          <ValorLoto valor={lotofacil.valorEstimadoProximoConcurso} />

        </div>
        <div className='esquerdo'>

          <NumerosSorteadosLoto numeros={lotofacil.dezenas} />
          <Ganhadores ganhadores={lotofacil.quantidadeGanhadores ? `${lotofacil.quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
          <InforConcurso informacoes={`Concuso: ${lotofacil.numeroDoConcurso} -`} data={` ${lotofacil.dataPorExtenso}`} />

        </div>

    </div>
  )

}