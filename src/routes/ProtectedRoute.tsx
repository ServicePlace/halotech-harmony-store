import { useClerk } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useClerk();

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
