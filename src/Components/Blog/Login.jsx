import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/authContent";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    passwd: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (inputs.email === "" || inputs.passwd === "") {
      setErr("Please fill all the fields");
    } else {
      try {
        await login(inputs);
        navigate("/");
      } catch (err) {
        setErr(err?.response?.data?.error);
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
