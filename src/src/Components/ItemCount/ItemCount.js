
import './ItemCount.css';
import {useState} from 'react';
import vestidoSarah from './Item/img/vestidoSarah.jpg';

function ItemCount (props) {
    const [contador, setContador] = useState(0);
    function agregar(){
     setContador(contador+1);
    }

    function quitar(){
        setContador(contador-1);
    }

    return (
        <div>
            <p className='greeting'>{props.greeting}</p>
            <div className='tarjeta1'>
                <h2>{props.itemVenta}</h2>
                <img src={vestidoSarah} alt="vestido Sarah" className="foto" id="VestidoSarah"></img>
                <p className='texto'>Vestido de novia. Verano 2022-2023. Escote en "v" con detalles en los hombros y la cintura con diamantes. Falda de tul y trapeado en el pecho. Talle Único.</p>
                <p>Cantidad Solicitada</p>
                <button onClick={agregar} className="botones">+</button>
                <p> {contador} </p>
                <button onClick={quitar} className="botones">-</button>
            </div>
        </div>

    );
}

export default ItemCount;