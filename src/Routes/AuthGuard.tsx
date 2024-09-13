import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider/useAuth";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = useAuth();

  if (signedIn && isPrivate) {
    return <Navigate to="/" />;
  }

  if (!signedIn && !isPrivate) {
    return <Navigate to="/Dashboard" replace />;
  }

  return <Outlet />;
}
