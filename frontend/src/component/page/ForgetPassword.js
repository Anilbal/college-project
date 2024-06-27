import React, { useState } from 'react'
import { forgetpassword } from '../../api/UserApi'
const ForgetPassword = () => {

    const [email,setEmail]=useState('')
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        forgetpassword(email)
        .then(data=>{
            console.log(data)
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else if(data.message){
                setSuccess(data.message)
                setError('')
            }

        })
        
    }
    const showError=()=>{
        if(error){
         return <div className='alert alert-danger'>{error}</div>
       }
     }
     const showSuccess=()=>{
       if(success){
         return <div className='alert alert-primary'>{success}</div>
       }
     }
  return (
    <>
   
     {
        success? showSuccess():showError()
    }
     <div className="container w-25 border border-1 m-5 p-4 m-auto">
        <h1>Forgot Password</h1>
        <p>Enter your email to change your password</p>
        <input type="text" name='' id='' className='form-control' placeholder='Enter your  email' onChange={e=>setEmail(e.target.value)}/>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
     </div>
    </>
  )
}

export default ForgetPassword