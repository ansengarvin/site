import styled from "@emotion/styled";

import { TrekPanel } from "../components/TrekPanel";
import { ProjectCard } from "../components/ProjectCard";

import { projectImages } from "../assets/images/projects/projectImages";

const ProjectWrapper = styled.div`
    background-color: #1f2026;
    padding: 20px;
    border-radius: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`;

const Separator = styled.div`
    height: 100px;
`;

export function CV() {
    return (
        <TrekPanel title="RESUME">
            <h1>Professional Timeline</h1>
            <ProjectWrapper>
                <ProjectCard
                    title="Forest Craft Logworks"
                    subtitle="Web Consultant (2024)"
                    techstack="React.js"
                    description="Short-term contract. Completely rebuilt the company website from the ground up."
                    src={projectImages.fclogworks}
                    alt="Forestcraft Logworks Logo"
                    href="https://fclogworks.com"
                />
                <ProjectCard
                    title="Oregon State University"
                    subtitle="Bachelor's Degree (2020-2024)"
                    description="Returned to school to obtain my bachelor's degree in Computer Science. Graduated June 2024, cum laude."
                    src={projectImages.osu}
                    alt="Photo of OSU Memorial Union"
                    href="https://engineering.oregonstate.edu/EECS"
                />
                <ProjectCard
                    title="Days Gone"
                    subtitle="Quality Assurance Analyst (2017 - 2019)"
                    techstack="Manual Testing, Bug Reporting, Test Case Planning, Jira"
                    description="Tested and reported bugs for game's initial launch. Followed up on bug fixes and verified solutions. Consulted with team to review test plans."
                    src={projectImages.daysgone}
                    alt="Days Gone Logo"
                    href="https://www.bendstudio.com/game/days-gone"
                />
            </ProjectWrapper>
            <Separator />
        </TrekPanel>
    );
}
