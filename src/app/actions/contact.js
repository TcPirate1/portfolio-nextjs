"use server";
import { Resend } from "resend";
import { EmailNotification } from "../../components/component_data/email_template";

export async function sendContactEmail(formData) {

    const name = formData.get("from_name");
    const email = formData.get("sender_email");
    const message = formData.get("message");
    const token = formData.get("captchaToken");

    if (!token) {
        throw new Error("Captcha token missing");
    }

    const res = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET,
        response: token,
      })
    });

    const result = await res.json();
    if (!result.success) {
      throw new Error(`Captcha failed: ${result["error-codes"]?.join(", ")}`);
    }

    const resend = new Resend(process.env.RESEND_APIKEY);
    try {
    await resend.emails.send({
      from: `${email}`,
      to: [process.env.RECEIVE_EMAIL],
      subject: `New message from ${name}`,
      react: <EmailNotification name={name} email={email} message={message} />,
    });
  } catch(err) {
    throw new Error(`Failed to send email: ${err}`);
  }
    
    return { success: true };
};