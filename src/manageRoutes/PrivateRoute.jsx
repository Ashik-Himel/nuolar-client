import PropTypes from 'prop-types';
import useAllContext from '../hooks/useAllContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
  const {user, userLoaded} = useAllContext();
  const {pathname} = useLocation();

  if (!userLoaded) return (
    <main className="mt-10 text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </main>
  );
  if (user) return children;

  return (
    <Navigate to='/login' state={{prevPath: pathname}} />
  )
};

PrivateRoute.propTypes = {
  children: PropTypes.node
}