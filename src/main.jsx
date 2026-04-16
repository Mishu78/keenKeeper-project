import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Timeline from './pages/Timeline/Timeline'
import Stats from './pages/Stats/Stats'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
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
          path:'/timeline',
          element: <Timeline/>
        },
        {
          path:'/stats',
          element: <Stats/>
        },
      ],
      errorElement:<NotFoundPage/>
    },
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
