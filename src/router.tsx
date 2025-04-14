import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./components/root.js";
import { TrekPanel } from "./components/trekpanel.jsx";
import { Home } from "./routes/home.js";
import { Projects } from "./routes/portfolio.js";
import { Other } from "./routes/other.js";
import { Connect } from "./routes/connect.js";

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
            // Redirects
            { path: "contact", element: <Navigate to="/connect" /> },
            { path: "projects", element: <Navigate to="/portfolio" /> },
        ],
    },
]);
