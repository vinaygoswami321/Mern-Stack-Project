import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import signuplogo from "../Images/signup.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSignup = async () => {
    const { name, email, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert(`Error : ${data.error}`);
    }

    if (res.status === 201) {
      navigate("/login");
    }

  };

  return (
    <div
      className=" container d-flex align-items-center justify-content-center"
      style={{ height: "92vh" }}
    >
      <section
        className="d-flex shadow-lg p-3 mb-5 bg-white rounded-5"
        style={{ width: "50vw", height: "70vh" }}
        id="signup-section"
      >
        <div style={{ width: "100%" }} className="container p-5">
          <h2 className="head mb-5">Sign up</h2>

          <div className="container  d-flex justify-content-between">
            <div className=" w-50">
              <form>
                <div className="container d-flex flex-column p-3">
                  <div className="d-flex mb-3 ">
                    <i className="zmdi zmdi-account zmdi-hc-2x"></i>
                    <input
                      type="text"
                      placeholder="Your Name"
                      autoComplete="true"
                      value={user.name}
                      name="name"
                      onChange={handleChange}
                      className="ms-3"
                    />
                  </div>
                  <div className="d-flex mb-3 ">
                    <i className="zmdi zmdi-email zmdi-hc-2x me-2 pe-1"></i>
                    <input
                      type="text"
                      placeholder="Email address"
                      autoComplete="true"
                      name="email"
                      onChange={handleChange}
                      value={user.email}
                    />
                  </div>
                  <div className="d-flex mb-3 ">
                    <i className="zmdi zmdi-key zmdi-hc-2x me-2"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="false"
                      onChange={handleChange}
                      value={user.password}
                    />
                  </div>
                  <div className="d-flex mb-3 ">
                    <i className="zmdi zmdi-key zmdi-hc-2x me-2"></i>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="false"
                      name="cpassword"
                      onChange={handleChange}
                      value={user.cpassword}
                    />
                  </div>
                  <div className="my-4" style={{ paddingLeft: "2.5vw" }}>
                    <button
                      type="button"
                      className="btn btn-light "
                      name="signup"
                      onClick={handleSignup}
                      style={{ backgroundColor: "#e3f2fd", width: "100px" }}
                    >
                      register
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="container w-50">
              <figure>
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                  src={signuplogo}
                  alt="signup"
                />
              </figure>
              <div className="d-flex">
                <NavLink
                  className="mx-auto"
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  I am already registered ?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
