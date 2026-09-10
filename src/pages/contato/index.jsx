import './index.scss';
import { Link } from 'react-router-dom';

export default function Contato(){
    return(
        <div className="sess">
            <h1>Contatos</h1>

            <div className="conts">
                <div className="zap">
                    <img src="/assets/images/zap.png" alt="" />
                    <p>WhatsApp</p>
                </div>

                <div className="telegram">
                    <img src="/assets/images/telegram.png" alt="" />
                    <p>Telegram</p>
                </div>
            </div>
            
            <div className="links">
                <Link to = '/'>
                    <button>Início</button>
                </Link>

                <Link to = '/pages/event/index.jsx'>
                    <button>Eventos</button>
                </Link>
            </div>
        </div>
    );
}