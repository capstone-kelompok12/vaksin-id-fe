import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const exampleData = useSelector(state => state.example.data)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          data from state management: <code>{exampleData}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={'/app2'}>Ke App2</Link>
      </header>
    </div>
  );
}

export default App;
