import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useState, useEffect, useContext } from "react";
let UserContext = createContext({});
export default function UserContextProvider({ children }) {
  let [Myuser, setMyUser] = useState(null);
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect: login,
    logout,
  } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(null);
    }
    console.log("user", user, isAuthenticated);
  }, [isAuthenticated]);
  return (
    <UserContext.Provider value={{ login, logout, user: Myuser }}>
      {children}
    </UserContext.Provider>
  );
}
export let UserPorvider = () => {
  return useContext(UserContext);
};
