import { LucideIcon } from "lucide-react";
import { FC } from "react";
import Link from "next/link";

interface ProjectsCardProps {
    title: string;
    Icon: LucideIcon;
    href?: string;
    url?: string;
    isLive?: boolean;
    isCompleted?: boolean;
    isRepo?: boolean;
    bgColor: string;
}

import List from "../ui/List";
// import { useMenu } from "../Provider";

const SidebarProjectCard: FC<ProjectsCardProps> = ({
    title,
    Icon,
    href,
    url,
    isLive,
    isCompleted,
    isRepo,
    bgColor,
}) => {
    return (
        <>
            {isCompleted && (
                <div className="relative">
                    <List
                        target="_blank"
                        // link={href || ""}
                        link={isRepo ? href : ""}
                        effect="slideUp"
                        className=""
                    >
                        <div
                            className="flex h-full text-white py-1 px-1 rounded-md justify-center items-center"
                            style={{ backgroundColor: bgColor }}
                        >
                            <Icon className="h-6 w-6" />
                        </div>
                        {title}
                    </List>
                    {isLive && (
                        <Link
                            target="_blank"
                            href={url || ""}
                            className="absolute -right-4 top-5 text-sm text-white font-semibold bg-green-600 p-0.5 px-3 py-1 rounded-md hover:bg-green-700"
                        >
                            Live
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default SidebarProjectCard;
