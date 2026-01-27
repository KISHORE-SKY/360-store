import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HeroSection from './home/hero.jsx'
import './index.css'

const routerPages= createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element:<HeroSection/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerPages}/>
  </StrictMode>
)
