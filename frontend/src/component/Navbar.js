import React from "react";
import { Link } from "react-router-dom";
import { isAuthenicated } from "../api/UserApi";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = isAuthenicated();
  const cart_items = useSelector((state) => state.cart.cart_items);
  const cart_length = cart_items.length;
  console.log(cart_length);
  return (
    <>
      <div className="container-fluid bg-warning custom-navbar ">
        <div className="row align-items-center">
          <div className="col-3 ">
            <Link className="navbar-brand fs-2 fw-bolder text-muted" to="/">
              E-commerce
            </Link>
          </div>

          <div className="col-7 ">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
          {isAuthenicated() && isAuthenicated().role == 0 && (
            <div className="col-2 d-flex justify-content-evenly">
              <Link to="/login">
                <i className="bi bi-box-arrow-in-right fs-2"></i>
              </Link>
              <Link to="/register">
                <i className="bi bi-box-arrow-in-down fs-2"></i>
              </Link>
              <Link to="/merncart" className="position-relative">
                <i className="bi bi-cart  fs-2 position-relative"></i>
                <span class="position-absolute top-50 start-90 translate-middle badge rounded-pill bg-danger">
                  {
                    cart_length
                  }
                  <span class="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>
          )}
          {isAuthenicated() && isAuthenicated().role == 1 && (
            <div className="col-2 d-flex justify-content-evenly">
              <Link to="/login">
              <i class="bi bi-person-check" style={{fontSize:"30px"}}></i>
              </Link>
              <Link to="/register">
                <i className="bi bi-box-arrow-in-down fs-2"></i>
              </Link>
            </div>
          )}
          {!isAuthenicated() && (
            <div className="col-2 d-flex justify-content-evenly">
              <Link to="/login">
                <i className="bi bi-box-arrow-in-right fs-2"></i>
              </Link>
              <Link to="/register">
                <i className="bi bi-box-arrow-in-down fs-2"></i>
              </Link>  
            </div>
          )}


        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
