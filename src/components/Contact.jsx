"use client";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useFormStatus } from "react-dom";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailNotification } from "../components/component_data/email_template";

const Contact = () => {
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const { isPending } = useFormStatus();

  function onVerify(t) {
    setCaptchaToken(t);
  }

  function onExpire() {
    setCaptchaToken(null);
  }

  function onError(err) {
    console.error('Hcaptcha error:', err);
  };

  async function handleSubmit(formData) {
    "use server";

    const name = formData.get("from_name");
    const email = formData.get("sender_email");
    const message = formData.get("message");
    const token = formData.get("captchaToken");

    const res = await fetchh("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET,
        response: captchaToken,
      })
    });

    const result = await res.json();
    if (!result.success) {
      return NextResponse.json({
        message: 'Captcha failed',
        errors: result['error-codes']
      }, { status:401 });
    }

    const resend = new Resend(process.env.RESEND_APIKEY);
    await resend.emails.send({
      from: `${email}`,
      to: [process.env.RECEIVE_EMAIL],
      subject: `New message from ${name}`,
      react: <EmailNotification name={name} email={email} message={message} />,
      replyTo: email,
    });

    if (!token) {
      throw new Error("Captcha token missing");
    };
  };

  return (
    <div className="contact-container">
      <div id="contact-form">
        <div>
          <h1 id="Contact">Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>

        <form action={handleSubmit}>
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
