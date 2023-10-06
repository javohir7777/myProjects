import { useNavigate } from "react-router-dom";
import LogautPage from "./LogautPage";
import "./Register.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { requies } from "../server";
import { TOKEN } from "../container";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const AccountPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
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
      } = await requies.post("auth/register", input);
      console.log(token);
      Cookies.set(TOKEN, token);
      setIsAuthenticed(false);
      Cookies.remove(TOKEN);
      navigate("/");
    } catch (err) {
      toast.error("Error");
    }
  };
  return (
    <div className="register container">
      <LogautPage />
      <h1 className="register-h1">Account</h1>
      <form className="register-form">
        <input
          onChange={handleInput}
          name="firstname"
          className="register-input"
          type="text"
          placeholder="firstName"
        />
        <input
          onChange={handleInput}
          name="lastname"
          className="register-input"
          type="text"
          placeholder="Lastname"
        />
        <input
          onChange={handleInput}
          name="username"
          className="register-input"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handleInput}
          name="password"
          className="register-input"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleInput}
          name="confirmpassword"
          className="register-input"
          type="password"
          placeholder="Confirm password"
        />
        <button
          className="register-input register-submit"
          type="submit"
          onClick={login}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AccountPage;
