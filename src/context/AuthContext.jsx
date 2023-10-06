import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { TOKEN } from "../container";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticed, setIsAuthenticed] = useState(
    Boolean(Cookies.get(TOKEN))
  );
  const state = { isAuthenticed, setIsAuthenticed };
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContextProvider;
