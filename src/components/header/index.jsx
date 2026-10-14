import './index.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className = "comp-cabe">
            
            <h1>{props.titulo ?? 'Páginas'}</h1>

            <div className="links">

                <Link to ='../pages/contato/index.jsx'>
                <button>Contatos</button>
                </Link>

                <Link to = '../pages/event/index.jsx'>
                <button>Eventos</button>
                </Link>

                <Link to = '../pages/contador/index.jsx'>
                <button>Contador</button>
                </Link>

                <Link to = '../pages/titulo/index.jsx'>
                <button>Titulo</button>
                </Link>

                <Link to = '../pages/calculadora/index.jsx'>
                <button>Calculadora</button>
                </Link>

            </div>
        </div>
    )
}