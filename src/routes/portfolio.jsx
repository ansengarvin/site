import styled from "@emotion/styled"

import { TrekPanel } from "../components/trekpanel"
import { color_background, color_element, color_offwhite, color_projects, color_title } from "../variables/colors"

import nbody from "/nbody.png"
import gh_comp from "/gh_comp.png"
import dg from "/daysgone.png"
import fclogworks from "/fclogworks.png"
import { useOutletContext } from "react-router-dom"

const ProjectCard = styled.a`
    // Remove all a styles
    text-decoration: none;   

    background-color: #000000;
    color: black;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-width: 0px;
    border-style: solid;
    border-color: ${color_background};
    
    a {
        display: inline;
        margin-right: 20px;
        height: 100%;
        text-decoration: none;
    }

    .foot {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: ${color_projects};
        height: 135px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .preview {
        overflow: hidden;
        
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .foot {

    }

    h2 {
        margin: 0;
        padding: 0;
        margin-top: 5px;
    }

    h3 {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
        margin-top: 5px;
    }

    img {
        height: 270px;
        margin: 0;
        padding: 0;
        transition: transform 0.3s ease-in-out;
    }

    &:hover img {
        transform: scale(1.1);
    }
`

function Project(props) {
    const {title, subtitle, description, src, alt, href} = props
    return (
        <ProjectCard href={href}>
            <div className="preview">
                <img src = {src} alt = {alt} />
            </div>
            
            <div className="foot">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
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
    const mobile = useOutletContext()
    return (
        <TrekPanel title = "PORTFOLIO" mobile = {mobile}>
            <h1>Professional Experience</h1>
            <ProjectWrapper>
                <Project
                    title="Forestcraft Logworks"
                    subtitle="Web Consultant"
                    description="Modernized the website for a local construction company, improving performance and user experience."
                    src={fclogworks}
                    alt="Forestcraft Logworks Logo"
                    href="https://fclogworks.com"
                    
                />
                <Project
                    title="The Unknown Venome"
                    subtitle="Capstone Student"
                    description="A website to store and analyze hundreds of venom proteins from the Venom Biochemsitry Lab at Oregon State University."
                    src={gh_comp}
                    alt="Protein Structure 3D Model"
                    href="https://venome.cqls.oregonstate.edu/"
                />
                <Project
                    title="Days Gone"
                    subtitle="Quality Assurance Analyst"
                    description="Role: QA Analyst."
                    src={dg}
                    alt="Days Gone Logo"
                    href="https://www.bendstudio.com/game/days-gone"
                />
            </ProjectWrapper>

            <h1>Personal Projects</h1>
            <ProjectWrapper>
                <Project
                    title="N-Body Simulation"
                    subtitle="Personal Project"
                    description="A direct gravitational simulation of the N-Body problem, visualized using OpenGL and parallelized with OpenMP"
                    src={nbody}
                    alt="N-Body Simulation Screenshot"
                    href="https://www.youtube.com/watch?v=XzA_6H3h5Cg"
                />
                <Project
                    title="Spheropoly"
                    subtitle="Class Project"
                    description="A simplified version of Monopoly, played against an AI controlling a Sphero Bolt robot as its game piece on a physical board."
                />
            </ProjectWrapper>
            <Separator/>
        </TrekPanel>
    )
}