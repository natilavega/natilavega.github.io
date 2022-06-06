import NavRoutes from './navRoutes';
import SocialLinks from '../socialLinks';
import NavFooter from './navFooter';

const Menu = () => {
  return (
    <div className='absolute h-screen w-screen bg-black-faded'>
      <div className='h-full flex justify-center items-center'>
        <div className='flex flex-col'>
          <NavRoutes />
          <SocialLinks />
        </div>
      </div>
      <div className='absolute fixed inset-x-0 bottom-0 pb-5'>
        <NavFooter />
      </div>
    </div>
  );
};

export default Menu;
