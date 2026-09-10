import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="inu">
      <h1>Página Inicial</h1>
      <img src="/assets/images/inuyasha.gif" alt="" />

    <div className="links">
        <Link to ='/pages/contato/index.jsx'>
          <button>Contatos</button>
        </Link>

        <Link to = '/pages/event/index.jsx'>
          <button>Eventos</button>
        </Link>
      </div>
    </div>
  );
}

