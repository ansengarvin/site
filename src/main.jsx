import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {Global, css} from '@emotion/react'

import {router} from './router.jsx'
import { color_background, color_text } from './lib/defines/colors.jsx'

const globalStyle = css`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;

    background-color: ${color_background};
    color: ${color_text};

    font-family: "Roboto", sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
