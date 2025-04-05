import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // Redirect them to sign in page while saving their intended destination
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
