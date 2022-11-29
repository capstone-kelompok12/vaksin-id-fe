import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Auth from '../utils/Auth'

const ProtectedRoute = () => {
  
  if(Auth.isAuthorized()){
    return <Navigate to='/dashboard' replace />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default ProtectedRoute