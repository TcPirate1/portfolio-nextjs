import Image from "next/image";
import { hobbies } from "./hobbies";
import { fav_shows } from "./favourite_shows";

const About = () => {

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
          <u>My hobbies:</u>
          {hobbies.map((hobby, index) => (
            <li key={index}>- {hobby.name}</li>
          ))}
          <p>
            <br />
            <u>My favourite shows are:</u>
          </p>
          {fav_shows.map((shows, index) => (
            <li key={index}>- {shows.name}</li>
          ))}
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
