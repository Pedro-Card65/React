import './index.scss';
import { Link } from 'react-router-dom';

import Header from '../../components/header';

export default function Evento(){
    /*function Alerta(e) {
        let Infos = e.target.value;
        alert("Alteração feito pelo usuário! " + Infos);
    }*/
    function Passar() {
        alert("O usuário passou por aqui")
    }
    
    return(
        <div className="eventos">
            <Header/>
            
            <h1>Cadastro</h1>
            
            <div className="eventBox">
                <h2>Insira seu Nome</h2>
                <input  type="text" placeholder='Joãozinho Pequenino'/>
                <button >Confirmar</button>
                

                <div className="mouse" onMouseMove={Passar}>
                    <h2>Passe o mouse aqui</h2>
                </div>
            </div>

            <Link  to = '/'>
                <button>Home</button>
            </Link>
        </div>
    );
}