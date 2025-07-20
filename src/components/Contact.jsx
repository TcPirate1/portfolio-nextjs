"use client";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  function onVerify(t) {
    setCaptchaToken(t);
  }

  function onExpire() {
    setCaptchaToken(null);
  }

  function onError(err) {
    console.error('Hcaptcha error:', err);
    alert('Please try again.');
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`Checking token: ${captchaToken}`);
    if (!captchaToken) {
      captchaRef.current.execute();
      alert('Complete the captcha');
      return;
    }

  const { from_name, sender_email, message } = e.target;
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: from_name.value,
      email: sender_email.value,
      message: message.value,
      captchaToken
    }),
  });

  const data = await res.json();
  if (res.ok) {
    alert('Message sent!');
  }
  else {
    alert(`Error: ${data.message}`);
  }

  captchaRef.current.resetCaptcha();
  setCaptchaToken(null);
}

  return (
    <div className="contact-container">
      <div id="contact-form">
        <div>
          <h1 id="Contact">Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="number" />
          <div>
            <label htmlFor="name">
              <span className="required">Name: *</span>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Your Name"
                required="required"
                tabIndex="1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <span className="required">Email: *</span>
              <input
                type="email"
                id="email"
                name="sender_email"
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
          <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={onVerify}
          onExpire={onExpire}
          onError={onError}
          ref={captchaRef}/>
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

Contact.displayName = "Contact";

export default Contact;
