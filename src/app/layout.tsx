import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
    title: "Abhinav Anand Portfolio (@abhinav0115)",
    description: "Abhinav Anand Portfolio - MERN Stack Developer",
    // icons: ["/images/profilePic_Icon.png"],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/favicon.ico",
        },
    },
    generator: "Abhinav Anand",
    publisher: "Abhinav Anand",
    creator: "Abhinav Anand",
    keywords: [
        "Abhinav Anand",
        "Abhinav",
        "Portfolio",
        "React",
        "Nextjs",
        "Tailwindcss",
        "Typescript",
        "Javascript",
        "Developer",
        "Abhinav Anand Portfolio",
        "Abhinav Anand Portfolio (abhinav0115)",
        "Abhinav Anand Portfolio (abhinav0115) - Reactjs - Nextjs - Nodejs - Expressjs - MongoDB - Tailwindcss - Typescript - Javascript - Full Stack Developer - Full Stack - Developer",
    ],
    viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="select-none">
                <SpeedInsights />
                <Toaster />

                <Menu>{children}</Menu>
            </body>
        </html>
    );
}
