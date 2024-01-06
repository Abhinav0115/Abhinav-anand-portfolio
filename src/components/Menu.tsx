"use client";
import React from "react";

import ContactForm from "@/components/ContactForm";
import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import SideBar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import useReadingprogress from "@/components/scrollProgress/useReadingprogress";

const Menu = ({ children }: { children: React.ReactNode }) => {
    const completion = useReadingprogress();

    return (
        <MenuProvider>
            <span
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className="fixed bg-yellow-400 h-1 w-full top-0 z-50"
            />
            <ContactFormProvider>
                <ContactForm />
                <div className="flex">
                    <SideBar />
                    <main className="flex-1 pl-0 lg:pl-[300px]">
                        <Navbar />
                        {children}
                    </main>
                </div>
            </ContactFormProvider>
        </MenuProvider>
    );
};

export default Menu;
