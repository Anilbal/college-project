import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getproduct } from '../api/ProductApi'

const Pr = () => {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    getproduct()
    .then(data=>{
      setProduct(data)
    })
  },[])
  return (
    <>
     <div className="container-fluid">
        <div className="row">
            <div className="col-2 ">


                <h3 className="mt-4"><Link to="" className="text-info">Top sale</Link></h3>
                <h3 ><Link to="" className="text-danger">Flash sale</Link></h3>
                <h3><Link to="" className="text-success">New arrival</Link></h3>
                 
                <h2 className="mt-4 text-primary">Categories</h2>

                <div className="form-check text-info">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Laptops
                    </label>
                  </div>

                  <div className="form-check text-info">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Shoes
                    </label>
                  </div>

                  <div className="form-check text-info">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Mobiles
                    </label>
                  </div>

                  <div className="form-check text-info">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Gym and fitness
                    </label>
                  </div>

                  <div className="form-check text-info">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Clothes
                    </label>
                  </div>

                  <div className="form-check text-info">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Kids
                    </label>
                  </div>

                  <h2 className="mt-4 text-primary" >Prices</h2>
                  <div className="form-check mt-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      All
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Above Nrs.100000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Between Nrs.80000-100000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Between Nrs.50000-80000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Between Nrs.20000-50000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Between Nrs.5000-20000
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Below Nrs.5000
                    </label>
                  </div>
            </div>


            <div className="col-10 border border-1">
              <div className="container-fluid mt-3 ">
                <div className="row row-cols-1 row-cols-md-1 g-3">
                  {
                    product.map((p,i)=>{
                      return <div className="col custom-height">
                      <div className="card">
                        <img src={`http://localhost:5000/${p.product_image}`} className="card-img-top" height="140px" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{p.product_name}</h5>
                          <p className="card-text text-truncate">{p.product_description}</p>
                        </div>
                        <Link to={`/productdetails/${p._id}`}><div className='btn btn-primary form-control'>See More</div></Link>
                      </div>
                    </div>
                    })
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pr