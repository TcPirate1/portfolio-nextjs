"use client";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { sendContactEmail } from "@/app/actions/contact";


export default function Contact() {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [form, setForm] = useState({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    sendContactEmail
  };

  function onExpire() {
    setCaptchaToken(null);
  }

  function onError(err) {
    console.error('Hcaptcha error:', err);
  }

  return (
    <div className="contact-container">
      <div id="contact-form">
        <div>
          <h1 id="Contact">Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>

        <form onSubmit={submitHandle}>
          <input type="hidden" name="number" />
          <div>
            <label htmlFor="name">
              <span className="required">Name: *</span>
              <input
                type="text"
                id="name"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
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
                value={form.sender_email}
                onChange={handleChange}
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
                value={form.message}
                onChange={handleChange}
                placeholder="Please write your message here."
                tabIndex="5"
                required="required"
              ></textarea>
            </label>
          </div>
          <input type="hidden" name="captchaToken" value={captchaToken || ""} />
          <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={setCaptchaToken}
          onExpire={onExpire}
          onError={onError}
          ref={captchaRef}/>
          <div>
            <button type="submit" name="submit" id="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.displayName = "Contact";
