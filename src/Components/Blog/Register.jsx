import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="User Name" />
        <input required type="Email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <input required type="password" placeholder="Password" />
        <button required type="submit">Register</button>
        <p>This is an error!</p>
        <span>
          If you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
