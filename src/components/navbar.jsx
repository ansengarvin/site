import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Nav = styled.nav`
    grid-area: nav;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 5rem;
    
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

        //Custom styling
        height: 50px;
        width: 100px;
        margin-bottom: 2rem;
        border: 1px solid black;
        border-radius: 15px;

        display: flex;
        align-items: center;
    }

    div{
        margin-left: 1rem
    }
`

export function Navbar() {
    return (
        <Nav>
            <NavLink to="/home"><div>Home</div></NavLink>
            <NavLink to="/about"><div>About</div></NavLink>
            <NavLink to="/projects"><div>Projects</div></NavLink>
            <NavLink to="/contact"><div>Contact</div></NavLink>
        </Nav>
    )
}