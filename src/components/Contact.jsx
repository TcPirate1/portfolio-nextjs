"use client";
import { useRef, useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const hcaptchaRef = useRef(null);
  const [token, setToken] = useState(null);
  const [status, setStatus] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Complete captcha");
      return;
    };
    const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                "access_key": "5681080a-716f-4005-a4af-295926b00cef", // Form public key,
                "h-captcha-response": token,
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(response.status);
          setStatus("Message sent!");
          e.target.reset();
          setToken(null);
        }
        else {
          console.error(response.text, response.status);
          setStatus("Opps! Something went wrong")
        }
  };

  return (
    <div className="contact-container">
      <div id="contact-form">
        <div>
          <h1 id="Contact">Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>
        {status && <p>{status}</p>}

        <form onSubmit={handleSubmit}>
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
          <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          ref={hcaptchaRef}
          onVerify={(tok) => setToken(tok)}
            />
            <button type="submit" name="submit" id="submit">
              SEND
            </button>
        </form>
      </div>
    </div>
  );
};

Contact.displayName = "Contact";

export default Contact;
