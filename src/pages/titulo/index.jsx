import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function Titulo() {
    const [tittle, setTittle] = useState("Beibe beibe do biruleibe beibe")
    
    function mudar(e) {
        let novoTitulo = e.target.value;
        setTittle(novoTitulo)
            if (novoTitulo == ''){
                setTittle("Beibe beibe do biruleibe beibe")
            }
    }
    


    return (
        <div className="titulo">
            <div className="box">
                <h1>Digite algo para alterar o seguinte texto:</h1>
                <h2>{tittle}</h2>
                <input type="text" onChange={mudar}/>
            </div>

            <Link to = '/'>
                <button>Home</button>
            </Link>
        </div>

        
    )
}