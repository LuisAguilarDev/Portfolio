import React from "react";

const NavBar = (props) => {
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
          <span
            className="NavBar_letterss"
            onClick={() => scroll("tech_skill")}
          >
            Tech Skills
          </span>
          <span className="NavBar_letterss" onClick={() => scroll("Projects2")}>
            Projects
          </span>
          <span className="NavBar_letterss" onClick={() => scroll("Socials")}>
            Contact
          </span>
          <span className={"buttonLANG"}>
            <span
              onClick={props.setTrue}
              className={props.active ? "ActiveButton" : "unActiveButton"}
            >
              ENG
            </span>
            /
            <span
              onClick={props.setFalse}
              className={props.active ? "unActiveButton" : "ActiveButton"}
            >
              ESP
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
