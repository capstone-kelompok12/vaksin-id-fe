import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import App2 from '../App2';

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/app2' element={<App2 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter;