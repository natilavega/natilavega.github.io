import { useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import screenshot1 from '../../assets/thegram.png';
import screenshot2 from '../../assets/minweather.png';
import screenshot3 from '../../assets/toodo.png';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects — Natalia Lavega';
  }, []);

  return (
    <section className='min-h-[90%] px-5 py-10 lg:py-20'>
      <h1 className='text-4xl'>Projects_</h1>

      <div className='flex flex-col lg:flex-row my-20'>
        <div className='lg:w-2/5 mb-5 lg:mb-0 lg:mr-10'>
          <img src={screenshot1} alt='Instagram clone screenshot' />
        </div>
        <div className='lg:w-2/5 mb-10'>
          <span className='text-xs'>React Js — Firebase</span>
          <h3 className='text-2xl mt-5 mb-10'>The Gram</h3>
          <div>
            <p className='mb-5'>
              The Gram is a clone of the web version of Instagram. It maintains
              the style of an already old version of Instagram. The design is
              responsive.
            </p>
            <p className='mb-5'>
              The live version has images and profiles preloaded. In this first
              version, it is only possible to browse existing posts and
              follow/unfollow other accounts.
            </p>
            <p className='mb-10'>
              New users can register with email and password. At the moment, it
              is not possible to publish new images.
            </p>
          </div>

          <div className='flex flex-col'>
            {/*<a
              href=''
              className='flex flex-row items-center text-indigo mb-2'
              target='_blank'
              rel='noreferrer'
            >
              <FiArrowRight /> Demo
            </a>*/}
            <a
              href='https://github.com/natilavega/instagram-clone'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center text-blue'
            >
              <FiArrowRight /> Code
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row my-20'>
        <div className='lg:w-2/5 mb-5 lg:mb-0 lg:mr-10'>
          <img src={screenshot2} alt='minWeather app screenshot' />
        </div>
        <div className='lg:w-2/5 mb-10'>
          <span className='text-xs'>React Js — API</span>
          <h3 className='text-2xl mt-5 mb-10'>MinWeather</h3>
          <div>
            <p className='mb-5'>
              Minimalist Weather App. Only the essential current weather
              details.
            </p>
            <p className='mb-5'>
              Users can allow geolocation to a faster entrance or enter the city
              manually. In the settings section, they can choose language and
              change measurement units.
            </p>
            <p className='mb-10'>
              WeatherAPI provides access to weather and geo data via a JSON/XML
              restful API.
            </p>
          </div>

          <div className='flex flex-col'>
            <a
              href='https://minweather.surge.sh/'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center text-indigo mb-2'
            >
              <FiArrowRight /> Demo
            </a>
            <a
              href='https://github.com/natilavega/react-weather-app'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center text-blue'
            >
              <FiArrowRight /> Code
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row my-20'>
        <div className='lg:w-2/5 mb-5 lg:mb-0 lg:mr-10'>
          <img src={screenshot3} alt='toodo app screenshot' />
        </div>
        <div className='lg:w-2/5 mb-10'>
          <span className='text-xs'>React Js — Firebase</span>
          <h3 className='text-2xl mt-5 mb-10'>TooDo</h3>
          <div>
            <p className='mb-5'>
              To-do list web application. It is possible to add and delete items
              from the list with a few clicks.
            </p>
            <p className='mb-5'>
              To enter, users can create an account with email and password or
              log in with their Google account. This allows each user to work
              with their own database and have the information always available.
            </p>
            <p className='mb-10'>
              The app uses Firebase's real-time database and authentication
              service.
            </p>
          </div>

          <div className='flex flex-col'>
            <a
              href='https://toodo.surge.sh/'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center text-indigo mb-2'
            >
              <FiArrowRight /> Demo
            </a>
            <a
              href='https://github.com/natilavega/React-Firebase-todo-app'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center text-blue'
            >
              <FiArrowRight /> Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
