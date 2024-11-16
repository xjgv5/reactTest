import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import { Componente2 } from './Componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Primer componente */}
        <Componente2 />
        <MyComponent />
      </header>


    </div>
  );
}

export default App;
