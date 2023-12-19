import { FC } from "react";
import ProjectsCard from "../ui/ProjectsCard";
import { IProjectSectionCardData } from "../utils/Data";

interface ProjectCardSectionProps {
    title: string;
    data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
    // let cardList = 6;

    // async function loadMore() {
    //     "use server";
    //     cardList += 3;
    //     revalidatePath("/");
    // }

    return (
        <section className="grid gap-5 p-5 mt-2 md:p-0">
            <div className="text-3xl font-bold text-center text-highlight mb-4 mt-5 NameReveal">
                {title}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl::grid-cols-3 gap-5">
                {data.map((card) => (
                    <ProjectsCard
                        href={card.href}
                        key={card.id}
                        title={card.title}
                        Icon={card.Icon}
                        bgColor={card.bgColor}
                        techStack={card.techStack}
                        url={card.url}
                        isLive={card.isLive}
                        isRepo={card.isRepo}
                        isCompleted={card.isCompleted}
                        description={card.description}
                    />
                ))}
            </div>

            {/* <form action={loadMore}>
                <button className="text-end text-blue-600 " type="submit">
                    Load More
                </button>
            </form> */}
        </section>
    );
};

export default ProjectCardSection;
