import { useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import PropTypes from 'prop-types';
import NavRoute from './navRoute';

const NavRoutes = ({ center }) => {
  const { pathname } = useLocation();

  const routes = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.PROJECTS];

  const isCurrentRoute = (route) => {
    return pathname === route;
  };

  return (
    <ul className={center ? 'mb-[60px] text-center' : 'mb-[60px]'}>
      {routes.map((route, index) => (
        <NavRoute key={index} isCurrentRoute={isCurrentRoute} route={route} />
      ))}
    </ul>
  );
};

NavRoutes.propTypes = {
  center: PropTypes.bool,
};

export default NavRoutes;
