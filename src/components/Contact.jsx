const Contact = () => {
  return (
    <div className="contact-container">
      {/* <h2>Get In Touch</h2>
      <p>
        If you want us to work together or have any questions, my inbox is
        always open. I&#39;ll try my best to get back to you! Cheers!
      </p>
      <a href="mailto:terence89chen@gmail.com" className="cta-btn">
        E-mail me!
      </a> */}

      <div id="contact-form">
        <div>
          <h1>Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let's chat.</h4>
        </div>
        <p id="failure">Oopsie...message not sent.</p>
        <p id="success">Your message was sent successfully. Thank you!</p>

        <form method="post" action="/">
          <div>
            <label for="name">
              <span class="required">Name: *</span>
              <input
                type="text"
                id="name"
                name="name"
                value=""
                placeholder="Your Name"
                required="required"
                tabindex="1"
                autofocus="autofocus"
              />
            </label>
          </div>
          <div>
            <label for="email">
              <span class="required">Email: *</span>
              <input
                type="email"
                id="email"
                name="email"
                value=""
                placeholder="Your Email"
                tabindex="2"
                required="required"
              />
            </label>
          </div>
          <div>
            <label for="message">
              <span class="required">Message: *</span>
              <textarea
                id="message"
                name="message"
                placeholder="Please write your message here."
                tabindex="5"
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
