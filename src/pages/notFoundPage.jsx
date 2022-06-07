import { useEffect } from 'react';
import Header from '../components/header/header';
import NotFound from '../components/layout/notFound';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found — Natalia Lavega';
  }, []);

  return (
    <div className='h-screen lg:flex'>
      <Header />
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
