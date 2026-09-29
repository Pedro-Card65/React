import './index.scss';
import App from './pages/app/App';
import './pages/contato/index.scss';
import Contato from './pages/contato/index.jsx';
import './pages/event/index.scss';
import Evento from './pages/event/index.jsx';
import './pages/contador/index.scss'
import Contador from './pages/contador/index.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tittle from './pages/titulo/index.jsx';
import './pages/titulo/index.scss';

export default function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<App/>} />
            <Route path = '/pages/contato/index.jsx' element = {<Contato/>} />
            <Route path = '/pages/event/index.jsx' element = {<Evento/>} />
            <Route path = '/pages/contador/index.jsx' element = {<Contador/>} />
            <Route path = '/pages/titulo/index.jsx' element = {<Tittle/>} />
        </Routes>
    </BrowserRouter>
    );
}