import { FC } from "react";
import { IProjectSectionCardData } from "../utils/Data";
import ProjectCardSection from "./sidebarProjectCard";

interface SidebarProjectCardSectionProps {
    data: IProjectSectionCardData[];
}

const SideProject: FC<SidebarProjectCardSectionProps> = ({ data }) => {
    return (
        <>
            {data.slice(0, 7).map((card) => (
                <ProjectCardSection
                    href={card.href}
                    key={card.id}
                    title={card.title}
                    Icon={card.Icon}
                    url={card.url}
                    isLive={card.isLive}
                    isRepo={card.isRepo}
                    isCompleted={card.isCompleted}
                    bgColor={card.bgColor}
                />
            ))}
        </>
    );
};

export default SideProject;
