import React, { useEffect, useState } from 'react'
import AdminSildebar from './AdminSildebar'
import {  useParams } from 'react-router-dom'
import { getcategorydetails, updatecategory } from '../api/CategoryApi'

const Updatecategory = () => {
    const params=useParams()
    const [category,setCategory]=useState("")
    const [error,setError]=useState("")
    const [success,setSuccess]=useState(false)



    useEffect(()=>{
        getcategorydetails(params.token)
        .then(data=>{
            console.log(data.category_name)
        })
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        updatecategory(category,params.token)
        .then(
            data=>{
                if(data.error){
                    setError(data.error)
                    setSuccess(false)
                }else{
                    setSuccess(true)
                    setError(false)
                }
            }
        )
    }
    const showerror=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showsuccess=()=>{
        if(success){
            return <div className='alert alert-primary'>Category UPdated Succesfully</div>
        }
    }

  return (
    <>
        {
            success?showsuccess():showerror()
        }
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <AdminSildebar category/>
                </div>
                <div className="col-md-8 mt-5">
                    <h1>Update category</h1>

                    <input type="text" value={category} placeholder='Enter category' className='form-control w-25'
                    onChange={e=>setCategory(e.target.value)}
                    />    
                    <div className="btn btn-primary mt-4" onClick={handleSubmit}>Update Category</div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Updatecategory