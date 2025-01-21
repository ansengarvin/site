import { Outlet } from "react-router-dom"
import { useState } from "react"
import {Header} from "./header.jsx"
import styled from "@emotion/styled"



const Grid = styled.div`
    display: grid;
    grid-template-areas:
        "header header"
        "main main"
        "footer footer";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 15px;
    min-height: 100vh;

    margin-left: 5px;
    margin-right: 5px;
`

export function Root(props) {
    const {children, title} = props

    const [mobile, setMobile] = useState(window.matchMedia("(max-width: 425px)").matches);

    return (
        <>
            <main>
                <Grid>
                    <Header/>
                    {children || <Outlet context={mobile}/>}
                </Grid>
            </main>
        </>
    )
}