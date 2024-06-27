import React, { useEffect, useState } from 'react'
import { deleteProduct, getproduct } from '../api/ProductApi'
import AdminSildebar from './AdminSildebar'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'


const AdminProducts = () => {

    const [data,setData]=useState([])
    const [error,setError]=useState("")
    const[success,setSuccess]=useState(false)

    useEffect(()=>{
        getproduct()
        .then(data=>{
           if(data.error){
            setError(data.error)
            setSuccess(false)
           }
           else{
            setError(false)
            setSuccess(true)
            setData(data)
            console.log(data)
           }
        })
    },[])
    
     
    const handleDelete=(token)=>e=>{
        e.preventDefault()


        // SweetAlert npm 
        swal("product! What do you want to delete Product?", {
            buttons: {
              delete: {
                text: "delete",
                value: "delete",
              },
              no:{
                text:"no",
                value:"no"
              },
            },
          })
          .then((value) => {
            switch (value) {
           
              case "delete":
                swal("deleted","product deleted","success");
                deleteProduct(token)
                window.location.reload()
                break;
           
              case "catch":
                swal("Gotcha!", "Pikachu was caught!", "error");
                break;
           
              default:
                swal("Got away safely!");
            }
          });
    }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3"> 
            <AdminSildebar products/>

            </div>
            <div className="col-md-8">
                <h1> product</h1>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Product Quanity</th>
                            <th>Product Price</th>
                            <th>Product rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {   
                data.map((product,i)=>{
                    return <tr>
                            <th>{i+1}</th>
                            <th>{product.product_name}</th>
                            <th><img c src={`http://localhost:5000/${product.product_image}`} alt={product.product_image} height={200} /></th>
                            <th>{product.count_in_stock}</th>
                            <th>{product.product_price}</th>
                            <th>{product.rating}</th>
                            <th>
                                <Link to={`/admin/updateproduct/${product._id}`} ><button className='btn btn-primary'>Update</button></Link>
                                <button className='btn btn-danger' onClick={handleDelete(product._id)}>Delete</button>
                            </th>

                    </tr>
                    
                })
              
              }</tbody> 
            </table>
    <Link to="/admin/addproduct"><h3>Add product </h3></Link>

            </div>
        </div>

    </div>
    
    </>
  )
}

export default AdminProducts