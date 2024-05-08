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
                    // reset: true,
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
        <div className="flex flex-1 flex-col md:flex-row gap-7">
            {/* <div className="flex flex-1 -z-10">
                <Image
                    src={Profile}
                    alt=""
                    className=" rounded-xl  w-[90%] mx-auto lg:h-full lg:w-full border-2 shadow-md border-white PhotoReveal"
                />
            </div> */}
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0 lg:ml-2">
                <div className="flex flex-col gap-4 -z-10">
                    <div className="text-3xl text-highlight font-semibold text-center IntroReveal">
                        Career Objective
                    </div>
                    <div className="text-secondary text-lg mt-2 md:mt-0 IntroReveal">
                        <TypeAnimation
                            style={{ whiteSpace: "pre-line" }}
                            sequence={[
                                "",
                                600,
                                // `I am Abhinav Anand, a recent graduate with a fresh perspective and a passion for frontend development. As I step into the professional realm armed with a bachelor's degree in Computer science and engineering, My portfolio is a glimpse of my skills, aspirations, and the potential I can bring into my professional carrier.\nI have a knack of problem solving abilites and always open to learn something new and add to my current skill set.\nCurrently, I am looking for a new and exciting job opportunity where I can showcase my skills.`,
                                `I am Abhinav Anand, a 2023 Computer Science graduate, and my career objective is to apply my detail-oriented approach and adept problem-solving skills in a dynamic professional setting. Fueled by a commitment to staying at the forefront of technology, my diverse internships and self-initiated projects have equipped me with a robust skill set. \n\nI aspire to contribute innovation and efficiency to a forward-thinking organization, leveraging my Passion for continuous learning. Seeking a challenging role that fosters growth, \n\nI aim to be an integral part of impactful projects, driving technological advancements and making meaningful contributions to the ever-evolving field of computer science.`,
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={75}
                            repeat={0}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
