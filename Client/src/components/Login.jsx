import React from "react";
import { useState} from "react";
import loginlogo from "../Images/login.png";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink , useNavigate} from "react-router-dom";
import { useContext } from "react";
import {userContext} from "../App";
const Login = () => {
  
    //eslint-disable-next-line   
  const {state,dispatch} = useContext(userContext);
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });

  const navigate = useNavigate();

  const handleLogin = async() => {
  
          const res = await fetch('/login',
                {
                  method : 'POST',
                  headers : {
                    "Content-Type" : "application/json"
                  },
                  body : JSON.stringify({
                     "email" : email.email,
                     "password" : password.password
                  })
                }
          );
          
          
          const data = await res.json();
          if(res.status === 422 || !data){
            window.alert(`Error : ${data.error}`);
            setEmail({email : ""});
            setPassword({password : ""});
          }
          else if(res.status === 200){
            dispatch({type : "USER",payload : true})
            navigate('/');
          }
          
  }

  return (
    <div
      className=" d-flex align-items-center justify-content-center"
      style={{ height: "92vh" }}
    >
      <section
        className="d-flex shadow-lg p-3 mb-5 bg-white rounded-5"
        style={{ width: "50vw", height: "60vh" }}
        id="signup-section"
      >
        <div style={{ width: "100%" }} className="p-5">
          <h2 className="head mb-4">Login</h2>

          <div className="d-flex justify-content-between">
            <div className=" w-50">
              <form>
                <div className="d-flex flex-column p-3">
                  <div className="d-flex mb-4 ">
                    <i className="zmdi zmdi-email zmdi-hc-2x pe-2"></i>
                    <input
                      type="text"
                      placeholder="Email address"
                      value={email.email}
                      onChange={(e) => {setEmail({...email,email : e.target.value})}}
                    />
                  </div>
                  <div className="d-flex mb-4 ">
                    <i className="zmdi zmdi-key zmdi-hc-2x pe-2"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password.password}
                      onChange={(e) => {setPassword({...password,password : e.target.value})}}
                    />
                  </div>

                  <div className="my-4" style={{ paddingLeft: "2.5vw" }}>
                    <button
                      type="button"
                      className="btn btn-light "
                      style={{ backgroundColor: "#e3f2fd", width: "100px" }}
                      onClick = {handleLogin}
                    >
                      login
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className=" w-50">
              <figure>
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                  src={loginlogo}
                  alt="signup"
                />
                <div className="d-flex ms-5">
                  <NavLink
                    className="mx-auto"
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Create Account
                  </NavLink>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
