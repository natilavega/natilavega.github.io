import { useEffect } from 'react';
import Header from '../components/header/header';
import Projects from '../components/layout/projects';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects — Natalia Lavega';
  }, []);

  return (
    <div className='h-screen lg:flex'>
      <Header />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
