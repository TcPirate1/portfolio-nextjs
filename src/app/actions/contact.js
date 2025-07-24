"use server";
import { Resend } from "resend";
import { EmailNotification } from "../../components/component_data/email_template";
import { NextResponse } from "next/server";

export async function sendContactEmail(formData) {

    const jsonData = {
        name : formData.get("from_name"),
        email : formData.get("sender_email"),
        message : formData.get("message"),
    };
    // const token = formData.get("captchaToken");

    // if (!token) {
    //     throw new Error("Captcha token missing");
    // }

    // const res = await fetch("https://api.hcaptcha.com/siteverify", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams({
    //     secret: process.env.HCAPTCHA_SECRET,
    //     response: token,
    //   })
    // });

    // const result = await res.json();
    // if (!result.success) {
    //   return NextResponse.json({
    //     message: 'Captcha failed',
    //     errors: result['error-codes']
    //   }, { status:401 });
    // }

    const resend = new Resend(process.env.RESEND_APIKEY);
    await resend.emails.send({
      from: `${jsonData.email}`,
      to: [process.env.RECEIVE_EMAIL],
      subject: `New message from ${jsonData.name}`,
      react: <EmailNotification name={jsonData.name} email={jsonData.email} message={jsonData.message} />,
      replyTo: jsonData.email,
    });
    
    return NextResponse.json({ message: 'Email sent!' });
};