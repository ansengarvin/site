import { createBrowserRouter } from "react-router-dom"
import {Root} from "./components/root.jsx"
import {Home} from "./routes/home.jsx"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: (
        <Root>
          <h1>404 Not Found</h1>
        </Root>
      ),
      children: [
        {index: true, element: <Home />}
      ]
  }
])