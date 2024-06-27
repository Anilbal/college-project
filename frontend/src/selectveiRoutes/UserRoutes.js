import React from 'react'
import { isAuthenicated } from '../api/UserApi'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const UserRoutes = () => {
    const navigate=useNavigate()
  return (
    <>
    {
            isAuthenicated() && isAuthenicated().role==0? <Outlet/>:
            <Navigate to="/signin"/>

    }
    </>
  )
}

export default UserRoutes