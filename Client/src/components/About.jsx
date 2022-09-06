import React, { useState } from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../Images/profileImage.JPG";

const About = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({});

  const verifier = async () =>{
         try{
           const res = await fetch('/about',{
                 method : "GET",
                 headers : {
                   Accept : "application/json",
                   "Content-Type" : "application/json"
                 },
                 credentials : "include"
           });

            const data = await res.json();
            
            // console.log(data);
            setUser(data);
           if(res.status === 401 || !data){
               navigate('/login');
           }
           console.log(user);
         }
         catch(e){
             console.log(e);
         }
  }

  useEffect(() => {
        verifier();
        //eslint-disable-next-line
  },[]);

  return (
    <div className="about-div">
      <div className="about">
        <div className="row">
          <div className="col-md-4 ps-5 ">
            <img
              src={profileImage}
              alt="profile-img"
              style={{
                maxHeight: "100%",
                maxWidth: "70%",
                objectFit: "fill",
              }}
            />
          </div>
          <div className="col-md-6  d-flex flex-column justify-content-between">
            <div className="mt-4">
              <h5>{user.name}</h5>
              <h6 style={{ color: "#36aafe" }}>Web developer</h6>
              <p>
                <span
                  style={{
                    fontSize: "small",
                    fontWeight: "100",
                    color: "GrayText",
                  }}
                >
                  Ranking : 1/1
                </span>
              </p>
            </div>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 pt-4">
            <button
              type="button"
              className="btn btn-light "
              style={{
                backgroundColor: "#e3f2fd",
                width: "120px",
                height: "40px",
              }}
            >
              edit profile
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4  ps-5 p-3 text-start">
            <p>youtube</p>
            <p>instagram</p>
            <p>linkedin</p>
            <p>facebook</p>
            <p>twitter</p>
          </div>

          <div className="col-md-8  p-4 ">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>School</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>Servite convent school</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>12th score</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>85.2 %</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>10th score</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>9.6 CGPA</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Degree</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>Bachelor of Technology</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Branch</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>
                      Computer Science and Engineering{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User ID</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>5746464</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>{user.name}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>9691223104</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p style={{ color: "#36aafe" }}>Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
