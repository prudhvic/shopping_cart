import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "../components/Loading";

const AuthWrapper = ({ children }) => {
  let { error, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <>{children}</>;
};

export default AuthWrapper;
