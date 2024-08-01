import { useContext, createContext, useState, useEffect } from "react";
import authApi from "../apis/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-stage";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    try {
      if (getAccessToken()) {
        const res = await authApi.getAuthUser();
        setAuthUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credential) => {
    // set token
    const res = await authApi.login(credential);
    setAccessToken(res.data.accessToken);
    // set user info
    const resGetAuthUser = await authApi.getAuthUser();
    setAuthUser(resGetAuthUser.data.data);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    toast.warning("Logout already");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authUser,
        setAuthUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
