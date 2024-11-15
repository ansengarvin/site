import styled from "@emotion/styled";
import { TrekPanel } from "../components/trekpanel";
import { useOutletContext } from "react-router-dom";

export function Other() {
    const mobile = useOutletContext()
    return (
        <TrekPanel title="OTHER" mobile={mobile}>
            <h1>Other Endeavors</h1>

            <h2>Coming soon...</h2>
        </TrekPanel>
        
    )
}