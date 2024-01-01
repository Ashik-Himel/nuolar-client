import PropTypes from 'prop-types';
import useAllContext from '../hooks/useAllContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRouteAlt = ({children}) => {
  const {user, userLoaded} = useAllContext();
  const {state} = useLocation();

  if (!userLoaded) return (
    <main className="mt-10 text-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </main>
  );
  if (user) return (
    <Navigate to={state?.prevPath ? state?.prevPath : '/'} />
  );

  return children;
};

PrivateRouteAlt.propTypes = {
  children: PropTypes.node
}