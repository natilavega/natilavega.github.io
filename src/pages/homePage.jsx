import { useEffect } from 'react';
import Header from '../components/header/header';
import Home from '../components/layout/home';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Natalia Lavega';
  }, []);

  return (
    <div className='h-screen lg:flex'>
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;
