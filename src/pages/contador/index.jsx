import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Header from '../../components/header';

export default function Contador(){
    const [contador, setConts] = useState(0)

    function mais() {
	    setConts(contador + 1)
	}

    function menos() {
	    setConts(contador - 1)
	}

    return (
        <div className="cont">
           <Header/>

            <div className="bot">
                <button onClick = {menos}> - </button>
                <p>{contador}</p>
                <button onClick = {mais}> + </button>
            </div>

            <div className = "volta">
            <Link to = '/'>
                <button>Home</button>
            </Link>
            </div>
        </div>
    );
}