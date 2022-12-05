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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SetupRouter />
      </ThemeProvider>
    </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);