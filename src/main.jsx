import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import FriendConnection from './pages/connection/FriendConnection'
import Apps from './pages/apps/Apps'
const router= createBrowserRouter(
  [
    {
      path:'/', 
      element: <RootLayout/>,
      children:[
        {
          path:'/',
          element: <h2>Homepage</h2>
        },
        {
          path:'/apps',
          element: <Apps/>
        },
        {
          path:'/friendConnection',
          element:<FriendConnection/>
        },
      ],
      errorElement:<h2>This page is not found</h2>
    },
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
