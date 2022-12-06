import "./App.css";
import Content from "./Components/Content";
import NavBar from "./Components/NavBar.jsx";
import Project from "./Components/Projects";
import Social from "./Components/Social";
import Tech from "./Components/Tecnologias";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Tech />
      <Project />
      <Social />
    </div>
  );
}

export default App;
