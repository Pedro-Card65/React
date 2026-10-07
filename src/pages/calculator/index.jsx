import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Calculadora() {
    const [n1, setn1] = useState("")
    const [n2, setn2] = useState("")
    const [resp, setresp] = useState("")

    function somar() {
        let soma = Number(n1) + Number(n2)
        setresp(soma)
    }

    function subtrair() {
        let sub = Number(n1) - Number(n2)
        setresp(sub)
    }

    function multiplicar() {
        let mult = Number(n1) * Number(n2)
        setresp(mult)
    }

    function divisao () {
            let dividir = Number(n1) / Number(n2)
            setresp(dividir)
        }

    return (
        <div className="calculadora">

            <h2>Calculadora</h2>
            
            <div className="soma">
                <div className="input">
                    <input type="text" value = {n1} onChange = {(e)=>setn1(e.target.value)} />
                    <input type="text" value = {n2} onChange = {(e)=>setn2(e.target.value)} />
                </div>

                
                <button onClick = {somar}>Somar</button>

            </div>

            <div className="sub">
                <div className="input">
                    <input type="text" value = {n1} onChange = {(e)=>setn1(e.target.value)} />
                    <input type="text" value = {n2} onChange = {(e)=>setn2(e.target.value)} />
                </div>

                <button onClick = {subtrair}>Subtração</button>
            </div>

            <div className="mult">
                <div className="input">
                    <input type="text" value = {n1} onChange = {(e)=>setn1(e.target.value)} />
                    <input type="text" value = {n2} onChange = {(e)=>setn2(e.target.value)} />
                </div>

                <button onClick = {multiplicar}>Multiplicação</button>
            </div>

            <div className="div">
                <div className="input">
                    <input type="text" value = {n1} onChange = {(e)=>setn1(e.target.value)} />
                    <input type="text" value = {n2} onChange = {(e)=>setn2(e.target.value)} />
                </div>

                <button onClick = {divisao}>Divisão</button>
            </div>

            <div className = 'resp'>{resp}</div>

            <Link to = '/'>
                <button>Home</button>
            </Link>
        </div>
    )
}

