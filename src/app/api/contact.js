import { verify } from 'hcaptcha';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message, captchaToken } = await req.json();

    if (!captchaToken) {
        return NextResponse.json({ message: 'No captcha token' }, { status: 400 });
    }

    const { success } = await verify(process.env.HCAPTCHA_SECRET, captchaToken);
    if (!success) {
        return NextResponse.json({ message: 'Captcha failed' }, { status: 401 });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.protonmail.ch',
        port: 587,
        secure: true
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.RECEIVE_EMAIL,
            subject: `Message from: ${name}`,
            text: message,
            html: message,
            replyTo: email
        });
        return NextResponse.json({ message: 'Email sent!' });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Email failed to send'}, { status: 500 });
    }
}