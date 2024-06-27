export const getproduct=()=>{
    return fetch(  `http://localhost:5000/product/getproduct`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const deleteProduct=(token)=>{
    return fetch(`http://localhost:5000/product/deleteproduct/${token}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addProduct=(formData)=>{
    return  fetch (`http://localhost:5000/product/addproduct`,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const getProductDetails=(id)=>{
    return fetch(`http://localhost:5000/product/getproductdetail/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const updateProduct=(id,formData)=>{
    return  fetch (`http://localhost:5000/product/updateproduct/${id}`,{
        method:"PUT",
        body:formData
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}