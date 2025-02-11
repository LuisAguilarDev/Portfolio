import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Tech from './components/Tecnologias';
import Experience from './components/Experience';
import { Suspense } from 'react';
import Project from './components/Projects';
function App() {
  return (
    <Suspense fallback='loading'>
      <NavBar />
      <Content />
      <Experience />
      <Tech />
      <Project  />
    </Suspense>
  );
}

export default App;

