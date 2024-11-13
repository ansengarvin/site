import { createBrowserRouter, Navigate} from "react-router-dom"
import {Root} from "./components/root.jsx"
import {TrekPanel} from "./components/trekpanel.jsx"
import {Home} from "./routes/home.jsx"
import {Projects} from "./routes/portfolio.jsx"
import {Other} from "./routes/other.jsx"
import {Connect} from "./routes/connect.jsx"

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
        {index: true, element: <Home />},
        {path: "portfolio", element: <Projects />},
        {path: "other", element: <Other />},
        {path: "connect", element: <Connect />},
        {path: "contact", element: <Navigate to="/connect"/>},
        {path: "projects", element: <Navigate to="/portfolio"/>}
      ]
  }
])