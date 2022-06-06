import { IconContext } from 'react-icons';
import useScreenSize from '../../hooks/useScreenSize';
import Tabbar from './tabbar';
import Navbar from './navbar';

const Header = () => {
  const { width, height } = useScreenSize();

  return (
    <IconContext.Provider value={{ color: '#f6f3ea', size: '1.25em' }}>
      {width < 1024 ? <Tabbar /> : <Navbar />}
    </IconContext.Provider>
  );
};

export default Header;
