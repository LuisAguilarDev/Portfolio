import React from "react";

const NavBar = () => {
  const scroll = (text) => {
    const id = "#";
    const selector = id + text;
    const section = document.querySelector(selector);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  };

  return (
    <div className="NavBar_Container">
      <div className="NavBar_Split">
        <div className="Logo_Container">
          <div className="Logo_L">L</div>
          <div className="Logo_A">A</div>
        </div>
        <div className="NavBar_letters">
          <span onClick={() => scroll("tech_skill")}>Tech Skills</span>
          <span onClick={() => scroll("Projects2")}>Projects</span>
          <span onClick={() => scroll("Socials")}>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
