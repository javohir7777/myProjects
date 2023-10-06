import { useState } from "react";
import { requies } from "../server";

import { toast } from "react-toastify";
// import { AuthContext } from "../context/AuthContext";
// import { TOKEN } from "../container";
// import Cookies from "js-cookie";
// import { Form, message } from "antd";

import "./Register.scss";
const RegisterPage = () => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
  });
  // const { setIsAuthenticed } = useContext(AuthContext);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await requies.post("auth/register", input);
    } catch (err) {
      toast.error("Error");
    }
  };
  return (
    <div className="register container">
      <h1 className="register-h1">Register</h1>
      <form className="register-form">
        <input
          name="firstname"
          className="register-input"
          id="first_name"
          onChange={handleInput}
          type="text"
          placeholder="firstName"
        />
        <input
          name="lastname"
          className="register-input"
          id="last_name"
          onChange={handleInput}
          type="text"
          placeholder="Lastname"
        />
        <input
          name="username"
          className="register-input"
          id="username"
          onChange={handleInput}
          type="text"
          placeholder="Username"
        />
        <input
          name="password"
          className="register-input"
          id="password"
          onChange={handleInput}
          type="password"
          placeholder="Password"
        />

        <button
          className="register-input register-submit"
          type="submit"
          onClick={login}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
