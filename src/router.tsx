import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./components/Root.tsx";
import { TrekPanel } from "./components/TrekPanel.js";
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Other } from "./pages/Other.tsx";
import { Connect } from "./pages/Connect.tsx";
import { CV } from "./pages/CV.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: (
            <Root>
                <TrekPanel title="ERROR">
                    <h1>404 Not Found</h1>
                </TrekPanel>
            </Root>
        ),
        children: [
            // Main Routes
            { index: true, element: <Home /> },
            { path: "portfolio", element: <Projects /> },
            { path: "misc", element: <Other /> },
            { path: "connect", element: <Connect /> },
            { path: "resume", element: <CV /> },
            // Redirects
            { path: "contact", element: <Navigate to="/connect" /> },
            { path: "projects", element: <Navigate to="/portfolio" /> },
            { path: "cv", element: <Navigate to="/resume" /> },
        ],
    },
]);
