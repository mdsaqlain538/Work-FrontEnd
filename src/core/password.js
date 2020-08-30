import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { ChangePassword, isAuthenticated } from "../auth/helper/index";


const Password = () => {

  const [values, setValues] = useState({
    mail:"",
    oldpass: "",
    newpass: "",
    confirm: "",
    error: false,
    success: false
  });

  const {mail,oldpass, newpass, confirm, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    ChangePassword({ mail,oldpass, newpass ,confirm  })
      .then(data => {
        //console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            mail:"",
            oldpass: "",
            newpass: "",
            confirm: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in Change Password"));
  };

  const signUpForm = ({email}) => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
          <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"          
                type="mail"
                onChange={handleChange("mail")}
                value={mail}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Old Password</label>
              <input
                className="form-control"          
                type="password"
                onChange={handleChange("oldpass")}
                value={oldpass}
              />
            </div>
            <div className="form-group">
              <label className="text-light">New Password</label>
              <input
                className="form-control"
                onChange={handleChange("newpass")}
                type="password"
                value={newpass}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Confirm</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange("confirm")}
                value={confirm}
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
            Password Updated
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

  const {
    user:{first,last,school,address,city,email,mobile}
} = isAuthenticated();

  return (
    <Base title="Update Password" description="Fill The Details to Update Password">
      {successMessage()}
      {errorMessage()}
      {signUpForm({email})}
      <p>There is some problem with my encrypt and database I am sending you the screenshot where the old password and the encrypt password key value matches that means we can update the password. Thank You Sir for Understanding I can Explain u the code if you feel i havent done properly.</p>
    </Base>
  );
};

export default Password;
