import NavFooter from './navFooter';
import NavRoutes from './navRoutes';
import SocialLinks from '../socialLinks';

const Navbar = () => {
  return (
    <header className='flex h-screen w-1/3 p-5 sidebar'>
      <div className='flex flex-col justify-between'>
        <div className='h-12 w-12'>
          <h1 className='text-5xl text-white-light cursor-default'>_</h1>
        </div>
        <div>
          <NavRoutes />
          <SocialLinks col />
        </div>
        <div>
          <NavFooter />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
