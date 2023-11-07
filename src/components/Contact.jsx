"use client";
import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {}, 2000);
    emailjs
      .sendForm(
        "service_gyqj9s6",
        "template_8ohyoci",
        formRef.current,
        "9s8UWgGcYff43JhPb"
      )
      .then(
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
          <h1>Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>
        <p id="failure">Oopsie...message not sent.</p>
        <p id="success">Your message was sent successfully. Thank you!</p>

        <form ref={formRef} onSubmit={handleSubmit}>
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
          <div
            className="g-recaptcha"
            data-sitekey="6LeDUvwoAAAAACteWZ-6Ptj_5NHpoKLCBByauLRB"
          ></div>
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
