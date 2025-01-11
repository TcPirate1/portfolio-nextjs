'use client'
import Image from "next/image";
import { hobbies } from "./hobbies";
import { fav_shows } from "./favourite_shows";

const About = () => {

  const hobbyString = hobbies.map(hobby => hobby.name).join(', ')

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I started in 2020, like everyone else, had decided to shift careers.
            After working a couple of jobs I had settled for a forklift driving
            job for a few years after my first time studying science.
            <br />
            I had decided to go back to study and chose IT, not really knowing
            what I wanted. This decision came at a convenient time as I found
            out the NZ government were funding IT studies through TTAF program
            and gave it a go.
            <br /> I have now graduated with my Bachelors and looking forward to
            seeing what this can lead to!
          </p>
          <p>
            My hobbies include {hobbyString}, watching tv shows, and finding new
            ways to mess with my Linux system.
            <br />
            <u>My favourite shows are:</u>
            <ul>
              {fav_shows.map((shows, index) => (
                <li key={index}>- {shows.name}</li>
              ))}
            </ul>
          </p>
          <p>
            Throughout my studies, I have been challenged to use a variety of
            languages and frameworks/libraries associated with the language and
            have been able to use the knowledge obtained to create a variety of
            projects.
            <br />
            This ranged from static and dynamic websites to terminal programs
            and mobile apps and am excited to continue learning.
            <br />I have also been able to work in a team environment and have been able to
            use version control systems such as Git and GitHub and experience
            with Kanban Boards and Jira to collaborate with my team members.
          </p>
        </div>
        <div className="about-img">
          <Image
            alt="Gurren Lagann Comic"
            src="/gurren_lagann_comic.jpg"
            className="profile-img"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
