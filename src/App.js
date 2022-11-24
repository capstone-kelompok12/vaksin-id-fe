import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Stack } from '@mui/material';
import useCurrentScreen from './hooks/useCurrentScreen';

function App() {
  const exampleData = useSelector(state => state.example.data)
  // cara ambil kondisi current screen
  const {mobile, desktop} = useCurrentScreen()

  console.log({mobile, desktop})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* contoh cara setting responsiveness */}
        <Stack spacing={2} direction={mobile ? 'column' : 'row'}>
          <Button variant='contained' color='primary'>Primary Button</Button>
          <Button variant='contained' color='secondary'>Secondary Button</Button>
          <Button variant='contained' color='success'>Success Button</Button>
          <Button variant='contained' color='info'>Info Button</Button>
          <Button variant='contained' color='warning'>Warning Button</Button>
          <Button variant='contained' color='danger'>Danger Button</Button>
        </Stack>
        <p>
          Mode <code>desktop</code> seharusnya button berjejer menyamping, pada <code>mobile</code> berjejer kebawah.
        </p>
        <p>Current screen: {mobile ? 'mobile': 'desktop'}</p>
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
