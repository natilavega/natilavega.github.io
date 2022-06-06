import { useState } from 'react';
import Menu from './menu';

const Tabbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className='flex flex-col'>
      <div className='h-[10%] z-50'>
        <div className='flex justify-between items-center p-5'>
          <div className='h-10 w-10'>
            <h1 className='text-4xl text-white-light cursor-default'>_</h1>
          </div>
          <div className='h-10 w-10 text-right'>
            <button
              className='text-4xl text-white-light cursor-pointer'
              onClick={toggleMenu}
            >
              {isOpen ? '×' : '='}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <Menu />}
    </header>
  );
};

export default Tabbar;
