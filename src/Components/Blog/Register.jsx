import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    passwd: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/register", inputs);
      if (res.data?.success) {
        setErr(null);
        navigate("/login")
      } else {
        setErr(res.data.error)
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="User Name"
          onChange={onChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="passwd"
          onChange={onChange}
        />
        <button required type="submit" onClick={handleSubmit}>
          Register
        </button>
        {err && <p>{err}</p>}
        <span>
          If you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
