import { useEffect } from 'react';
import Header from '../components/header/header';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects — Natalia Lavega';
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default ProjectsPage;
