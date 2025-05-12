import styled from "@emotion/styled";
import { color_offwhite } from "../lib/defines/colors";
import { tablet } from "../lib/defines/screenWidths";

const ProjectCardStyle = styled.a`
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
`;

interface ProjectCardProps {
    title: string;
    subtitle: string;
    techstack?: string;
    description: string;
    src: string;
    alt: string;
    href: string;
}

export function ProjectCard(props: ProjectCardProps) {
    const { title, subtitle, techstack, description, src, alt, href } = props;
    return (
        <ProjectCardStyle href={href}>
            <div className="preview">
                <img src={src} alt={alt} />
            </div>
            <div className="foot">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <i>{techstack}</i>
                <p>{description}</p>
            </div>
        </ProjectCardStyle>
    );
}
