import React, { useState } from 'react'
import { resetVerify } from '../../api/UserApi'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const token=useParams()
  const handleSubmit=(e)=>{
    e.preventDefault()
    resetVerify(token,password)
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
      showError()
     }
     {
      showSuccess()
     }
         <div className="container w-25 border border-1 m-5 p-4 m-auto">
        <h1>Forgot Password</h1>
        <p>Email has been verified !! Please enter your new Password</p>
        <input type="password" name='' id='' className='form-control' placeholder='Enter your new password' onChange={e=>setPassword(e.target.value)}/>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
     </div>
    </>
  )
}

export default ResetPassword