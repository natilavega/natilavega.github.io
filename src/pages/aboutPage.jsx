import { useEffect } from 'react';
import Header from '../components/header/header';
import About from '../components/layout/about';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About — Natalia Lavega';
  }, []);

  return (
    <div className='h-screen lg:flex'>
      <Header />
      <About />
    </div>
  );
};

export default AboutPage;
