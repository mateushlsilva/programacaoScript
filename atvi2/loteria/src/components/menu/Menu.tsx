import { Link, useLocation } from 'react-router-dom'
import './menu.css'

export default function Menu() {
    const linkAtual = useLocation()
    return(
        <div className='menu'>
            <Link  to={"/lotofacil"} className={linkAtual.pathname === "/lotofacil" ? 'link-cor':' link linklotofacil'}> Lotofácil</Link>
            <Link to={"/megasena"} className={linkAtual.pathname === "/megasena" ? 'link-cor':'link linkmegasena '}> Megasena</Link>
            <Link to={"/quina"} className={linkAtual.pathname === "/quina" ? 'link-cor':'link linkquina '}> Quina</Link>
        </div>
    )
}