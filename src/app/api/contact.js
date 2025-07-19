import { verify } from 'hcaptcha';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email, message, token } = await req.json();

    if (!token) {
        return NextResponse.json({ message: 'No captcha token' }, {status: 400 });
    }

    const { success, 'error-codes': errors } = await verify(
        process.env.HCAPTCHA_SECRET,
        token
    );

    if (!success) {
        return NextResponse.json({
            message: 'Captcha validation failed',
            errors
        }, {
            status: 401
        });
    }

    return NextResponse.json({ message: 'Success' });
}