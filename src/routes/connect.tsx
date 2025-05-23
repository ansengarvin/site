import styled from "@emotion/styled";
import { TrekPanel } from "../components/trekpanel";

const ContactCard = styled.a`
    // Remove all default a styles
    color: inherit;

    font-size: 1.1rem;

    display: flex;
    margin-bottom: 20px;
`;

export function Connect() {
    return (
        <TrekPanel title="CONNECT">
            <h1>Want to get in touch?</h1>
            <h2>You can contact me at any of the following places:</h2>
            <ContactCard href="mailto:ansengarvin@gmail.com">ansengarvin@gmail.com</ContactCard>
            <ContactCard href="https://www.linkedin.com/in/ansengarvin/">LinkedIn</ContactCard>
            <ContactCard href="https://github.com/ansengarvin/">GitHub</ContactCard>
        </TrekPanel>
    );
}
