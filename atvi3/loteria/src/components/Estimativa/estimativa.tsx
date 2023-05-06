import styled from "styled-components"

function Valor({ valor }: any) {
    return (
        <ValorSld>
            <h2>
                R$ {valor}
            </h2>
        </ValorSld>
    )
}

export default Valor

const ValorSld = styled.div`
    color: ${props =>props.theme.cor};
    font-weight: bold;
    margin-left: 17vh;
    max-width: 200px;
`
/*
.valor{
    color: #209869;
    font-weight: bold;
    margin-left: 17vh;
    max-width: 200px;
}
*/