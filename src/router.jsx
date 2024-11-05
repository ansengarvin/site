import { createBrowserRouter } from "react-router-dom"
import {Root} from "./components/root.jsx"
import {TrekPanel} from "./components/trekpanel.jsx"
import {Home} from "./routes/home.jsx"

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
        {index: true, element: <Home />}
      ]
  }
])