import Image from "next/image";
import { socialLinks } from "./component_data/social_links";
import { random_keyID } from "./component_data/random_keyID";

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
        <h1>I&#39;m Terence Chen AKA TC 👋</h1>
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
        <p>
          You can find out more about me <a onClick={scrollToAbout}>here</a>, or
          to find out my skills <a onClick={scrollToSkills}>here</a> or what{" "}
          projects I&#39;ve done <a onClick={scrollToProjects}>here</a>!{" "}
          I also have a <a onClick={scrollToContact}>contact form</a>!
        </p>
      </div>
    </div>
  );
};

export default Hero;
