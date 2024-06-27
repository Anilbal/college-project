import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenicated } from '../api/UserApi'

const AdminSildebar = ({category,home,products,orders,customers}) => {
    // const [username,setUsernmae]
  return (
    <>
         <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "280px"}}>
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <i className="bi pe-none me-2" width="40" height="32"></i>
      <span className="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        {
          home?<Link to="/admin/dashboard" className="nav-link active" aria-current="page">
          <i className="bi pe-none me-2" width="16" height="16"></i>
          Home
        </Link>:<Link to="/admin/dashboard" className="nav-link " aria-current="page">
          <i className="bi pe-none me-2" width="16" height="16"></i>
          Home
        </Link>
        }
        
      </li>
      <li>
        {
          category?<Link to="/admin/category" className="nav-link active">
          <i className="bi pe-none me-2" width="16" height="16"></i>
          Categories
        </Link>:<Link to="/admin/category" className="nav-link link-body-emphasis">
          <i className="bi pe-none me-2" width="16" height="16"></i>
          Categories
        </Link>
        }
        
      </li>
      <li>
        {
          products?<Link to="/admin/product" className="nav-link active">
          <i className="bi pe-none me-2" width="16" height="16"></i>
          Products
        </Link>:<Link to="/admin/product" className="nav-link link-body-emphasis">
          <i className="bi pe-none me-2" width="16" height="16"></i>
          Products
        </Link>
        }
      </li>
      
    </ul>
    <hr/>
    <div className="dropdown">
      <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>{isAuthenicated().username}</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><Link className="dropdown-item" to="#">New project...</Link></li>
        <li><Link className="dropdown-item" to="#">Settings</Link></li>
        <li><Link className="dropdown-item" to="#">Profile</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
      </ul>
    </div>
  </div>
    </>
  )
}

export default AdminSildebar