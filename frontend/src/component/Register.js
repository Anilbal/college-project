import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/UserApi'
import Navbar from "../component/Navbar"
const Register = () => {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState("")
  const [error,setError]=useState('')
  const [success,setSuccess]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
      userRegister(username,email,password)
      .then(data=>{
        if(data.error){
          setError(data.error)
          setSuccess(false)
        }
        else{
          setSuccess(true)
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
        return <div className='alert alert-primary'>Email Verification has been sent </div>
      }
    }
  
  return (
    <>
        <div>
          {
            showError()
          }
          {
            showSuccess()
          }
        </div>
        <div className="container-fluid my-5 text-center">
        <main className="form-signin w-25 m-auto  border border-primary border-2 p-2">
            <form>
              <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          
             
              <div className="form-floating">
                <input type="username" className="form-control" id="username" placeholder="name@example.com" onChange={e=>setUsername(e.target.value)}/>
                <label for="username">username</label>
              </div> 

              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                <label for="floatingInput">Email address</label>
              </div>
             
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                <label for="floatingPassword">Password</label>
              </div>
             
          
              
              <button className="w-100 btn btn-lg btn-primary" type="submit"  onClick={handleSubmit} >Register</button>
            
              Have a account?please <Link to="/login">Sign in</Link>

              <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
          </main>
    </div>
    </>
  )
}

export default Register