import Image from "next/image";
import { socialLinks } from "./social_links";
import { random_keyID } from "./random_keyID.js";

const Hero = ({
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) => {
  return (
    <div className="hero-container">
      <Image
        src="/profile.png"
        className="profile-img"
        width={300}
        height={300}
        alt="Terence&#39;s headshot"
      />
      <div className="hero-text">
        <h1>Hey, I&#39;m Terence Chen AKA TC 👋</h1>
        <p>
          I&#39;m a software developer student based in Christchurch, New
          Zealand, graduated from Whitecliffe. You can find me on various social
          media platforms below.
        </p>
        <div className="social-icons">
          {socialLinks.map((link) => {
            return (
              <a
                key={random_keyID()}
                href={link.url}
                aria-label={
                  link.name.charAt(0).toUpperCase() + link.name.slice(1)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands fa-${link.name}`}></i>
              </a>
            );
          })}
        </div>
      </div>
      <h2>
        <u>Table of contents:</u>
      </h2>
      <button onClick={scrollToAbout} className="hero-button">
        - About Me
      </button>
      <button onClick={scrollToSkills} className="hero-button">
        - Skills
      </button>
      <button onClick={scrollToProjects} className="hero-button">
        - Projects
      </button>
      <button onClick={scrollToContact} className="hero-button">
        - Contact
      </button>
    </div>
  );
};

export default Hero;
