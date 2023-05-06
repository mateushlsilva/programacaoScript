import Rota  from '../../routes'
import { useContexto } from "../../hooks";
import Carregando from "../Carregando/carregando";

function Principal() {
  const {megasena} = useContexto()
  return (
    <>
      {megasena.numeroDoConcurso ?
        <div>
          <Rota/>
        </div>
        :
        <Carregando/>}

    </>
  )
}

export default Principal;