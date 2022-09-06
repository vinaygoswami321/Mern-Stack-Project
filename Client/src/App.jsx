import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import {Routes,Route}  from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import Logout from "./components/Logout";
import "./App.css"
import { createContext } from "react";
import { useReducer } from "react";
import {initialState,reducer} from "../src/reducer/useReducer"
const userContext = createContext();

const Routing = () =>{
  return(
    <Routes>
      
    <Route exact path="/" element={<Home/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/contact" element = {<Contact/>} />
    <Route path="/login" element = {<Login/>} />
    <Route path="/signup" element = {<Signup/>} />
    <Route path="/logout" element = {<Logout/>} />
    <Route path="*" element={<Notfound />}/>

    </Routes>
  )
}

const  App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
      <userContext.Provider value={{state,dispatch}}>
      <Navbar />
      <Routing />
      </userContext.Provider>
    </>
  );
}

export {userContext};
export default App;
