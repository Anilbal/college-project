import React, { useEffect, useState } from "react";
import { getproduct } from "../api/ProductApi";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getproduct()
      .then((data) => {
        setProduct(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-fluid text-muted text-center text-decoration-underline mt-4">
       <u> <h1>Product:</h1></u>
      </div>
      <div className="container-fluid my-4">
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {product.map((p, i) => {
          return (
            <div className="container mt-5">
              <div className="card">
                <img
                  src={`http://localhost:5000/${p.product_image}`}
                  className="card-img-top"
                  alt="..."
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.product_name}</h5>
                  <p className="card-text text-truncate">{p.product_description}</p>
                </div>
      
                <Link  to={`/productdetails/${p._id}`}><div className="btn btn-primary w-100">See more</div></Link>
              </div>

            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Product;
