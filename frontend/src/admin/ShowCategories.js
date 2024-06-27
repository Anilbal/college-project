import React, { useEffect, useState } from 'react'
import AdminSildebar from './AdminSildebar'
import {  categoryDelete, showCategory } from '../api/CategoryApi'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const ShowCategories = () => {
    const [category,setCategory]=useState([])
    useEffect(() => {
      showCategory()
      .then(data=>setCategory(data))
    }, [])
    
    const handleDelete=(token)=>e=>{
        e.preventDefault()


        // SweetAlert npm 
        swal("A wild Pikachu appeared! What do you want to do?", {
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
                swal("deleted","category deleted","success");
                categoryDelete(token)
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
                <div className="col-md-4">
                    <AdminSildebar category/>
                </div>
                <div className="col-md-8 mt-5">
                    <h1>Categories</h1>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        category && category.map((c,i)=>{
                           return <tr>
                                    <td key={i}>{c.category_name}</td>
                                    <td>
                                        <Link to={`/admin/updatecategory/${c._id}`}><div className='btn btn-primary' >Update</div></Link>
                                        <div className='btn btn-danger' onClick={handleDelete(c._id)}>Delete</div>
                                    </td>
                           </tr>
                        })
                    }
                        </tbody>
                   
                    </table>
                    <Link to="/admin/addcategory"><h3>Add Category</h3></Link>
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowCategories