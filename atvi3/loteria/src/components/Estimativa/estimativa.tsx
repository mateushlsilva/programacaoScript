import styled from "styled-components"

function Valor({ valor }: any) {
    return (
        <ValorSld>
            <h2>
                R$ {valor},00
            </h2>
        </ValorSld>
    )
}

export default Valor

const ValorSld = styled.div`
    color: ${props =>props.theme.estimativa};
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