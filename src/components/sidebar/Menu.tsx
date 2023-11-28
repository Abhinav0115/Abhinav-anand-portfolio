import { FC } from "react";
import {
    Code,
    Flame,
    Github,
    Home,
    Linkedin,
    Video,
    X,
    CodepenIcon,
    CpuIcon,
    FileSpreadsheet,
    GraduationCapIcon,
    LaptopIcon,
} from "lucide-react";
import List from "../ui/List";
import { useMenu } from "../Provider";
import { projectCard } from "@/components/utils/Data";

import SideProject from "./sidebarprojectSection";
import Link from "next/link";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    const { showMenuVisibility } = useMenu();

    return (
        <div
            className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5 scroll-smooth"
            onClick={() => showMenuVisibility(false)}
        >
            <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
                <X className={`text-primary`} />
            </div>
            {/* List 1 */}
            <List link="/" effect="slideUp">
                <Home /> Home
            </List>
            <List link="#Introduction" effect="slideUp">
                <Flame /> Introduction
            </List>
            {/* <List link="#Experience" effect="slideUp">
                <LaptopIcon /> Working Experience
            </List> */}
            <List link="#Projects" effect="slideUp">
                <Code /> Projects
            </List>
            <List link="#TechStack" effect="slideUp">
                <CpuIcon /> Tech Stack
            </List>
            {/* <List link="#Education" effect="slideUp">
                <GraduationCapIcon /> Education
            </List> */}

            {/* List 2 */}
            <div className="mt-5">Socials</div>
            {/* <List
                target="_blank"
                link="https://www.instagram.com/ezsnippet/"
                effect="slideUp"
            >
                <Instagram color="#b5179e" /> Instagram
            </List> */}
            <List
                target="_blank"
                link="https://github.com/Abhinav0115"
                effect="slideUp"
            >
                <Github color="#2a9d8f" /> Github
            </List>
            <List
                target="_blank"
                link="https://www.linkedin.com/in/abhinav0115"
                effect="slideUp"
            >
                <Linkedin color="#0277b5" /> Linkedin
            </List>
            <List
                target="_blank"
                link="https://drive.google.com/file/d/1ODRBwns-5Va21VBu4H62CirMYFeqnYgZ/view?usp=sharing"
                effect="slideUp"
            >
                <FileSpreadsheet color="#e6db11" /> Resume
            </List>
            <List
                target="_blank"
                link="https://codepen.io/Abhinav0115"
                effect="slideUp"
            >
                <CodepenIcon color="#e63946" /> CodePen.io
            </List>
            {/* <List
                target="_blank"
                link="https://stackoverflow.com/users/13744925/abhinav0115"
                effect="slideUp"
            >
                <Layers color="#f77f00" /> Stack overflow
            </List> */}

            {/* List 3 */}
            <div className="mt-5">Projects</div>

            <SideProject data={projectCard} />
            <Link
                href="#Projects"
                className="text-sm text-center text-secondary mt-2 p-2"
            >
                For more projects, please
                <br />
                visit the{" "}
                <span className="text-red-800">&apos;Projects&apos; </span>
                section.
            </Link>
        </div>
    );
};

export default Menu;
