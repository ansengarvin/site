import { createBrowserRouter, Navigate} from "react-router-dom"
import {Root} from "./components/root.jsx"
import {TrekPanel} from "./components/trekpanel.jsx"
import {Home} from "./routes/home.jsx"
import {Projects} from "./routes/portfolio.jsx"
import {Other} from "./routes/other.jsx"
import {Connect} from "./routes/connect.jsx"
import { Recipes } from "./routes/recipes.jsx"
import { DnD } from "./routes/dnd.jsx"

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
        {index: true, element: <Home />},
        {path: "portfolio", element: <Projects />},
        {path: "misc", element: <Other />},
        {path: "connect", element: <Connect />},
        // Other Routes
        {path: "recipes", element: <Recipes />},
        {path: "d&d", element: <DnD/>},
        // Redirects
        {path: "contact", element: <Navigate to="/connect"/>},
        {path: "projects", element: <Navigate to="/portfolio"/>},
        {path: "dnd", element: <Navigate to="/d&d"/>},
      ]
  }
])