import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../image/login.jpg"; // Import your background image
import "../css/Login.css";

const Login = ({ setLoginUser }) => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigation("/dashboard");
    });
  };

  return (
    <div className="">
    <div className="login" 
    >
      <h1 className="display-4 text-black" >Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <div className="button" onClick={login}>
        Login
      </div>
      <div className="  text-black">or</div>
      <div className="button" onClick={() => navigation("/signup")}>
        Sign up
      </div>
    </div>
    </div>
    
  );
};

export default Login;
