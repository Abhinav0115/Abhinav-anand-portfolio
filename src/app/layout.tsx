import "./globals.css";
import type { Metadata } from "next";
import SideBar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Abhinav Anand Portfolio (@abhinav0115)",
    description: "Abhinav Anand Portfolio - MERN Stack Developer",
    icons: ["/images/profilePic_Icon.png"],
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
                <MenuProvider>
                    <ContactFormProvider>
                        <ContactForm />
                        <Toaster />
                        <div className="flex">
                            <SideBar />
                            <main className="flex-1 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
