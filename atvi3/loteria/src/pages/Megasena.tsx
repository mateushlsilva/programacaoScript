import { useContexto } from "../hooks"
import{ ThemeProvider } from"styled-components";
import trevomega from "../assets/trevo-megasena.png" 
import { mega } from '../styles/themes';
import { PrincipalComponente } from "../components/Principal/Principal";

export default function Megasena(){
  const {megasena} = useContexto()
    return(
      <ThemeProvider theme={mega}>
        <PrincipalComponente contexto={megasena} trevo={trevomega} titulo={"mega-sena"}></PrincipalComponente>
      </ThemeProvider>
    )
}