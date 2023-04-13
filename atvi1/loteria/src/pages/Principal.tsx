import trevoMega from '../assets/trevo-megasena.png'
import trevoLoto from '../assets/trevo-lotofacil.png'
import useContexto from '../hooks/useContexto';
import Ganhadores from '../components/ganhadores/Ganhadores';
import InforConcurso from '../components/infoConcurso/InforConcurso';
import ProximoSorteio from '../components/infoProximoSorteio/ProximoSorteio';
import NumerosSorteados from '../components/numerosSorteados/NumerosSorteados';
import NumerosSorteadosLoto from '../components/numerosSorteados/NumerosSorteadosLoto';
import Titulo from '../components/titulo/titulo';
import TituloLoto from '../components/titulo/tituloLoto';
import Valor from '../components/valor/valor';
import ValorLoto from '../components/valor/valorLoto';
export default function Megasena() {

  const {megasena} = useContexto()
  const {lotofacil} = useContexto()

  return (
    <div>
    <div className='cont'>

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

    <div className='cont'>

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
  </div>

  )
}
