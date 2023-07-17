import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            In my spare time, I play video games, card & board games, watch tv
            shows, anime and read books. You will find that I tend to stick to
            one hobby for a while and then shifting to a different one, but I am
            also willing to have a chat about anything. <br /> You&#39;ll find
            though that despite this, most of my personal projects will be
            related to card games as I have been finding that&#39;s where most
            of my ideas lead me.
          </p>
          <p>
            Throughout my studies, I have been challenged to use a variety of
            languages and frameworks/libraries associated with the language and
            have been able to use the knowledge obtained to create a variety of
            projects. This ranged from static and dynamic websites to terminal
            programs and mobile apps and am excited to continue learning. <br />{" "}
            I have also been able to work in a team environment and have been
            able to use version control systems such as Git and GitHub to
            collaborate with my team members.
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
