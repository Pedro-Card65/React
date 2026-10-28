import App from './pages/app/App';

import Contato from './pages/contato/index.jsx';

import Evento from './pages/event/index.jsx';

import Contador from './pages/contador/index.jsx'

import Tittle from './pages/titulo/index.jsx';

import Calculadora from './pages/calculator/index.jsx';

import Ingresso from './pages/cinema/index.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<App/>} />
            <Route path = '/pages/contato/index.jsx' element = {<Contato/>} />
            <Route path = '/pages/event/index.jsx' element = {<Evento/>} />
            <Route path = '/pages/contador/index.jsx' element = {<Contador/>} />
            <Route path = '/pages/titulo/index.jsx' element = {<Tittle/>} />
            <Route path = '/pages/calculadora/index.jsx' element = {<Calculadora/>} />
            <Route path = '/pages/cinema/index.jsx' element = {<Ingresso/>} />
        </Routes>
    </BrowserRouter>
    );
}