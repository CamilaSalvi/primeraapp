
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import './Components/NavBar/NavBar.css';
import ItemCount from './Components/ItemCount/ItemCount';
import './Components/ItemCount/ItemCount.css';
import CartWidget from './Components/CartWidget/CartWidget';
import './Components/CartWidget/CartWidget.css';
import ItemListContainer from './Components/ItemCount/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <NavBar> 

        </NavBar>
        <CartWidget></CartWidget>
        <ItemCount greeting='Bienvenida a nuestra tienda de vestidos de novias. Nuestro sueño es el tuyo.' itemVenta='Vestido Sarah'></ItemCount>

        <ItemListContainer></ItemListContainer>
      </body>

    </div>
  );
}

export default App;
