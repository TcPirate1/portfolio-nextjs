"use server";
import { Resend } from "resend";
import { EmailNotification } from "../../components/component_data/email_template";

export async function sendContactEmail(form) {

    const { from_name, sender_email, message, token } = form;

    if (!token) {
        throw new Error("Captcha token missing");
    }

    const res = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: "0x0000000000000000000000000000000000000000",
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
      subject: `New message from ${from_name}`,
      react: <EmailNotification name={from_name} email={sender_email} message={message} />,
    });
  } catch(err) {
    throw new Error(`Failed to send email: ${err}`);
  }
    
    return { success: true };
};