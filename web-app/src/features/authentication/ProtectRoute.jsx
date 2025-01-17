import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ProtectRoute({ children }) {
  const { authUser, isLoading } = useAuth();

  if (!authUser && !isLoading) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
}
