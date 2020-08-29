import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";

const Signup = () => {
  const [values, setValues] = useState({
    first: "",
    last: "",
    school: "",
    address: "",
    city: "",
    email: "",
    mobile: "",
    password: "",
    error: false,
    success: false
  });

  const { first, last, school, address, city, email, mobile, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ first, last ,school, address,city, email, mobile, password })
      .then(data => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            first: "",
            last: "",
            school: "",
            address: "",
            city: "",
            email: "",
            mobile: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <p>Create Your Account .</p>
              <label className="text-light">First Name</label>
              <input
                className="form-control"
                onChange={handleChange("first")}
                type="text"
                value={first}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Last Name</label>
              <input
                className="form-control"
                onChange={handleChange("last")}
                type="text"
                value={last}
              />
            </div>
            <div className="form-group">
              <label className="text-light">School Name</label>
              <input
                className="form-control"
                onChange={handleChange("school")}
                type="text"
                value={school}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Address</label>
              <input
                className="form-control"
                onChange={handleChange("address")}
                type="text"
                value={address}
              />
            </div>
            <div className="form-group">
              <label className="text-light">City</label>
              <input
                className="form-control"
                onChange={handleChange("city")}
                type="text"
                value={city}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Mobile Number</label>
              <input
                className="form-control"
                onChange={handleChange("mobile")}
                type="text"
                value={mobile}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="SIGN UP PAGE" description="A page for user to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
