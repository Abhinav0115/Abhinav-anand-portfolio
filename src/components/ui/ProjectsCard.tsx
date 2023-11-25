import { FC } from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ProjectsCardProps {
    title: string;
    Icon: LucideIcon;
    href?: string;
    bgColor: string;
    techStack: string;
    url?: string;
    isLive?: boolean;
    isCompleted?: boolean;
    description?: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
    title,
    Icon,
    href,
    bgColor,
    techStack,
    url,
    isLive,
    isCompleted,
}) => {
    return (
        <>
            {isCompleted && (
                <div className="flex gap-3 relative bg-cardPrimary rounded-lg overflow-ellipsis p-3 techProjectReveal">
                    <Link target="_blank" href={href || "/"}>
                        <div className="flex gap-3">
                            <div
                                className="flex h-full py-7 px-4 rounded-md justify-center items-center "
                                style={{ backgroundColor: bgColor }}
                            >
                                <Icon className="h-8 w-8" />
                            </div>
                            <div className="flex flex-col mt-1">
                                <div className="flex font-bold mb-2">
                                    {title}
                                </div>
                                <div className="flex text-info text-sm">
                                    {techStack}
                                </div>
                            </div>
                        </div>
                    </Link>
                    {isLive && (
                        <Link
                            target="_blank"
                            href={url || "/"}
                            className="absolute top-0 right-0 bg-green-600 p-1 px-2 text-white text-sm rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg hover:bg-green-800"
                        >
                            Live View
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default ProjectsCard;
