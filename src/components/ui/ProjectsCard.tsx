import { FC } from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {IProjectSectionCardData } from "../utils/Data";


const ProjectsCard: FC<IProjectSectionCardData> = ({
    title,
    Icon,
    href,
    bgColor,
    techStack,
    url,
    isLive,
    isRepo,
    isCompleted,
}) => {
    return (
        <>
            {isCompleted && (
                <div className="flex gap-3 relative bg-cardPrimary rounded-lg overflow-ellipsis p-3 techProjectReveal">
                    {/* <Link target="_blank" href={href || "/"}> */}
                    <div className="flex gap-3">
                        <div
                            className="flex h-full py-7 px-4 rounded-md justify-center items-center "
                            style={{ backgroundColor: bgColor }}
                        >
                            <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col mt-1">
                            <div className="flex font-bold mb-2">{title}</div>
                            <div className="flex text-info text-sm">
                                {techStack}
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                    {isLive && (
                        <Link
                            target="_blank"
                            href={url || ""}
                            className="absolute top-0 right-0 bg-green-600 p-1 px-2 text-white text-sm rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg text-center  hover:bg-green-700 h-7 flex justify-center items-center w-20"
                        >
                            Live View
                        </Link>
                    )}
                    {isRepo && (
                        <Link
                            target="_blank"
                            href={href || ""}
                            className="absolute flex p-1 px-2 ps-1 top-3 left-3 h-4/5 w-16 bg-transparent text-center text-white rounded-md text-xs justify-center font-bold
                            //
                            lg:top-0 lg:right-[5.3rem] lg:left-auto lg:bg-amber-600 lg:h-7 lg:w-16 lg:rounded-br-none lg:rounded-tr-lg lg:rounded-bl-lg lg:rounded-tl-none  lg:text-sm lg:px-2 lg:hover:text-sm lg:hover:items-start lg:justify-center lg:hover:bg-amber-700 lg:font-semibold
                            //
                            hover:ps-2 hover:bg-slate-900 hover:text-center hover:text-white hover:bg-opacity-50 hover:text-sm hover:items-center hover:justify-center"
                        >
                            Source
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default ProjectsCard;
