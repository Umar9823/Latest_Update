// src/components/protectedroute/ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Ensure this path is correct

const ProtectedRoute = ({ element: Component }) => {
  const { user } = useContext(AuthContext);

  return user ? Component : <Navigate to="/signin" />;
};

export default ProtectedRoute;
