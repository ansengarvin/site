import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./components/root.tsx";
import { TrekPanel } from "./components/trekpanel.jsx";
import { Home } from "./routes/home.tsx";
import { Projects } from "./routes/portfolio.tsx";
import { Other } from "./routes/other.tsx";
import { Connect } from "./routes/connect.tsx";
import { CV } from "./routes/cv.tsx";

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
            { path: "resume", element: <CV />},
            // Redirects
            { path: "contact", element: <Navigate to="/connect" /> },
            { path: "projects", element: <Navigate to="/portfolio" /> },
            { path: "cv", element: <Navigate to="/resume" /> },
        ],
    },
]);
