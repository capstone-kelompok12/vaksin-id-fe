import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ManageBooking from '../pages/ManageBooking';
import ManageSession from '../pages/ManageSession';
import VaccineStock from '../pages/VaccineStock';
import VaccineList from '../pages/VaccineList';
import LoginPage from '../pages/Login';
import Landing from '../pages/Landing';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/manage-booking' element={<ManageBooking />}/>
          <Route path='/manage-session' element={<ManageSession />}/>
          <Route path='/vaccine-stock' element={<VaccineStock />}/>
          <Route path='/vaccine-list' element={<VaccineList />}/>
        </Route>
        <Route path='/' element={<ProtectedRoute />}>
          <Route index element={<Landing/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter;