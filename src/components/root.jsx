import { Outlet } from "react-router-dom"
import {Header} from "./header.jsx"
import {Navbar} from "./navbar.jsx"
import {TrekPanel} from "./trekpanel.jsx"
import styled from "@emotion/styled"


const Grid = styled.div`
    display: grid;
    grid-template-areas:
        "header header"
        "main main"
        "footer footer";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
    height: 100%;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
`

export function Root(props) {
    const {children, title} = props

    return (
        <>
            <main>
                <Grid>
                    <Header/>
                    {children || <Outlet />}
                </Grid>
            </main>
        </>
    )
}