import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../css/Signup.css";

const Signup = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigation("/");
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div
      className="register" >
      {console.log("User", user)}
      <h1 className="display-4 text-black" >Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      <div className="button" onClick={register}>
        Register
      </div>
      <div className=" text-black" >or</div>
      <div className="button" onClick={() => navigation("/")}>
        Login
      </div>
    </div>
  );
};

export default Signup;
