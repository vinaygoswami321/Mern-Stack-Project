import React from "react";
import { useState , useEffect } from "react";

const Contact = () => {

  const [user,setUser] = useState({
         name : "",
         email : "",
         message : ""
  });
  
  const handleMessage = async (e) =>{
        setUser({...user,[e.target.name] : e.target.value});
  }
  
  const handleSubmit = async (e) =>{
        e.preventDefault();

        const{name,email,message} = user;

        const res = await fetch('/contact',{
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            name , email, message
            }
          )
        });

        const data = await res.json();
          console.log(data)
        if(!data){
          console.log("message not sent");
        }
        else{
          window.alert("message sent");
          setUser({...user,message:""});
        }
  }

  const verifier = async () =>{
         try{
           const res = await fetch('/getData',{
                 method : "GET",
                 headers : {
                   "Content-Type" : "application/json"
                 },
                 credentials : "include"
           });

            const data = await res.json();
            
            // console.log(data);
            setUser({...user,name : data.name , email : data.email});
           if(res.status === 401 || !data){
              
           }
         }
         catch(e){
            //  console.log(e);
         }
  }

  useEffect(() => {
        verifier();
        //eslint-disable-next-line
  },[]);

  return (
    <>
      <div
        className="container-fluid overflow-hidden"
        style={{ height: "92vh" }}
      >
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-10 container-fluid offset-lg-1 d-flex justify-content-around">
              <div className="col-lg-3 d-flex justify-content-start align-items-center  shadow-lg rounded-1 p-2">
                <img
                  src="https://img.icons8.com/office/32/iphone-x.png"
                  alt="phone"
                />
                <div className="px-2">
                  <div className="fw-bold">Phone</div>
                  <div>+91-9691223104</div>
                </div>
              </div>

              <div className="col-lg-3 d-flex justify-content-start align-items-center shadow-lg rounded-2">
                <img
                  src="https://img.icons8.com/clouds/48/new-post.png"
                  alt="phone"
                />
                <div className="px-2">
                  <div className="fw-bold">Email</div>
                  <div>vinaygoswami2001@gmail.com</div>
                </div>
              </div>

              <div className="col-lg-3 d-flex justify-content-start align-items-center  shadow-lg rounded-2">
                <img
                  src="https://img.icons8.com/clouds/50/000000/address.png"
                  alt="phone"
                />
                <div className="px-2">
                  <div className="fw-bold">Address</div>
                  <div>Hoshangabad|Madhya Pradesh </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container w-75 shadow-lg rounded-4 overflow-hidden p-4"
            style={{ marginTop: "10vh" }}
          >
            <div className="row ">
              <div className="col-lg-10 offset-lg-1 mx-auto p-2">
                <form method="post">
                  <div className="head pb-4">Get In Touch</div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name = "name"
                        value={!user.name ? "" : user.name}
                        onChange = { e => e.preventDefault}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                        name = "email"
                        value={!user.email ? "" : user.email}
                        onChange = {e => e.preventDefault}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="m-2" htmlFor="exampleFormControlTextarea1">
                      Your message :
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Message"
                      name = "message"
                      value={user.message}
                      onChange={handleMessage}
                    ></textarea>
                  </div>
                  <div className="my-4" style={{ paddingLeft: "2.5vw" }}>
                    <button
                      type="button"
                      className="btn btn-light "
                      onClick={handleSubmit}
                      style={{ backgroundColor: "#e3f2fd", width: "100px" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
