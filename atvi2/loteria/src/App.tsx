import { Provider } from "./contexts";
import Principal from "./pages/Principal";
import './App.css'
import Rota  from './routes'

function App() {

  return (
    <Provider>
      <Rota/>
      {/* <Principal /> */}
    </Provider>
  )
}

export default App;
