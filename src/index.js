import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SetupRouter from './router';
import { Provider } from 'react-redux'
import { store } from './store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'react-slideshow-image/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <SetupRouter />
      </ThemeProvider>
    </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);