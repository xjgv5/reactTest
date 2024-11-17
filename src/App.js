import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Componente2 from './Componente2';
import Componente3 from './Componente3';

function App() {
  const ficha_medica = {
    altura: "175cm",
    grupo: "O+",
    estado: "Bueno",
    alergias: "Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Componente3 
          nombre="Xavier" 
          apellidos="Gomez"
          ficha={ficha_medica}/>
        <Componente2 />
        <MyComponent />
        
      </header>


    </div>
  );
}

export default App;
