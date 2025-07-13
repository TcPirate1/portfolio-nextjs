import Image from "next/image";
import { hobbies } from "./component_data/hobbies";
import { fav_shows } from "./component_data/favourite_shows";

const About = () => {
  return (
    <div className="about-container">
      <h2 id="About">About Me</h2>
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
          <u>My hobbies:</u>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>- {hobby.name}</li>
            ))}
          </ul>
          <p>
            <br />
            <u>My favourite shows/movies are:</u>
          </p>
          <ul>
            {fav_shows.map((show, index) => (
              <li key={index}>- {show.name}</li>
            ))}
          </ul>
          <br/>
        </div>
        <div className="about-img">
          <Image
            alt="Gurren Lagann Comic"
            src="/gurren_lagann_comic.webp"
            className="profile-img"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

About.displayName = "About";

export default About;
