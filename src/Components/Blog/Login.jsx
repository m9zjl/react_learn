import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    passwd: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (inputs.email === "" || inputs.passwd === "") {
      setErr("Please fill all the fields");
    } else {
      try {
        const ret = await axios.post("/login", inputs);
        if (ret?.data?.token) {
          console.log("token:", ret.data.token);
          navigate("/");
        } else {
          setErr(ret.data.error);
        }
      } catch (err) {
        setErr(err?.response?.data);
      }
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          required
          placeholder="Email"
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          required={true}
          placeholder="Password"
          name="passwd"
          onChange={onChange}
        />
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
