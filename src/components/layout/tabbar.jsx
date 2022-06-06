import { useState } from 'react';
import Menu from './menu';

const Tabbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className='lg:hidden h-screen flex flex-col'>
      <header className='h-1/8'>
        <div className='flex justify-between items-center p-5'>
          <div className='h-10 w-10'>
            <h1 className='text-4xl text-white-light text-center cursor-default'>
              _
            </h1>
          </div>
          <div className='h-10 w-10'>
            <button
              className='text-4xl text-white-light text-center cursor-pointer'
              onClick={toggleMenu}
            >
              {isOpen ? '×' : '='}
            </button>
          </div>
        </div>
      </header>
      {isOpen && <Menu />}
    </div>
  );
};

export default Tabbar;
