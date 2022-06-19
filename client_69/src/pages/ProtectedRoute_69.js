import { useAppContext_69 } from '../context/appContext_69';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_69 = ({ children }) => {
  const { user } = useAppContext_69();
  if (!user) {
    return <Navigate to='/landing_69' />;
  }
  return children;
};

export default ProtectedRoute_69;
