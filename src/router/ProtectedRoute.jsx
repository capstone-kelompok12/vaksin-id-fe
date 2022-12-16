import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getHeading } from '../components/Navbar'
import Auth from '../utils/Auth'

const INIT_TITLE = 'VAKSIN.ID'

const ProtectedRoute = () => {
  const [title, setTitle] = useState(INIT_TITLE)
  const {pathname} = useLocation()

  useEffect(() =>{
    const heading = getHeading(pathname)
    if(heading === ''){
      setTitle(INIT_TITLE)
    }else{
      setTitle(heading)
    }
  },[pathname])
  
  if(Auth.isAuthorized()){
    return <Navigate to='/dashboard' replace />
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Outlet />
    </>
  )
}

export default ProtectedRoute