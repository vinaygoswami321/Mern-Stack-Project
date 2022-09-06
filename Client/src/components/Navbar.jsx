import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../Images/4d5ccb10ba0579853eafa558fa324b87.png";
import { useContext } from "react";
import { userContext } from "../App";



const Navbar = () => {

  //eslint-disable-next-line  
  const { state, dispatch } = useContext(userContext);

  const NavRoutes = () => {

    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      )
    }
    else {
      return(
      <>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Registration
          </NavLink>
        </li>
      </>
      )
    }
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light  "
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <NavLink className="navbar-brand ps-2" to="/">
          <img className="w-25" src={logo} alt="nav-icon" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto ">
            <NavRoutes />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
