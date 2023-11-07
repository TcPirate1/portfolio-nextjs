import projectData from "./project_data.js";
import { random_keyID } from "./random_keyID.js";

const Projects = () => {
  function youtubeLink(link) {
    const youtubeRegex = new RegExp(
      "https://youtu.be/[a-zA-Z0-9_-]{11}|https://www.youtube.com/watch?v=[a-zA-Z0-9_-]{11}"
    );
    return youtubeRegex.test(link);
  }
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={random_keyID()}>
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  {youtubeLink(project.link) ? (
                    <a href={project.link} target="_blank">
                      <i className="fa-brands fa-youtube fa-2xl"></i>
                    </a>
                  ) : (
                    <a href={project.link} target="_blank">
                      <i className="fa-brands fa-square-github fa-2xl"></i>
                    </a>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
