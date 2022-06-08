import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const NotFound = () => {
  return (
    <section className='min-h-[90%] flex flex-col justify-center p-5'>
      <h1 className='text-white-light text-6xl lg:text-[6rem] leading-[1.1] mb-5 lg:w-3/4'>
        Ooops!
      </h1>
      <p className='text-white-faded'>Couldn't find the page.</p>
      <p className='text-white-faded'>
        Please, go back
        <Link to={ROUTES.HOME}>
          {' '}
          <span className='cursor-pointer text-blue'>Home</span>.
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
