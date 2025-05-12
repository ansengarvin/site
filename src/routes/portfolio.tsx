import styled from "@emotion/styled";

import { TrekPanel } from "../components/trekpanel";
import { ProjectCard } from "../components/projectCard";

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

export function Projects() {
    return (
        <TrekPanel title="PROJECTS">
            <h1>Portfolio</h1>
            <ProjectWrapper>
                <ProjectCard
                    title="Gravity"
                    subtitle="Interactive 3D Orbital Simulator"
                    techstack="React, TypeScript, Redux, WebGL"
                    description="
                        A fully interactive orbital physics simulator. Built in React using a custom WebGL rendering engine,
                        with Redux for management of graphical and simulation setting state. 
                    "
                    src="/gravity.png"
                    alt="Gravity Screenshot"
                    href="https://gravity.ansengarvin.com"
                />
                <ProjectCard
                    title="Nutrition Tracker"
                    subtitle="Full-Stack Application"
                    techstack="Typescript, React.js, Express.js, PostgreSQL, nginx, AWS, Firebase(auth)"
                    description="
                        A nutrition tracker, built to make calorie and nutrient tracking as easy as possible.
                        The website is currently offline, so this links to the repository.
                    "
                    src="/kcal.png"
                    alt="Kilocal Nutrition App Screenshot"
                    href="https://github.com/ansengarvin/kilocal"
                />
                <ProjectCard
                    title="PowerMech Arena"
                    subtitle="Bigmode Game Jam 2025"
                    techstack="C++, SDL"
                    description="A game where you battle bosses in a mech arena. Built with small team using a custom-made engine over the course of one week."
                    src="/powermecharena.png"
                    alt="PowerMech Arena Splash Screen Picture"
                    href="https://countingmouse.itch.io/powermecharena"
                />
                <ProjectCard
                    title="Orbital Simulation (C++)"
                    subtitle="Parallel Computation Experiment"
                    techstack="C++, OpenGL, OpenMP, SIMD"
                    description="
                        A gravitational simulation of orbital physics built in C++ to experiement with parallel computing.
                        Utilizing OpenMP multicore and SIMD intrinsics yielded a 15x speedup in simulation tick rate.
                    "
                    src="/nbody.png"
                    alt="N-Body Simulation Screenshot"
                    href="https://www.youtube.com/watch?v=XzA_6H3h5Cg"
                />
                <ProjectCard
                    title="The Unknown Venome"
                    subtitle="Senior Capstone Project"
                    techstack="Svelte, Python(fastAPI), PostgreSQL"
                    description="Designed database to store venom proteins. Created interface to visualize protein structures. Deployed and used by OSU's Venom Biochemistry Lab."
                    src="/gh_comp.png"
                    alt="Protein Structure 3D Model"
                    href="https://venome.cqls.oregonstate.edu/"
                />
            </ProjectWrapper>
            <Separator />
        </TrekPanel>
    );
}
