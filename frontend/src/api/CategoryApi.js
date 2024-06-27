export const showCategory=()=>{
    return fetch("http://localhost:5000/category/getcategory")
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addcategory=(category_name)=>{
    let category={category_name}
    return fetch(`http://localhost:5000/category/addcategory`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getcategorydetails=(token)=>{
    return fetch(`http://localhost:5000/category/getcategorydetail/${token}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const updatecategory=(category_name,token)=>{
    let category={category_name}
    return fetch(`http://localhost:5000/category/updatecategory/${token}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const categoryDelete=(token)=>{
    return fetch(`http://localhost:5000/category/deletecategory/${token}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}