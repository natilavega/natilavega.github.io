import PropTypes from 'prop-types';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SocialLinks = ({ col }) => {
  return (
    <ul
      className={
        col ? 'flex flex-col text-white-light' : 'flex text-white-light'
      }
    >
      <li className={col ? 'my-4' : 'mx-4'}>
        <a href='https://www.linkedin.com/in/natilavega/' target='_blank'>
          <FiLinkedin />
        </a>
      </li>
      <li className={col ? 'my-4' : 'mx-4'}>
        <a href='https://github.com/natilavega' target='_blank'>
          <FiGithub />
        </a>
      </li>
      <li className={col ? 'my-4' : 'mx-4'}>
        <a href='https://instagram.com/natilavega_' target='_blank'>
          <FiInstagram />
        </a>
      </li>
      {/*<li className={col ? 'my-4' : 'mx-4'}>
        <a href='' target='_blank'>
          <FiTwitter />
        </a>
      </li>*/}
    </ul>
  );
};

SocialLinks.propTypes = {
  col: PropTypes.bool,
};

export default SocialLinks;
