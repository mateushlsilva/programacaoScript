import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quina from '../pages/Quina';
import Lotofacil from '../pages/Lotofacil';
import Megasena from '../pages/Megasena';

function Rota() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/quina' element={<Quina/>}/>
                    <Route path='/lotofacil' element={<Lotofacil/>}/>
                    <Route path='/megasena' element={<Megasena/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rota