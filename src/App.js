import logo from './logo.svg';
import './App.css';
import Foo from './Foo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Foo />
      </header>
    </div>
  );
}

export default App;
