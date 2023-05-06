// import trevoLoto from '../assets/trevo-lotofacil.png'
// import Ganhadores from "../components/ganhadores/Ganhadores";
// import InforConcurso from "../components/infoConcurso/InforConcurso";
// import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio";
// import NumerosSorteadosLoto from "../components/numerosSorteados/NumerosSorteadosLoto";
// //import TituloLoto from "../components/titulo/tituloLoto";
// import ValorLoto from "../components/valor/valorLoto";
import { useContexto } from "../hooks";
import{ ThemeProvider } from"styled-components";
import  Titulo from "../components/NomeLoteria/nomeLoteria"

const tema = {
  //fundo: "#e0ffff",
  cor: "#260085"
};

export default function Lotofacil(){
    
  const {timemania} = useContexto()

  return (
    <ThemeProvider theme={tema}>

      
    </ThemeProvider>
  )

}

/*
 <div className='cont'>

 <div className='direito'>

  <div className='trevo'><img src={trevoLoto} /><Titulo titulo={"Loto facil"} /></div> 
 <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${lotofacil.dataProximoConcurso}:`} />
 <ValorLoto valor={lotofacil.valorEstimadoProximoConcurso} />

</div>
<div className='esquerdo'>

 <NumerosSorteadosLoto numeros={lotofacil.dezenas} />
 <Ganhadores ganhadores={lotofacil.quantidadeGanhadores ? `${lotofacil.quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
 <InforConcurso informacoes={`Concuso: ${lotofacil.numeroDoConcurso} -`} data={` ${lotofacil.dataPorExtenso}`} />

</div>

</div>

*/