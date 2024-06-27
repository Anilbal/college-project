import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenicate, isAuthenicated, signin } from "../api/UserApi";
import Navbar from "./Navbar";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccess(false);
      } else {
        setSuccess(true);
        authenicate(data);
      }
    });
  };

  const redirect = () => {
    if (success) {
      if (isAuthenicated && isAuthenicated().role == 0) {
        navigate("/");
      } 
      else {
        navigate("/admin/dashboard");
      }
    }
  };
  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };
  return (
    <>
      {showError()}
      {redirect()}

      <div className="container-fluid text-center">
        <main className="form-signin w-25 m-auto border border-3 border-primary p-3 rounded-4">
          <form>
            <img
              className="https://th.bing.com/th/id/OIP.aYtUBaDupM6IE7O7vD7r5gHaEJ?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              src="/docs/5.2/assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="/signin"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            Don't have a account?please <Link to="/register">Register</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
      </div>
    </>
  );
};

export default Signin;
