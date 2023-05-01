import { Provider } from "./contexts";
import './App.css'
import Rota  from './routes'
import { useContexto } from "./hooks";

function Principal() {
  const {megasena} = useContexto()
  return (
    <>
      {megasena.numeroDoConcurso ?
        <div>
          <Rota/>
        </div>
        :
        <div style={{textAlign:'center', fontSize: '30px', marginTop: '300px'}}>Carregando....</div>}

    </>
  )
}


function App() {

  return (
    <Provider>
      <Principal /> 
    </Provider>
  )
}

export default App;
