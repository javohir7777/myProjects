import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { TOKEN } from "../container";
import { useNavigate } from "react-router-dom";

import "./Lagout.scss";

const LogautPage = () => {
  const navigate = useNavigate();
  const { setIsAuthenticed } = useContext(AuthContext);
  const lagout = () => {
    setIsAuthenticed(false);
    Cookies.remove(TOKEN);
    navigate("/");
  };
  return (
    <div className="lagout container">
      <button className="lagout-btn" onClick={lagout}>
        Lagout
      </button>
    </div>
  );
};

export default LogautPage;
