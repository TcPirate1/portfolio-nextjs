"use client";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {

  const [form, setForm] = useState({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onHcaptchaChange = (token) => {
    setValue("h-captcha-response", token)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "5681080a-716f-4005-a4af-295926b00cef", // Form public key
                name: form.from_name,
                email: form.email,
                message: form.message,
            }),
        });
        await response.json().then(
        (result) => {
          console.log("Success!", result.text, result.status);
          document.getElementById("success").style.display = "block";
          document.getElementById("failure").style.display = "none";
          setForm({
            from_name: "",
            sender_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Failed", error.text);
          document.getElementById("failure").style.display = "block";
          document.getElementById("success").style.display = "none";
        }
      );
  };

  return (
    <div className="contact-container">
      <div id="contact-form">
        <div>
          <h1 id="Contact">Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>
        <p id="failure">Oopsie...message not sent.</p>
        <p id="success">Your message was sent successfully. Thank you!</p>

        <form onSubmit={handleSubmit}>
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
          <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHcaptchaChange}
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
