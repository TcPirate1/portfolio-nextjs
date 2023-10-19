import Image from "next/image";
import { socialLinks } from "./social_links";
import { random_keyID } from "./random_keyID.js";

const Hero = () => {
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
          Zealand, studying at Whitecliffe. I have taken the plunge into this
          field and have been learning a lot throughout my journey and hope to
          continue doing so. You can find me on various social media platforms
          below.
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
    </div>
  );
};

export default Hero;
