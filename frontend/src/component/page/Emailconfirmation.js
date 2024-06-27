import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verifyEmail } from '../../api/UserApi'

const Emailconfirmation = () => {
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)

  let token=useParams()
  useEffect(()=>{
    
    verifyEmail(token)
    .then(data=>{
        if(data.error){
          setError(data.error)
          setSuccess(false)
        }
        else if(data.message){
          setSuccess(data.message)
          setError(false)
         
        }
    })
  },[])

  const showError=()=>{
     if(setError){
      return <div className='alert alert-danger'>{error}</div>
     }
  }
  const showSuccess=()=>{
    if(setSuccess){
      return <div className='alert alert-primary'>{success}</div>
    }
  }

  return (
    <div>
        {
          success?showSuccess():showError()
        }
        <Link to="/login"> Please Click to go to signin</Link>
      
    </div>
  )
}

export default Emailconfirmation