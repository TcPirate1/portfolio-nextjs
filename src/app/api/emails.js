"use server";
import { Resend } from "resend";
import { EmailNotification } from "../../components/component_data/email_template";

export async function sendContactEmail(form) {

    // Order and naming needs to be the same.
    const { from_name, sender_email, message, captchaToken } = form;

    if (!captchaToken) {
        throw new Error("Captcha token missing");
    }

    const res = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: "0x0000000000000000000000000000000000000000",
        response: captchaToken,
      })
    });

    const result = await res.json();
    if (!result.success) {
      throw new Error(`Captcha failed: ${result["error-codes"]?.join(", ")}`);
    }

    const resend = new Resend(process.env.RESEND_APIKEY);
    try {
    const emailRes = await resend.emails.send({
      from: `${sender_email}`,
      to: `${process.env.RECEIVE_EMAIL}`,
      subject: `New message from ${from_name}`,
      react: <EmailNotification name={from_name} email={sender_email} message={message} />,
    });
    console.log(`Resend json response: ${JSON.stringify(emailRes, null, 2)}`)

    if (emailRes.data === null) {
      return { success: false }
    }
  } catch(err) {
    throw new Error(`Failed to send email: ${err}`);
  }
    
    return { success: true };
};