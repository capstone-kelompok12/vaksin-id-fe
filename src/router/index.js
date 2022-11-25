import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Layout from '../pages/Layout';
import ManageBooking from '../pages/ManageBooking';
import ManageSession from '../pages/ManageSession';
import VaccineStock from '../pages/VaccineStock';
import VaccineList from '../pages/VaccineList';

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='/manage-booking' element={<ManageBooking />}/>
          <Route path='/manage-session' element={<ManageSession />}/>
          <Route path='/vaccine-stock' element={<VaccineStock />}/>
          <Route path='/vaccine-list' element={<VaccineList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter;