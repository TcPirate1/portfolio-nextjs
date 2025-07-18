import { languages_libraries_frameworks } from "./component_data/languages_libraries_frameworks";
import { random_keyID } from "./component_data/random_keyID";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 id="Skills">Skills</h2>
      <div className="grid-skills">
        {languages_libraries_frameworks.map((item) => {

          if (item.name.toLowerCase() === "c#")
            return (
              <div
                key={random_keyID()}
                className={`skill-card ${item.name.toLowerCase()}`}
              >
                <i className={`devicon-csharp-plain`}></i>
                <p>{item.name}</p>
              </div>
            );
          else if (item.name.toLowerCase() === '.net')
            return (
          <div
                key={random_keyID()}
                className={`skill-card ${item.name.toLowerCase()}`}
              >
                <i className={`devicon-dot-net-plain-wordmark`}></i>
                <p>{item.name}</p>
              </div>
          );
          else if (item.name.toLowerCase() === 'npm')
            return (
              <div
                key={random_keyID()}
                className={`skill-card ${item.name.toLowerCase()}`}
              >
                <i className={`devicon-${item.name.toLowerCase()}-original-wordmark`}></i>
                <p>{item.name}</p>
              </div>
            );
          return (
            <div
              key={random_keyID()}
              className={`skill-card ${item.name.toLowerCase()}`}
            >
              <i
                className={`devicon-${item.name.toLowerCase()}-plain`}
              ></i>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Skills.displayName = "Skills";

export default Skills;
