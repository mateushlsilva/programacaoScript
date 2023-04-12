import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Quina from '../pages/Quina';
import Lotofacil from '../pages/Lotofacil';
import Megasena from '../pages/Megasena';


function Erro() {
    return(
        <div style={{textAlign:'center', fontSize: '30px', marginTop: '300px'}}>Indisponível ...</div>
    )
}

function Menu() {
    return(
        <div>
            <Link to={"/lotofacil"}> Lotofácil</Link>
            <Link to={"/megasena"}> Megasena</Link>
            <Link to={"/quina"}> Quina</Link>
        </div>
    )
}

function Rota() {
    return (
        <>
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path='/quina' element={<Quina/>}/>
                    <Route path='/lotofacil' element={<Lotofacil/>}/>
                    <Route path='/megasena' element={<Megasena/>}/>
                    <Route path='/' element={<Lotofacil/>}/>
                    <Route path='*' element={<Erro/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rota