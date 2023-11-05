const Contact = () => {
  return (
    <div className="contact-container">
      <div id="contact-form">
        <div>
          <h1>Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let's chat!</h4>
        </div>
        <p id="failure">Oopsie...message not sent.</p>
        <p id="success">Your message was sent successfully. Thank you!</p>

        <form method="post" action="/">
          <div>
            <label htmlFor="name">
              <span className="required">Name: *</span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required="required"
                tabIndex="1"
                autoFocus="autofocus"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <span className="required">Email: *</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                tabIndex="2"
                required="required"
              />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              <span className="required">Message: *</span>
              <textarea
                id="message"
                name="message"
                placeholder="Please write your message here."
                tabIndex="5"
                required="required"
              ></textarea>
            </label>
          </div>
          <div>
            <button name="submit" type="submit" id="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
