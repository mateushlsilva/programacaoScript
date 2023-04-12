import trevoMega from '../../assets/trevo-megasena.png'
import trevoLoto from '../../assets/trevo-lotofacil.png'
import trevoQuina from "../../assets/trevo-quina.png"
import useContexto from '../../hooks/useContexto';
import Ganhadores from '../ganhadores/Ganhadores';
import InforConcurso from '../infoConcurso/InforConcurso';
import ProximoSorteio from '../infoProximoSorteio/ProximoSorteio';
import NumerosSorteados from '../numerosSorteados/NumerosSorteados';
import NumerosSorteadosLoto from '../numerosSorteados/NumerosSorteadosLoto';
import NumerosSorteadosQuina from '../numerosSorteados/NumerosSorteadosQuina';
import Titulo from '../titulo/titulo';
import TituloLoto from '../titulo/tituloLoto';
import TituloQuina from '../titulo/tituloQuina';
import Valor from '../valor/valor';
import ValorLoto from '../valor/valorLoto';
import ValorQuina from "../valor/valorQuina";
export default function Megasena() {

  const {megasena} = useContexto()
  const {lotofacil} = useContexto()
  const {quina} = useContexto()

  return (
    <div>
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

      
    </div>

  )
}
