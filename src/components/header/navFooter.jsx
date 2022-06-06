import { FiMap } from 'react-icons/fi';

const NavFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className={'flex w-full items-center justify-center lg:justify-start'}>
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

export default NavFooter;
