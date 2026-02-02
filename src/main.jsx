import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HeroSection from './home/hero.jsx'
import './index.css'
// import OfferFetchHook from './home/useFetchOffer'
import OfferDetails from './productDetails/offerProducts.jsx';
import MainProducts from './productDetails/products';
import Login from './assets/UIcomponents/login';
import SignupForm from './assets/UIcomponents/signup.jsx';



const routerPages= createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element:<HeroSection/>,
      },
      {
        path:'/productDetails/offerProducts/:id',
        element:<OfferDetails />
      },
      {
        path:'/productDetails/products/:id',
        element:<MainProducts />
      },
      {
        path:'/assets/UIcomponents/login',
        element:<Login />
      },
      {
        path:'/assets/UIcomponents/signup',
        element:<SignupForm />
      }
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerPages}/>
  </StrictMode>
)
