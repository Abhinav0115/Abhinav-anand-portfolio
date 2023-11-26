import Cover from "@/components/Cover";
import CardSection from "@/components/sections/CardSection";
import Hero from "@/components/sections/Hero";
import ProjectCardSection from "@/components/sections/ProjectCardSection";
import {
    backendCard,
    databaseCard,
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
            <Cover />
            <div className="flex flex-col gap-10 lg:px-10 overflow-hidden">
                <span id="Introduction" className="invisible" />
                <Hero />
                <span id="Projects" className="invisible" />
                <ProjectCardSection title="Projects" data={projectCard} />
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
            </div>
        </div>
    );
}
