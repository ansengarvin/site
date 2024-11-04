import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {Global, css} from '@emotion/react'

import {router} from './router.jsx'
import { color_background, color_text } from './variables/colors.jsx'

const globalStyle = css`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;

    background-color: ${color_background};
    color: ${color_text};

    h1 {
      font-family: "Saira Extra Condensed", serif;
      font-size: 4rem;
      font-weight: normal;
      font-style: normal;
      margin: 0;
    }
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
