import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children, redirectPath = '/' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
