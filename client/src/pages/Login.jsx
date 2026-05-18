import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login(){

  const navigate = useNavigate();

  const [formData,setFormData]=useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{

    e.preventDefault();

    try{

      const res = await API.post("/auth/login",formData);

      localStorage.setItem(
        "token",
        res.data.data.token
      );

      alert("Login Successful");

      navigate("/products");

    }
    catch(error){
      alert(error.response.data.message);
    }
  }

  return(

    <div className="form-container">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>

      </form>

    </div>
  )
}

export default Login;