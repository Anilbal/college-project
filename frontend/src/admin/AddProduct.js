import React, { useEffect, useRef, useState } from 'react'
import AdminSildebar from './AdminSildebar'
import {showCategory} from "../api/CategoryApi"
import { addProduct } from '../api/ProductApi'
const AddProduct = () => {

    const [categories,setCategories]=useState([])
    const [product,setProduct]=useState({
        product_name:"",
        product_price:"",
        product_description:"",
        count_in_stock:"",
        product_image:"",
        rating:"",
        category:"",
        error:"",
        success:"",
        formdata:""
    })
    let sel_ref=useRef()
    let file_ref=useRef()
    const {product_name,product_price,product_description,count_in_stock,product_image,rating,category,error,success,formdata}=product
    useEffect(()=>{
        showCategory()
        .then(data=>{
            setCategories(data)

        })
        setProduct({...product,formdata:new FormData})
       
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        addProduct(formdata)
        .then(data=>{
            if(data.error){
                setProduct({...product,error:data.error,success:false})
            }
            else{
                console.log(data)
                setProduct({success:true,product_name:"",product_image:"",product_price:"",rating:"",product_description:"",count_in_stock:"",formdata:new FormData,error:"",success:""})
                sel_ref.current.value=""
                file_ref.current.value=""
            }
        })
    }
    const handleChange=(key)=>(e)=>{
        let value
        if(key=="product_image"){
            value=e.target.files[0]
        }
        else{
            value=e.target.value 
        }
        setProduct({...product,[key]:value})
        formdata.set(key,value)
        console.log(formdata)
    }
    const showError=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess=()=>{
        if(success){
            return <div className='alert alert-primary'>Product Added</div>
        }
    }

  return (
    <>
         {
            success?showSuccess():showError()
         }
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <AdminSildebar home/>
                </div>
                <div className="col-md-8">
                    <h1>Add Product</h1>
                    <form action="" className='w-50 p-3  border'>
                        <label htmlFor="product_name">Product Name</label>
                        <input type="text" className='form-control' id='product_name' onChange={handleChange("product_name")} value={product_name}/>

                        <label htmlFor="product_price">Product Price</label>
                        <input type="text" className='form-control' id='product_price' onChange={handleChange("product_price")} value={product_price}/>

                        <label htmlFor="product_description">Product Description</label>
                        <input type="text" className='form-control' id='product_description'  onChange={handleChange("product_description")} value={product_description}/>

                        <label htmlFor="count_in_stock">Stock</label>
                        <input type="text" className='form-control' id='count_in_stock'  onChange={handleChange("count_in_stock")} value={count_in_stock}/> 

                        <label htmlFor="product_rating">Product Rating</label>
                        <input type="text" className='form-control' id='product_rating'  onChange={handleChange("rating")} value={rating}/>

                        <label htmlFor="product_image">Product Image</label>
                        <input type="file" className='form-control' id='product_image'  onChange={handleChange("product_image")} ref={file_ref} />

                        <label htmlFor='category'>Category</label>
                        <select name="category" id="category" onChange={handleChange("category")}ref={sel_ref}>
                            <option value=""></option>
                            {
                                categories.map((c,i)=>{
                                   return  <option className="form-control" value={c._id} key={i} >{c.category_name}</option>
                                })
                            }
                        </select>
                        <button className='btn btn-primary' onClick={handleSubmit}>Add Product</button>
                    </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default AddProduct