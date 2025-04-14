import styled from "@emotion/styled"

import { TrekPanel } from "../components/trekpanel"
import { color_background, color_element, color_offwhite, color_projects, color_title } from "../lib/defines/colors"
import { laptop, tablet, phone } from "../lib/defines/screenWidths";


const ProjectCard = styled.a`
    // Remove all a styles
    text-decoration: none;   

    background-color: #1f2026;
    color: ${color_offwhite};
    border-radius: 10px; 
    width: 400px;
    max-width: 100%;
    margin-bottom: 10px;

    .foot {
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .preview {
        overflow: hidden;
        width: 400px;
        max-width: 100%;
        aspect-ratio: 4/3;
        border-radius: 10px;
    }

    .foot {

    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;

        @media (max-width: ${tablet}) {
            font-size: 1.1rem;
        }
    }

    h3 {
        margin: 0;
        padding: 0;
        font-style: italic;
        text-emphasis: normal;
        
        @media (max-width: ${tablet}) {
            font-size: 0.95rem;
        }
    }

    p {
        margin: 0;
        padding: 0;
        margin-top: 5px;
        font-size: 1rem;

        @media (max-width: ${tablet}) {
            font-size: 0.95rem;
        }
    }

    img {
        width: 100%;
        aspect-ratio: 4/3;
        margin: 0;
        padding: 0;
        transition: transform 0.3s ease-in-out;
    }

    i {
        font-size: 0.75rem;
    }

    &:hover img {
        transform: scale(1.1);
    }
`

interface ProjectProps {
    title: string,
    subtitle: string,
    techstack?: string,
    description: string,
    src: string,
    alt: string,
    href: string
}

function Project(props: ProjectProps) {
    const {title, subtitle, techstack, description, src, alt, href} = props
    return (
        <ProjectCard href={href}>
            <div className="preview">
                <img src = {src} alt = {alt} />
            </div>
            <div className="foot">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <i>{techstack}</i>
                <p>{description}</p>     
            </div>
        </ProjectCard> 
    )
}

const ProjectWrapper = styled.div`
    
    background-color: #1f2026;
    padding: 20px;
    border-radius: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

const Separator = styled.div`
    height: 100px;
`

export function Projects() {
    return (
        <TrekPanel title="PORTFOLIO">
            <h1>Professional Timeline</h1>
            <ProjectWrapper>
                <Project
                    title="Forest Craft Logworks"
                    subtitle="Web Consultant (2024)"
                    techstack="React.js"
                    description="Short-term contract. Completely rebuilt the company website from the ground up."
                    src="/fclogworks.png"
                    alt="Forestcraft Logworks Logo"
                    href="https://fclogworks.com"
                />
                <Project
                    title="Oregon State University"
                    subtitle="Bachelor's Degree (2020-2024)"
                    description="Returned to school to obtain my bachelor's degree in Computer Science. Graduated June 2024, cum laude."
                    src="/osu.jpg"
                    alt="Photo of OSU Memorial Union"
                    href="https://engineering.oregonstate.edu/EECS"
                />
                <Project
                    title="Days Gone"
                    subtitle="Quality Assurance Analyst (2017 - 2019)"
                    techstack="Manual Testing, Bug Reporting, Test Case Planning, Jira"
                    description="Tested and reported bugs for game's initial launch. Followed up on bug fixes and verified solutions. Consulted with team to review test plans."
                    src="/daysgone.png"
                    alt="Days Gone Logo"
                    href="https://www.bendstudio.com/game/days-gone"
                />
            </ProjectWrapper>
            <h1>Projects</h1>
            <ProjectWrapper>
                <Project
                    title="Kilocal Nutrition Tracker"
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
                <Project
                    title="PowerMech Arena"
                    subtitle="Bigmode Game Jam 2025"
                    techstack="C++, SDL"
                    description="A game where you battle bosses in a mech arena. Built with small team using a custom-made engine over the course of one week."
                    src="/powermecharena.png"
                    alt="PowerMech Arena Splash Screen Picture"
                    href="https://countingmouse.itch.io/powermecharena"
                />
                <Project
                    title="N-Body Simulation"
                    subtitle="Personal Project"
                    techstack="C++, OpenGL, OpenMP, SIMD"
                    description="A direct gravitational simulation of the N-Body problem, visualized using OpenGL and parallelized with OpenMP and SIMD intrinsics"
                    src="/nbody.png"
                    alt="N-Body Simulation Screenshot"
                    href="https://www.youtube.com/watch?v=XzA_6H3h5Cg"
                />
                <Project
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