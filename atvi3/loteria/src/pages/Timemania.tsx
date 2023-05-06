import { useContexto } from "../hooks";
import{ ThemeProvider } from"styled-components";
import { timemaniaT } from "../styles/themes";
import trevotimemania from "../assets/trevo-timemania.png"
import { PrincipalComponente } from "../components/Principal/Principal";



export default function Timemania(){
    
  const {timemania} = useContexto()

  return (
    <ThemeProvider theme={timemaniaT}>
      <PrincipalComponente contexto={timemania} trevo={trevotimemania} titulo={"timemania"}></PrincipalComponente>
    </ThemeProvider>
  )

}