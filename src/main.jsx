import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Mainroute.jsx'
import './index.css'
import Authinfo from './Firebase/Authinfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinfo>
      <RouterProvider router={route}></RouterProvider>
    </Authinfo>

  </React.StrictMode>,
)
