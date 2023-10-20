import { languages_libraries_frameworks } from "./languages_libraries_frameworks";
import { random_keyID } from "./random_keyID.js";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card nextjs">
          <img className="nextjs" src="/next-js.svg"></img>
          <p>NextJS</p>
        </div>
        {languages_libraries_frameworks.map((item) => {
          return (
            <div
              key={random_keyID()}
              className={`skill-card ${item.name.toLowerCase()}`}
            >
              <i
                className={`fa-brands fa-${item.name.toLowerCase()} ${item.name.toLowerCase()}-icon`}
              ></i>
              <p>{item.name}</p>
            </div>
          );
        })}
        <div className="skill-card c#">
          <img
            className="c#"
            src="/csharp-original.svg"
            alt="csharp"
            width="35"
            height="35"
          />
          <p>C#</p>
        </div>
        <div className="skill-card mysql">
          <img
            className="mysql"
            src="/mysql.svg"
            alt="mysql"
            width="35"
            height="35"
          />
          <p>MySql</p>
        </div>
        <div className="skill-card mongodb">
          <img
            className="mongodb"
            src="/mongodb.svg"
            alt="mongodb"
            width="35"
            height="35"
          />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
