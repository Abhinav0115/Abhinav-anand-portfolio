import Cover from "@/components/Cover";
import CardSection from "@/components/sections/CardSection";
import Hero from "@/components/sections/Hero";
import ProjectCardSection from "@/components/sections/ProjectCardSection";
import WorkExperience from "@/components/sections/WorkExperience";
import {
    backendCard,
    databaseCard,
    WorkExperienceData,
    // devopsCards,
    frontendCard,
    otherCards,
    projectCard,
    // web3Cards,
    languages,
} from "@/components/utils/Data";

export default function Home() {
    return (
        <div>
            <Cover /> {/* Name Section */}
            <div className="flex flex-col gap-6 lg:px-10 overflow-hidden">
                {/* Introduction section */}

                <span id="Introduction" className="invisible" />
                <Hero />

                {/* xxxxxxxxxxxxxxxxxxxx */}
                {/*  Experience section  */}
                <span id="Experience" className="invisible" />
                <WorkExperience title="Work Experience" data={WorkExperienceData} />
                {/* xxxxxxxxxxxxxxxxxxxx */}

                {/*   Project section    */}
                <span id="Projects" className="invisible" />
                <ProjectCardSection title="Projects" data={projectCard} />
                {/* xxxxxxxxxxxxxxxxxxxx */}

                {/*     Tech section     */}
                <span id="TechStack" className="invisible" />
                <span className="text-3xl capitalize font-semibold text-center mt-7 text-highlight NameReveal">
                    Tech Stack
                </span>
                <CardSection title="Frontend" data={frontendCard} />
                <CardSection title="Backend" data={backendCard} />
                <CardSection title="Database" data={databaseCard} />
                {/* <CardSection title="DevOps" data={devopsCards} /> */}
                {/* <CardSection title="Web3" data={web3Cards} /> */}
                <CardSection title="Others" data={otherCards} />
                <CardSection title="Language" data={languages} />
                {/* xxxxxxxxxxxxxxxxxxxx */}

                {/*  Education section   */}
                {/* <span id="Education" className="invisible" /> */}
                {/* xxxxxxxxxxxxxxxxxxxx */}
            </div>
            {/* <span>I'm Looking for a job opponuties</span> */}
        </div>
    );
}
