"use client";
import React, { useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import { FC } from "react";
import Button from "./ui/Button";
import { useContact, useMenu } from "./Provider";
import { toast } from "react-hot-toast";

import { TypeAnimation } from "react-type-animation";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { setFormVisibility } = useContact();
    const { showMenu, showMenuVisibility } = useMenu();

    useEffect(() => {
        if (window.screen.width > 1000) {
            toast(
                "Please, Disable Dark Mode Extension. \nIf something looks weird. Thanks!",
                {
                    position: "top-left",
                    // duration: 4000,
                    className: "hidden lg:block text-center",
                    icon: "🔥",
                    style: {
                        border: "3px double #713200",
                        color: "#ff2200",
                        background: "#f0f3ee",
                        borderRadius: "10px",
                        padding: "5px 10px",
                    },
                }
            );
        }
    }, []);

    return (
        <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between">
            <div>{/* Empty space for search bar */}</div>
            <div>
                <TypeAnimation
                    sequence={[
                        300,
                        "Hello,",
                        300,
                        "Welcome to my Portfolio",
                        1000,
                        "",
                        // "Don't forget to leave a star ⭐️",
                        // 300,
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={20}
                    repeat={1}
                    deletionSpeed={60}
                    className="text-sm lg:text-2xl font-semibold "
                />
            </div>
            <div className="flex items-center gap-5">
                <Button onClick={setFormVisibility}>
                    Contact Me <User size={18} />
                </Button>

                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
