import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function Titulo() {
    const [tittle, setTittle] = useState("Beibe beibe do biruleibe beibe")
    
    function mudar(e) {
        let novoTitulo = e.target.value;
        setTittle(novoTitulo)
            if (novoTitulo === ''){
                setTittle("Digite novamente")
            }
    }

    const [base, setBase] = useState("Coloque o texto")

    function troca (e) {
        let textoBase = e.target.value
        setBase(textoBase);
        }

    const [botao, setBotao] = useState("Altere o texto pelo botão")
    
    function texto() {
        setBotao(base)
            if (base === ''){
                setBotao("Digite novamente")
            }
    }       

    const [cor, setCor] = useState("")

    function novaCor(e) {
        let cor1 = e.target.value
        setCor(cor1)
    }



    return (
        <div className = "titulo" style = {{backgroundColor : cor}}>
            <div className = "box">
                <h1>Digite algo para alterar o seguinte texto:</h1>

                <h2>{tittle}</h2>

                <input type = "text" placeholder = 'Escreva o texto' onChange={mudar}/>
            </div> 

            <div className = "box2">
                <h1>Digite algo para alterar o seguinte texto:</h1>

                <h2>{botao}</h2>

                <input type="text" placeholder={"Escreva o texto"} onChange={troca} />

                <button onClick = {texto}>Alterar texto</button>
            </div>

            <div className="fundo">
                <h1>Altere a cor do fundo:</h1>
                <input type="color" onChange={novaCor} />
            </div>

            <Link to = '/'>
                <button>Home</button>
            </Link>
        </div>

        
    )
}