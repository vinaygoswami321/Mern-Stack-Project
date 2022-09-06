import React from "react";
import { useState } from "react";

export default function Form(){

    const[user,setUser] = useState({
        name: "" , phone_no:""
    }
    );

    const handleInputs = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
      console.log(user);
    }
    
   
    return(
        <form>
            <label >Name : </label>
            <input name ="name" id ="Name" type ="text" value ={user.name} onChange = {handleInputs} />
            <label >Phone-no : </label>
            <input name = "phone_no" id ="Phone-no" type = "text" value = {user.phone_no} onChange = {handleInputs} />
            <button onClick = {handleSubmit}>submit</button>
        </form>
    );
}