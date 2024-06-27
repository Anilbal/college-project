import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Products from './page/Products'
import Emailconfirmation from './component/page/Emailconfirmation'
import ForgetPassword from './component/page/ForgetPassword'
import ResetPassword from './component/page/ResetPassword'
import Dashboard from './admin/Dashboard'
import ShowCategories from './admin/ShowCategories'
import Addcategory from './admin/Addcategory'
import Updatecategory from './admin/Updatecategory'

import AdminProducts from './admin/AdminProducts'
import AddProduct from './admin/AddProduct'
import UpdateProduct from './admin/UpdateProduct'
import ProductDetails from './component/ProductDetails'
import MernCart from './component/page/MernCart'
import AdminRoutes from './selectveiRoutes/AdminRoutes'
import UserRoutes from './selectveiRoutes/UserRoutes'
import Register from './component/Register'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Sign from './page/Sign'


const Routess = () => {
  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Products/>}></Route>

        <Route path='/login' element={<Sign/>}></Route>
        <Route path='/register' element={<Register/>}></Route>

        <Route path='/verifyemail/:token' element={<Emailconfirmation/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path='/resetpassword/:token' element={<ResetPassword/>}></Route>

       
        {/* Product */}
        
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>

        {/* signin here for admin and user*/}
        {/* Admin */}

        <Route path="/" element={<AdminRoutes/>}>
        <Route path='admin/dashboard' element={<Dashboard/>}></Route>
        <Route path='/admin/category' element={<ShowCategories/>}></Route>
        <Route path='/admin/addcategory' element={<Addcategory/>}></Route>
        <Route path='/admin/updatecategory/:token' element={<Updatecategory/>}></Route>
        <Route path='/admin/product' element={<AdminProducts/>}></Route>
        <Route path='/admin/addproduct' element={<AddProduct/>}></Route>
        <Route path='/admin/updateproduct/:id' element={<UpdateProduct/>}></Route>
        </Route>

        {/* user */}
        <Route path="/" element={<UserRoutes/>}>
        <Route path="/merncart" element={<MernCart/>}></Route>
        </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default Routess