import styled from "@emotion/styled"

import { TrekPanel } from "../components/trekpanel"
import { useOutletContext } from "react-router-dom"

export function Connect() {
    const mobile = useOutletContext()
    return (
        <TrekPanel title = "CONNECT" mobile={mobile}>
            <h1>Want to get in touch?</h1>
            <h2>You can contact me at any of the following places:</h2>
            ansengarvin@gmail.com<br/>
            linkedin<br/>
            github<br/>
        </TrekPanel>
    )
}