import NumerosSorteados from "../Resultado/resultado"
import Ganhadores from "../Acumulou/acumulou"
import InforConcurso from "../Data/data"
import styled from "styled-components"


function Direita({numeros, quantidadeGanhadores, numeroDoConcurso, data }:any) {
    return(
        <DirSld>
            <NumerosSorteados numeros={numeros} />
            <Ganhadores ganhadores={quantidadeGanhadores ? `${quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
            <InforConcurso informacoes={`Concuso: ${numeroDoConcurso} -`} data={` ${data}`} />
        </DirSld>
    )
    
}

const DirSld = styled.div`
    display: inline-block;
`



export default Direita;