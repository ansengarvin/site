import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { color_element, color_element_text, color_offwhite, color_title } from "../variables/colors";
import { laptop, tablet, phone } from "../variables/screens";

const Headerbar = styled.div`
    grid-area: header;
    height: 45px;

    display: flex;
    align-items: center;

    border-bottom: 0.25rem solid ${color_offwhite};

    @media (max-width: ${phone}) {
        height: 30px;
    }

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
        margin-left: 10px;

        @media (max-width: ${tablet}) {
            margin-left: 5px;
        }

        @media (max-width: ${phone}) {
            margin-left: 0px;
            font-size: 0.95rem;
        }
    }
`

export function Header() {
    return (
        <Headerbar>
            <NavLink to="/">Ansen Garvin</NavLink>
        </Headerbar>
    )
}