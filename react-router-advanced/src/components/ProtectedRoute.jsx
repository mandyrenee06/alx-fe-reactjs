import { Navigate } from "react-router-dom";

const isAuthenticated = false; // simulate login status

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;