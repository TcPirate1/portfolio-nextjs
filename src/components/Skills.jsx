import { languages_libraries_frameworks } from "./languages_libraries_frameworks";

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
        {languages_libraries_frameworks.map((item) => {
          return (
            <div
              key={item.id}
              className={`skill-card ${item.name.toLowerCase()}`}
            >
              <i
                className={`fa-brands fa-${item.name.toLowerCase()} ${item.name.toLowerCase()}-icon`}
              ></i>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
