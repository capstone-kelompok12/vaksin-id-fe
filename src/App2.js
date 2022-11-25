import logo from './logo.svg';
import './App.css';
import { Link, useLocation } from 'react-router-dom';

function App2() {
  const {pathname} = useLocation()
  
  const heading = pathname.slice(1).replaceAll('-', ' ').toUpperCase()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{heading}</h2>
        <p>
          Edit <code>src/App2.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={'/'}>Back Home</Link>
      </header>
    </div>
  );
}

export default App2;
