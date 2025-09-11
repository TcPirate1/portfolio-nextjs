import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./component_data/social_links";
import { random_keyID } from "./component_data/random_keyID";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/profile.webp"
        className="profile-img"
        width={300}
        height={300}
        sizes="(max-width: 750px) 100vw, 50vw, 33vw"
        alt="Terence&#39;s headshot"
        priority
      />
      <div className="hero-text">
        <h1>I&#39;m Terence Chen AKA TC 👋</h1>
        <p>
          I&#39;m a software developer student based in Christchurch, New
          Zealand.<br/>You can find me on various social
          media platforms below.
        </p>
        <div className="social-icons">
          {socialLinks.map((link) => {
            return (
              <Link
                key={random_keyID()}
                href={link.url}
                aria-label={
                  link.name.charAt(0).toUpperCase() + link.name.slice(1)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands fa-${link.name}`}></i>
              </Link>
            );
          })}
        </div>
        <p>
          You can find out more <Link href="#About" >about me here</Link>,<br/>
          my <Link href="#Skills" >skills here</Link> or <Link href="#Projects" >what{" "}
          projects I&#39;ve done here</Link>!{" "}<br/>
          I am always looking for opportunities, you can <Link href="#Contact">contact me here</Link>!
        </p>
      </div>
    </div>
  );
};

export default Hero;
