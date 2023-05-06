//import './titulo.css'
import styled from 'styled-components'

function Titulo({ titulo }: any) {
    return (
        <LoteriaSld>
            <h1>
                {titulo}
            </h1>
        </LoteriaSld>
    )
}

export default Titulo;

const LoteriaSld = styled.div`
    display: inline-block;
    color: ${props =>props.theme.loteria};
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-left: 10px;
    max-width: 300px;
`

/*
    .titulo {
    display: inline-block;
    color: #209869;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-left: 10px;
    max-width: 300px;
  }
*/ 