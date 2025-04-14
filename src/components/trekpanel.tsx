import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { color_background, color_element, color_gradient_A, color_title} from "../lib/defines/colors";
import { laptop, phone, tablet } from "../lib/defines/screenWidths";

interface TrekPanelProps {
    children: React.ReactNode;
    title: string;
}

export function TrekPanel(props: TrekPanelProps) {
    const {children, title} = props
    const mobile = window.matchMedia("(max-width: 770px)").matches;
    return (
        <Backdrop>
            <NavBar mobile={mobile}/>
            <Title>
                {title}
                <div className="cap"></div>
            </Title>
            <Content>
                <div>
                    {children || <Outlet/>}
                </div>
            </Content>
            <DecorativeFootCap/>
        </Backdrop>
    )
    
}

/*
    CSS Style
*/
const Backdrop = styled.div`
    grid-area: main;
    //background-color: ${color_element};

    background: #D69744;
    background: radial-gradient(
        ellipse 100% 60%,
        ${color_title} 0%,
        ${color_gradient_A} 50%,
        ${color_element} 100%
    );
    color: white;
    border-top-left-radius: 100px;
    //media radii for top left
    @media (max-width: ${laptop}) {
        border-top-left-radius: 80px;
    }
    @media (max-width: ${tablet}) {
        border-top-left-radius: 50px;
    }
    @media (max-width: ${phone}) {
        border-top-left-radius: 30px;
    }
    border-bottom-left-radius: 25px;

    display: grid;
    grid-template-areas:
        "top top title"
        "nav content content"
        "foot foot foot"
    ;
    grid-template-rows: min-content 1fr 25px;
    grid-template-columns: auto 1fr 1fr;
`

const Content = styled.div`
    grid-area: content;
    background-color: ${color_background};
    display: flex;
    justify-content: center;


    border-top-left-radius: 75px;
    border-bottom-left-radius: 75px;
    @media (max-width: ${laptop}) {
        border-top-left-radius: 60px;
        border-bottom-left-radius: 60px;
    }
    @media (max-width: ${tablet}) {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }
    @media (max-width: ${phone}) {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }

    div {
        width: 90%;
    }

    h1 {
        font-family: "Saira Extra Condensed", sans-serif;
        font-weight: normal;
        font-style: normal;

        font-size: 4rem;
        @media (max-width: ${laptop}) {
            font-size: 3.5rem;
        }
        @media (max-width: ${tablet}) {
            font-size: 3rem;
        }
        @media (max-width: ${phone}) {
            font-size: 2rem;
        }

        margin: 0;
    }

    p {
        font-size: 1.5rem;

        @media (max-width: ${phone}) {
            font-size: 0.9rem;
        }
    }
`

const Title = styled.div`
    grid-area: title;
    background-color: ${color_background};
    color: ${color_title};
    width: min-content;
    margin-left: auto;

    display: flex;

    font-size: 8rem;
    line-height: 6rem;
    @media (max-width: ${laptop}) {
        font-size: 8rem;
        line-height: 6rem;
    }
    @media (max-width: ${tablet}) {
        font-size: 4rem;
        line-height: 3rem;
    }
    @media (max-width: ${phone}) {
        font-size: 3rem;
        line-height: 2.3rem;
    }

    padding: 0rem;
    padding-left: 3px;
    padding-right: 3px;
    font-family: "Saira Extra Condensed", sans-serif;
    font-weight: normal;
    font-style: normal;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    div.cap {
        width: 50px;
        height: 100%;
        border-top-right-radius: 80%;
        border-bottom-right-radius: 80%;
        background-color: ${color_element};
    }
`;

const DecorativeFootCapStyle = styled.div`
    grid-area: foot;
    background-color: ${color_background};
    height: 100%;
    width: 15px;
    margin-left: auto;
    div {
        background-color: ${color_element};
        height: 100%;
        width: 100%;
        border-top-right-radius: 80%;
        border-bottom-right-radius: 80%;
    }
`

function DecorativeFootCap() {
    return (
        <DecorativeFootCapStyle>
            <div/>
        </DecorativeFootCapStyle>
    )
}

