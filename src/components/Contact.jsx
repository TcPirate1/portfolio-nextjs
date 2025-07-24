"use client";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTransition } from "react";
import { sendContactEmail } from "@/app/actions/contact";


const Contact = () => {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  function onVerify(t) {
    setCaptchaToken(t);
  }

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

        <form action={sendContactEmail}>
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
          {/* <input type="hidden" name="captchaToken" value={captchaToken} /> */}
          {/* <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={onVerify}
          onExpire={onExpire}
          onError={onError}
          ref={captchaRef}/> */}
          <div>
            <button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Send"}
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.displayName = "Contact";

export default Contact;
