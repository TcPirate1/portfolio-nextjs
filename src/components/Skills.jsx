import { languages_libraries_frameworks } from "./component_data/languages_libraries_frameworks";
import { random_keyID } from "./component_data/random_keyID";
import Image from "next/image";

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
                <Image src={"/devicons/csharp-plain.svg"}
                  alt={`${item.name.toLowerCase()} icon`}
                  aria-label={`${item.name.toLowerCase()} icon`}
                  height={30}
                  width={30}
                  unoptimized
                />
                <p>{item.name}</p>
              </div>
            );
          else if (item.name.toLowerCase() === '.net')
            return (
              <div
                key={random_keyID()}
                className={`skill-card ${item.name.toLowerCase()}`}
              >
                <Image src="/devicons/dotnet-plain-wordmark.svg"
                  alt={`${item.name.toLowerCase()} icon`}
                  aria-label={`${item.name.toLowerCase()} icon`}
                  height={30}
                  width={30}
                  unoptimized
                />
                <p>{item.name}</p>
              </div>
            );
          else if (item.name.toLowerCase() === 'npm')
            return (
              <div
                key={random_keyID()}
                className={`skill-card ${item.name.toLowerCase()}`}
              >
                <Image src={`/devicons/${item.name.toLowerCase()}-wordmark.svg`}
                  alt={`${item.name.toLowerCase()} icon`}
                  aria-label={`${item.name.toLowerCase()} icon`}
                  height={30}
                  width={30}
                  unoptimized
                />
                <p>{item.name}</p>
              </div>
            );
            else if (item.name.toLowerCase() === 'react')
            return (
              <div
                key={random_keyID()}
                className={`skill-card ${item.name.toLowerCase()}`}
              >
                <Image src={`/devicons/${item.name.toLowerCase()}-original.svg`}
                  alt={`${item.name.toLowerCase()} icon`}
                  aria-label={`${item.name.toLowerCase()} icon`}
                  height={30}
                  width={30}
                  unoptimized
                />
                <p>{item.name}</p>
              </div>
            );
          return (
            <div
              key={random_keyID()}
              className={`skill-card ${item.name.toLowerCase()}`}
            >
              <Image src={`/devicons/${item.name.toLowerCase()}-plain.svg`}
                alt={`${item.name.toLowerCase()} icon`}
                aria-label={`${item.name.toLowerCase()} icon`}
                height={30}
                width={30}
                unoptimized
              />
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
