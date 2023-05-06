import trevoQuina from "../assets/trevo-quina.png"
import { useContexto } from "../hooks";
import{ ThemeProvider } from"styled-components";
import { quinaT } from "../styles/themes";
import { PrincipalComponente } from "../components/Principal/Principal";

export default function Quina(){
    const {quina} = useContexto()
    return(
      <ThemeProvider theme={quinaT}>
        <PrincipalComponente contexto={quina} trevo={trevoQuina} titulo={"Quina"}></PrincipalComponente>
      </ThemeProvider>
    )
}