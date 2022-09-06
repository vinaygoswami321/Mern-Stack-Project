import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const verifier = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserName(data.name);
      if (!data.name) setShow(false);
      else {
        setShow(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    verifier();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="home">
      <div className="home-div h-100 d-flex flex-column justify-content-center align-items-center">
        <div className=" home-welcome px-auto">
          <p>WELCOME</p>
        </div>
        <div className="home-name d-flex flex-column justify-content-center align-items-center">
          {{ userName } ? <h1>{userName}</h1> : ""}
          <h2 className="d-flex align-items-center">
            {show ? `Happy, to see you back` : `We are learning`}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
