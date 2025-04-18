import { Outlet } from "react-router-dom";
import { Header } from "./header.js";
import styled from "@emotion/styled";

interface RootProps {
    children?: React.ReactNode;
}

export function Root(props: RootProps) {
    const { children } = props;
    return (
        <>
            <main>
                <Grid>
                    <Header />
                    {children || <Outlet />}
                </Grid>
            </main>
        </>
    );
}

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
`;
