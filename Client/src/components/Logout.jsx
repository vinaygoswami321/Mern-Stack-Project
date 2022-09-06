import React from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {userContext} from "../App";

const Logout = () => {
     //eslint-disable-next-line  
    const {state,dispatch} = useContext(userContext);
    const navigate = useNavigate();
    useEffect(() => {
    
      fetch("/logout", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        }).then((res) => {
            dispatch({type : "USER",payload : false})
            navigate('/')
        });

    }, [navigate,dispatch]);

    return (
        <>
            <h1>logout</h1>
        </>
    );
};

export default Logout;
