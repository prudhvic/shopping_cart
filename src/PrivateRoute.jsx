import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { UserPorvider } from "./utils/context/UserContext";
export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? children : <Navigate to="/" />;
}
