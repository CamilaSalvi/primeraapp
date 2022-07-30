import './NavBar.css';
import corazon from './corazon.png';
import hilo from './hilo.png';

function NavBar() {
  return (
    <div> 
      <h1 className='titulo'>Lady Threads</h1>
      <nav>
      <ul className='nabbar'>
        <img src={hilo} className='hilo'></img>
        <li className='nabbar__items'>
          Mi tienda
        </li>
        <li className='nabbar__items'>
          Artículos 
        </li>
        <li className='nabbar__items'>
          Contacto 
        </li>
        <li className='nabbar__items'> Medios de Pago</li>
        <img src={corazon} alt='corazon rojo fondo transparente' className='corazon'></img>
      </ul>
      </nav>
    </div>
  );
}

export default NavBar;