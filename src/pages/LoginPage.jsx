import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { requies } from "../server";
import { TOKEN } from "../container";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { setIsAuthenticed } = useContext(AuthContext);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await requies.post("auth/login", input);
      console.log(token);
      Cookies.set(TOKEN, token);
      setIsAuthenticed(true);
      navigate("/my-blogs");
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <div className="register container">
      <h1 className="register-h1">Login</h1>
      <form className="register-form">
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
          onChange={handleInput}
          id="password"
          type="password"
          placeholder="Password"
        />

        <button
          className="register-input register-submit"
          type="submit"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
