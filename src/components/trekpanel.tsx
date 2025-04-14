import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";
import { color_background, color_element} from "../lib/defines/colors";

interface TrekPanelProps {
    children: React.ReactNode;
    title: string;
}

const Backdrop = styled.div`
    grid-area: main;
    background-color: ${color_element};
    color: white;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 25px;

    display: grid;
    grid-template-areas:
        "top top title"
        "nav content content"
        "foot foot foot"
    ;
    grid-template-rows: 100px 1fr 25px;
    grid-template-columns: auto 1fr 1fr;
`

const Content = styled.div`
    grid-area: content;
    background-color: ${color_background};
    padding-left: 100px;
    padding-right: 100px;
`

export function TrekPanel(props: TrekPanelProps) {
    const {children, title} = props
    const mobile = window.matchMedia("(max-width: 425px)").matches;
    return (
        <Backdrop>
            <NavBar/>
            <Content>
                {children || <Outlet/>}
            </Content>
        </Backdrop>
    )
    
}
