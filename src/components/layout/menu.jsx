import NavRoutes from '../navRoutes';
import SocialLinks from '../socialLinks';
import NavFooter from '../navFooter';

const Menu = () => {
  return (
    <>
      <div className='h-7/8 flex justify-center items-center lg:hidden'>
        <div className='flex flex-col'>
          <NavRoutes center />
          <SocialLinks />
        </div>
      </div>
      <div className='relative fixed inset-x-0 bottom-0 pb-5'>
        <NavFooter center />
      </div>
    </>
  );
};

export default Menu;
