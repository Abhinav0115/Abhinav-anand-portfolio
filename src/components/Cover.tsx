"use client";
import { FC } from "react";
import ProfilePic from "./cover/ProfilePic";
import ProfileName from "./cover/ProfileName";
import Button from "./ui/Button";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
    return (
        <div className="flex rounded-lg w-full bg-[url('/images/cover.png')] bg-no-repeat bg-cover bg-center coverReveal">
            <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-7 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
                <ProfilePic />
                <div className="flex md:flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between items-center gap-5 ">
                        <ProfileName />

                        <div className="flex flex-col gap-5 ">
                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://drive.google.com/file/d/1ODRBwns-5Va21VBu4H62CirMYFeqnYgZ/view?usp=sharing"
                            >
                                <Button
                                    variant="white"
                                    sizes={"iconOnly"}
                                    className="hover:bg-[#1c1b23] hover:text-[#c0bfc4] transition-colors duration-2 w-full"
                                >
                                    <Download />
                                    <span className="hidden md:block font-semibold">
                                        <TypeAnimation
                                            sequence={[
                                                "",
                                                2000,
                                                "View Resume",
                                                1000,
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            speed={15}
                                            repeat={1}
                                            className=""
                                        />
                                    </span>
                                </Button>
                            </Link>
                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://github.com/Abhinav0115"
                            >
                                <Button
                                    variant="primary"
                                    sizes={"small_btn"}
                                    className="hover:bg-gray-200 hover:text-black transition-colors duration-2 w-full"
                                >
                                    <Github />
                                    <span className="hidden md:block">
                                        <TypeAnimation
                                            sequence={[
                                                "",
                                                1500,
                                                "Follow me on Github",
                                                1000,
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            speed={20}
                                            repeat={1}
                                            className=""
                                        />
                                    </span>
                                </Button>
                            </Link>
                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://www.linkedin.com/in/abhinav0115"
                            >
                                <Button
                                    variant="white"
                                    sizes={"iconOnly"}
                                    className="hover:bg-[#1c1b23] hover:text-[#c0bfc4] transition-colors duration-2 w-full"
                                >
                                    <Linkedin />
                                    <span className="hidden md:block font-semibold">
                                        <TypeAnimation
                                            sequence={[
                                                "",
                                                1500,
                                                "Connect me on LinkedIn",
                                                1000,
                                            ]}
                                            wrapper="span"
                                            cursor={false}
                                            speed={30}
                                            repeat={1}
                                            className=""
                                        />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                        {/* <Link
                            className="hidden md:block"
                            target="_blank"
                            href="https://github.com/Abhinav0115"
                        >
                            <Button variant="primary" sizes={"small"}>
                                <Github />
                                <span className="hidden md:block">
                                    Follow me on Github
                                </span>
                            </Button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
