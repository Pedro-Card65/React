import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="inu">
      <h1>Inuyasha</h1>
      <img src="/assets/images/inuyasha.gif" alt="" />

      <Link to ='/pages/contato/index.jsx'>
        <p>Sesshomaru 🐲</p>
      </Link>
    </div>
  );
}

