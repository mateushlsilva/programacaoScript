import styled from "styled-components"

function Carregando() {
    return(
        <CarSld>
            Carregando....
        </CarSld>
    )
}

function Erro() {
    return(
        <CarSld>
            Indisponível ...
        </CarSld>
    )
}

export  {
    Carregando,
    Erro
}

const CarSld = styled.div`
    text-Align: center; 
    font-Size: 30px; 
    margin-Top: 300px;
`