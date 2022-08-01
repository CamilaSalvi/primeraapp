import './CartWidget.css';
import carrito from './carrito.png';

function CartWidget() {
    return(
    <div>
        <img src={carrito} alt="carrito con fondo blanco" className='carrito'></img>
    </div>
    );
}

export default CartWidget;