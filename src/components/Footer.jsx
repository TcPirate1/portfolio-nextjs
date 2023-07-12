import { socialLinks } from "./social_links";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} TC's Portfolio</p>
        <div className="social_icons">
          {socialLinks.map((link) => {
            return (
              <a
                key={link.id}
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
