import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./component_data/social_links";
import { random_keyID } from "./component_data/random_keyID";

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
          You can find out more about me <Link href="#About" >here</Link>, or
          to find out my skills <Link href="#Skills" >here</Link> or what{" "}
          projects I&#39;ve done <Link href="#Projects" >here</Link>!{" "}
          I also have a <Link href="#Contact" >contact form</Link>!
        </p>
      </div>
    </div>
  );
};

export default Hero;
