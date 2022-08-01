
import './ItemCount.css';
import {useState} from 'react';
import vestidoSarah from './vestidoSarah.jpg';

function ItemCount (props) {
    const [contador, setContador] = useState(0);
    function agregar(){
     setContador(contador+1);
    }

    function quitar(){
        setContador(contador-1);
    }

    return (
        <div className='texto'>
            <h2>{props.itemVenta}</h2>
            <img src={vestidoSarah} className="foto"></img>
            <button onClick={agregar} className="botones">+</button>
            <p> {contador} </p>
            <button onClick={quitar} className="botones">-</button>
        </div>
    );
}

export default ItemCount;