import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavRoute = ({ isCurrentRoute, route }) => {
  const navigate = useNavigate();

  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    setCurrentRoute(route.charAt(1).toUpperCase() + route.slice(2));
  }, [route]);

  return (
    <li
      className='text-2xl lg:text-base my-6 cursor-pointer'
      onClick={() => navigate(route)}
    >
      {isCurrentRoute(route) ? (
        <span className='text-blue font-bold'>
          {currentRoute}
          {'_'}
        </span>
      ) : (
        <span>{currentRoute}</span>
      )}
    </li>
  );
};

NavRoute.propTypes = {
  isCurrentRoute: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavRoute;
