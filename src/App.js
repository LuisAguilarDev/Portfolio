import './App.css';
import { useState } from 'react';
import Content from './Components/Content';
import NavBar from './Components/NavBar.jsx';
import Project from './Components/Projects';
import Social from './Components/Social';
import Tech from './Components/Tecnologias';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="App">
      <NavBar setLang={setLang} lang={lang} />
      <Content lang={lang} />
      <Tech />
      <Project lang={lang} />
      <Social />
    </div>
  );
}

export default App;
