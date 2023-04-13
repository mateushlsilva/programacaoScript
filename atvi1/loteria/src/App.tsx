import { Provider } from "./contexts";
import Principal from "./pages/Principal";
import './App.css'
import { useContexto } from "./hooks";

function Carregando() {
  const {megasena} = useContexto()
  return (
    <>
      {megasena.numeroDoConcurso ?
        <div>
          <Principal />
        </div>
        :
        <div style={{textAlign:'center', fontSize: '30px', marginTop: '300px'}}>Carregando....</div>}

    </>
  )
}



function App() {

  return (
    <Provider>
      <Carregando />
    </Provider>
  )
}

export default App;
