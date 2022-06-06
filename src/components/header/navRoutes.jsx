import { useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import NavRoute from './navRoute';

const NavRoutes = () => {
  const { pathname } = useLocation();

  const routes = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.PROJECTS];

  const isCurrentRoute = (route) => {
    return pathname === route;
  };

  return (
    <ul className={'mb-[60px] text-center lg:text-left'}>
      {routes.map((route, index) => (
        <NavRoute key={index} isCurrentRoute={isCurrentRoute} route={route} />
      ))}
    </ul>
  );
};

export default NavRoutes;
