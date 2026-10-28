import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

export default function Ingresso(){
    let valor = 30

    const [quant, setQuant] = useState(1)
    const [meia, setMeia] = useState(false)
    const [cupom, setCupom] = useState('')
    const [final, SetFinal] = useState('')

    function valorTotal() {
        let total = valor * quant
        
        if (meia === true) {
            total = total / 2;
            
        }
        
        if (cupom === 'SEM50') {
            total = total * 0.5;
            
        }

        if (cupom === 'SEM20') {
            total = total * 0.8;
            
        }
        
        SetFinal(total)

    }


    return(
        <div className="cinema">
            <Header/>

            <h1>Ingressos</h1>

            <div className="conta">
                <div className="">
                    <h2>Quant ingressos</h2>
                    <input type="number" value={quant} onChange = {(e)=> setQuant(e.target.value)}/>
                </div>
                    
                <div className="">
                    <h2>Meia</h2>
                    <input type="checkbox" value = {meia} onChange = {(e)=> setMeia(e.target.checked)} />
                </div>

                <div className="">
                    <h2>Inserir cupom</h2>
                    <input type="text" value = {cupom} onChange = {(e) => setCupom(e.target.value)}/>
                </div>

                <button onClick={valorTotal}>Calcular</button>

                <h2>{final}</h2>
            </div>

            <Link to = '/'>
                <button>Home</button>
            </Link>

            <Footer/>
        </div>
    )
}   