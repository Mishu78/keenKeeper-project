import Stats from "../Components/homepage/Stats";
import RootLayout from "../layout/RootLayout";
import DashBoard from "../pages/DashBoard/DashBoard";
import AppDetails from "../pages/friendDetails/FriendDetails";
import Homepage from "../pages/homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Timeline from "../pages/Timeline/Timeline";
import { createBrowserRouter } from 'react-router'
 export const router= createBrowserRouter(
  [
    {
      path:'/', 
      element: <RootLayout/>,
      children:[
        {
          path:'/',
          element: <Homepage/>
        },
        {
            path:'/friend/:id',
            element:<AppDetails/>
        },
        {
          path:'/timeline',
          element: <Timeline/>
        },
        {
          path:'/stats',
          element: <Stats/>
        },
        {
          path:'/dashboard',
          element:<DashBoard/>
        }
      ],
      errorElement:<NotFoundPage/>
    },
    
  ]
)