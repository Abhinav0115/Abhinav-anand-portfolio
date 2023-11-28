"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FC } from "react";
import Profile from "@/../public/images/heroProfile.jpg";
import { TypeAnimation } from "react-type-animation";

// import ScrollReveal from "scrollreveal";

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    const refToComponent = React.useRef(null);

    useEffect(() => {
        async function loadScrollReveal() {
            if (refToComponent) {
                const ScrollReveal = (await import("scrollreveal")).default;

                ScrollReveal({
                    duration: 700,
                    delay: 50,
                    reset: true,
                    opacity: 0,
                    easing: "ease-in-out",
                    distance: "150px",
                });

                ScrollReveal().reveal(".IntroReveal", {
                    origin: "right",
                    distance: "200px",
                    interval: 150,
                });

                // ScrollReveal().reveal(".PhotoReveal", {
                //     origin: "bottom",
                //     distance: "200px",
                // });

                ScrollReveal().reveal(".techCardReveal", {
                    origin: "bottom",
                    interval: 150,
                    // distance: "0px",
                    rotate: {
                        x: 0,
                        y: 90,
                        z: 0,
                    },
                });

                ScrollReveal().reveal(".techProjectReveal", {
                    origin: "bottom",
                    interval: 150,
                    // distance: "0px",
                    rotate: {
                        x: 0,
                        y: 90,
                        z: 0,
                    },
                });

                ScrollReveal().reveal(".NameReveal", {
                    distance: "0px",
                    origin: "top",
                    interval: 200,
                    duration: 700,
                    rotate: {
                        x: 90,
                        y: 0,
                        z: 0,
                    },
                });
            }
        }
        loadScrollReveal();
    }, []);

    return (
        <div className="flex flex-1 flex-col md:flex-row gap-7 mt-3">
            <div className="flex flex-1 -z-10">
                <Image
                    src={Profile}
                    alt=""
                    className=" rounded-xl  w-[90%] mx-auto lg:h-full lg:w-full border-2 shadow-md border-white PhotoReveal"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0 lg:ml-2">
                <div className="flex flex-col gap-4 -z-10">
                    <div className="text-3xl text-highlight font-semibold text-center IntroReveal">
                        Introduction
                    </div>
                    <div className="text-secondary text-lg mt-2 md:mt-0  max-w-[400px] IntroReveal">
                        <TypeAnimation
                            style={{ whiteSpace: "pre-line" }}
                            sequence={[
                                "",
                                600,
                                `I'm Abhinav Anand, a recent graduate with a fresh perspective and a passion for 'frontend developers'. As I step into the professional realm armed with a bachelor's degree in 'computer science and engineering', this portfolio is a glimpse into my skills, aspirations, and the potential I bring to your team.\nI love to break boundaries and am always eager to learn new things.\nI am currently on the lookout for new and exciting job opportunities where I can bring my skills to the table.`,

                                // " I love to break boundaries and I always come with a 'can do' attitude with a strong sense of responsibility looking forward to working with a team that enjoys challenging projects and has an innovative outlook. I'm also open to tips on interview preparation, building a personal brand, launching a start-up, and he really really needs productivity tips. I always open to new opportunities and would love to have a chat over coffee. He is always open to new opportunities and would love to have a chat over coffee.",
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={70}
                            repeat={0}
                            className=""
                        />
                    </div>
                    {/* <div className="text-secondary text-base mt-2 md:mt-0  max-w-[400px]">
                        I love to break boundaries and I always come with a
                        &apos;can do&apos; attitude with a strong sense of
                        responsibility looking forward to working with a team
                        that enjoys challenging projects and has an innovative
                        outlook. I&apos;m also open to tips on interview
                        preparation, building a personal brand, launching a
                        start-up, and he really really needs productivity tips.
                        I always open to new opportunities and would love to
                        have a chat over coffee. He is always open to new
                        opportunities and would love to have a chat over coffee.
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Intro;
