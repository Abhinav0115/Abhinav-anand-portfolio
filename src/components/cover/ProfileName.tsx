"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Button from "../ui/Button";
import { Github, Linkedin, FileSpreadsheet } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    // const [textColor, setTextColor] = useState("");
    return (
        <div
            className="text-2xl lg:text-4xl flex flex-col font-bold text-highlight ml-3 lg:ml-0 h-28"
            // style={{ color: textColor }}
        >
            <span className="text-gray-200">
                I<span className="text-cyan-400">&apos;</span>m{" "}
                <span className=" text-cyan-400">Abhinav Anand</span>
            </span>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    // "Abhinav Anand",
                    // 1100,
                    // () => setTextColor("red"),
                    "a Frontend Developer",
                    1000,
                    "",
                    100,
                    // () => setTextColor("blue"),
                    "a MERN Stack Developer",
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                speed={20}
                deletionSpeed={30}
                repeat={Infinity}
                className=" text-xl lg:text-4xl font-bold text-cyan-400 "
                // style={{ color: textColor }}
            />
            <div className="text-sm font-normal flex justify-between items-center">
                <span className="ml-1 md:ml-0">
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={["", 300, "@abhinav0115", 1000]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        speed={20}
                        className="text-sm hidden lg:block"
                    />
                </span>
                <span className="block lg:hidden mr-5">@abhinav0115</span>
                <div className="flex gap-2 mt-2">
                    <Link
                        className="block md:hidden"
                        href="https://drive.google.com/file/d/1ODRBwns-5Va21VBu4H62CirMYFeqnYgZ/view?usp=sharing"
                        target="_blank"
                    >
                        <Button variant="primary" sizes={"iconOnly"}>
                            <FileSpreadsheet />
                        </Button>
                    </Link>
                    <Link
                        className="block md:hidden"
                        href="https://github.com/Abhinav0115"
                        target="_blank"
                    >
                        <Button variant="primary" sizes={"iconOnly"}>
                            <Github />
                        </Button>
                    </Link>
                    <Link
                        className="block md:hidden"
                        href="https://www.linkedin.com/in/abhinav0115"
                        target="_blank"
                    >
                        <Button variant="primary" sizes={"iconOnly"}>
                            <Linkedin />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileName;
