import { socialLinks } from "./component_data/social_links";
import { random_keyID } from "./component_data/random_keyID";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} TC&#39;s Portfolio</p>
        <div className="social_icons">
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
    </>
  );
};

export default Footer;
