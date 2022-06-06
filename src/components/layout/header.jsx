import { IconContext } from 'react-icons';
import Tabbar from './tabbar';
import Navbar from './navbar';

const Header = () => {
  return (
    <IconContext.Provider value={{ color: '#f6f3ea', size: '1.25em' }}>
      <Tabbar />
      <Navbar />
    </IconContext.Provider>
  );
};

export default Header;
