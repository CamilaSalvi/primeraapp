import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import './Components/NavBar/NavBar.css';
import ItemCount from './Components/ItemCount/ItemCount';
import './Components/ItemCount/ItemCount.css';


function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <NavBar> </NavBar>
        <ItemCount itemVenta='Vestido Sarah'></ItemCount>
      </body>

    </div>
  );
}

export default App;
