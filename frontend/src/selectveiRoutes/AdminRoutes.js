import React from 'react'
import { isAuthenicated } from '../api/UserApi'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const AdminRoutes = () => {
    const navigate=useNavigate()
  return (
    <>
        {
            isAuthenicated() && isAuthenicated().role==1? <Outlet/>:
            <Navigate to="/signin"/>
        }
    </>
  )
}

export default AdminRoutes