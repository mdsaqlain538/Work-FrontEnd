import React , {Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import Route from 'react-router-dom';
import Home from "./Home";
import Logo from '../pp.jpeg'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#34FBF8" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div >
    <ul className="nav nav-tabs bg-dark">
        {isAuthenticated() && isAuthenticated().user.role===0 && (
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/welcome")}
            className="nav-link"
            to="/welcome"
          >
            Dashboard
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role===0 && (
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            Profile
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role===0 && (
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/password")}
            className="nav-link"
            to="/password"
          >
            Change Password
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role===1 && (
        <li className="nav-item mt-2">
        <Link
          style={currentTab(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/signup")}
            className="nav-link"
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li className="nav-item mt-2">
          <Link
            style={currentTab(history, "/signin")}
            className="nav-link"
            to="/signin"
          >
            Sign In
          </Link>
        </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item mt-2">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
