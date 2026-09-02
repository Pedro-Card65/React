import './index.scss';
import { Link } from 'react-router-dom';

export default function Contato(){
    return(
        <div className="sess">
            <h1>Sesshomaru</h1>
            <img src="/assets/images/sess.gif" alt="" />
            
            <Link to = '/'>
                <p>Inuyasha 🐶</p>
            </Link>
        </div>
    );
}