
import './App.css';
import BarraNav from './componentes/BarraNav';
//import Home from './paginas/Home';
//import Login from './paginas/Login';
//import Registro from './paginas/Registro';
//import { Link } from 'react-router-dom';
//import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Rutas from './componentes/Rutas';
import Footer from './componentes/Footer';

function App() {
  //let edad=27;
  /*return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={tokyo} className="App-logo" alt="logo" />
         <p>Mi edad es {edad}</p>
      </header>
    </div>
    </>
  );*/

  return (
    <>
    <body>
      <h1>Mercadito Libre</h1>

      <div className="App">
        <BarraNav/>
       
      <Rutas/>
      </div>
      <Footer/>

    </body>
    </>
  );
}

export default App;

