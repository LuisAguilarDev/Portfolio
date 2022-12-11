import "./App.css";
import { useState } from "react";
import Content from "./Components/Content";
import ContentENG from "./Components/ContentEng";
import NavBar from "./Components/NavBar.jsx";
import Project from "./Components/Projects";
import ProjectENG from "./Components/ProjectsENG";
import Social from "./Components/Social";
import Tech from "./Components/Tecnologias";

function App() {
  const [lang, setLang] = useState(true);
  const [active, setActive] = useState(true);
  function setFalse() {
    setLang(false);
    setActive(false);
  }
  function setTrue() {
    setLang(true);
    setActive(true);
  }
  return (
    <div className="App">
      <NavBar setFalse={setFalse} setTrue={setTrue} active={active} />
      {lang ? <ContentENG /> : <Content />}
      <Tech />
      {lang ? <ProjectENG /> : <Project />}
      <Social />
    </div>
  );
}

export default App;
