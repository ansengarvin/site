import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { color_element, color_element_text, color_offwhite, color_title } from "../variables/colors";

const Headerbar = styled.div`
    grid-area: header;
    height: 3.5rem;

    display: flex;
    align-items: center;

    border-bottom: 0.25rem solid ${color_offwhite};

    a {
        //Remove default styling
        text-decoration: none;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        outline: none;

        // My styling
        color: ${color_offwhite};
        font-size: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 10rem;
        margin-left: 5rem;

        
    }
`

export function Header() {
    return (
        <Headerbar>
            <NavLink to="/">Ansen Garvin</NavLink>
        </Headerbar>
    )
}