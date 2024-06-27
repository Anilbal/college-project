import React, { useState } from 'react'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import AdminSildebar from './AdminSildebar'
import { addcategory } from '../api/CategoryApi'
const Addcategory = () => {
    const [category,setCategory]=useState("")
    const [error,setError]=useState("")
    const [success,setSuccess]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        addcategory(category)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }else{
                setSuccess(true)
                setError(false)
            }
        })
    }
    const showerror=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
   
    const showsuccess=()=>{
        if(success){
            return <div className='alert alert-primary'>Category Added</div>
        }
    }
  return (
    <>
        <Navbar/>
        {
            success?showsuccess():showerror()
        }
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <AdminSildebar category/>
                </div>
                <div className="col-md-8 mt-5">
                    <h1>Add category</h1>

                    <input type="text" placeholder='Enter category' className='form-control w-25'
                    onChange={e=>setCategory(e.target.value)}
                    />    
                    <div className="btn btn-primary mt-4" onClick={handleSubmit}>Add Category</div>

                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Addcategory