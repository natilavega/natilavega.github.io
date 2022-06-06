import PropTypes from 'prop-types';
import { FiMap } from 'react-icons/fi';

const NavFooter = ({ center }) => {
  const year = new Date().getFullYear();

  return (
    <div
      className={
        center
          ? 'flex w-full justify-center items-center'
          : 'flex w-full items-center'
      }
    >
      <div>
        <a
          href='https://www.google.com/maps/place/San+Fernando,+Buenos+Aires+Province/'
          target='_blank'
        >
          <FiMap fontSize='0.625em' />
        </a>
      </div>
      <div className='text-white-faded text-[10px] ml-2'>{year}</div>
    </div>
  );
};

NavFooter.propTypes = {
  center: PropTypes.bool,
};

export default NavFooter;
