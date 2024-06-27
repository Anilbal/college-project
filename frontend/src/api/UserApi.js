import { API } from "../config"

export const userRegister=(username,email,password)=>{
    let user={username,email,password}
    return fetch(`http://localhost:5000/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const verifyEmail=(token)=>{
    return fetch(`http://localhost:5000/verifyemail/${token.token}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const forgetpassword=(email)=>{
    let user={email}
    return fetch(`http://localhost:5000/resetpassword`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
   
}

export const resetVerify=(token,password)=>{
    let user={password}
    return fetch(`http://localhost:5000/resetpassword/${token.token}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
   

}

export const signin=(email,password)=>{
    let user={email,password}
    console.log(user)
    return fetch(`http://localhost:5000/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const authenicate=(data)=>{
    localStorage.setItem("jwt",JSON.stringify(data))
}

export const isAuthenicated=()=>{
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
}