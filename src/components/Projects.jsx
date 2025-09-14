"use client";
import projectData from "./component_data/project_data";
import { random_keyID } from "./component_data/random_keyID";
import { useState } from "react";
import Image from "next/image.js";
import Link from "next/link";

const Projects = () => {

  const [isVisible, setIsVisible] = useState({});

const toggleVisibility = (projID) => {
  setIsVisible((prevState) => ({
    ...prevState,
    [projID]: !prevState[projID]
  }));
};
  function youtubeLink(link) {
    const youtubeRegex = new RegExp(
      "https://youtu.be/[a-zA-Z0-9_-]{11}|https://www.youtube.com/watch?v=[a-zA-Z0-9_-]{11}"
    );
    return youtubeRegex.test(link);
  }

  return (
    <div className="projects-container">
      <h2 id="Projects">Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={random_keyID()}>
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  {youtubeLink(project.link) ? (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Video for ${project.title}`}>
                      <i className="fa-brands fa-youtube fa-2xl"></i>
                    </Link>
                  ) : (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Github link for ${project.title}`}>
                      <i className="fa-brands fa-square-github fa-2xl"></i>
                    </Link>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <br />
                <Image
                  src={project.image}
                  height={250}
                  width={300}
                  sizes="(max-width: 768px) 100vw, 50vw, 33vw"
                  loading="lazy"
                  unoptimized={project.title === "Avalonia GUI for Card Searcher" ? (false) : (true)}
                  alt={`Image for ${project.title}`}
                />
              <button
                onClick={() => toggleVisibility(project.id)}
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                }}
              >
                <br />
                <i
                  className={`fa-solid ${
                    isVisible[project.id] ? "fa-arrow-right" : "fa-arrow-down"
                  } fa-inverse fa-xl`}
                  style={{ marginRight: "1em" }}
                ></i>
                {isVisible[project.id] ? (
                  <span style={{ color: "white" }}>Collapse</span>
                ) : (
                  <span style={{ color: "white" }}>Expand me</span>
                )}
              </button>
              {isVisible[project.id] && (
                <p>
                  <br />
                  {project.description}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

Projects.displayName = "Projects";

export default Projects;
