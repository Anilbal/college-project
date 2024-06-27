import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./productdetaills.css"
import { getProductDetails } from '../api/ProductApi'
import { useDispatch } from 'react-redux'
import { add_item_to_cart } from '../reducers/cartAction'
import Navbar from './Navbar'
const ProductDetails = () => {
	const disptach=useDispatch()
    const params=useParams()
    const id=params.id

    const [product,setProduct]=useState({})

    useEffect(()=>{
        getProductDetails(id)
        .then(data=>{
            setProduct(data)
        })
    })
	const handleSubmit=(e)=>{
		e.preventDefault()
		disptach(add_item_to_cart(id,1))
	}
  return (
    <>
        	<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-4">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={`http://localhost:5000/${product.product_image}`} style={{height:"300px"}}/></div>
						 
						</div>
						
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{product.product_name}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							
						</div>
						<p className="product-description">{product.product_description}</p>
						<h4 className="price">current price: <span>${product.product_price}</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>({product.rating})</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
						<div className="action" style={{display:'flex',gap:"10px"}}>
							<button className="add-to-cart btn btn-default" type="button" onClick={handleSubmit}>add to cart</button>
							<button className="like btn btn-default" type="button"><i class="bi bi-heart"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

    </>
  )
}

export default ProductDetails