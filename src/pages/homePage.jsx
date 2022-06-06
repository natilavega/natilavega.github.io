import Header from '../components/header/header';
import Home from '../components/home';

const HomePage = () => {
  return (
    <div className='h-screen lg:flex'>
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;
