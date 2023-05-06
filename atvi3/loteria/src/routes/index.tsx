import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quina from '../pages/Quina';
import Lotofacil from '../pages/Lotofacil';
import Megasena from '../pages/Megasena';
import Menu from '../components/Menu/Menu'
import { Erro } from '../components/Carregando/carregando';




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