import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_KEY);
import EmailTemplete from "@/components/ContactForm/emailTemplete";

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            //  phone
            message,
        } = await req.json();

        // console.log("route -> ", { name, email, message });

        await resend.sendEmail({
            // from: "email@mail.abhinav0115.dev",
            // from: "onboarding@resend.dev",
            from: "portfolio@resend.dev",
            to: "abhinav011501@gmail.com",
            subject: "Portfolio contact form submission",
            react: EmailTemplete({ name, email, message }), //TODO: add phone
        });

        console.log("email sent");

        return NextResponse.json({
            status: "ok",
            // data: { name, email, message },
        });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
