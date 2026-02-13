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
import Footer from './footerSection/footer'

import { Provider } from "react-redux";
import { store } from "./app/store";


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
        path:'/offerProducts/:id',
        element:<OfferDetails />
      },
      {
        path:'/products/:id',
        element:<MainProducts />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/signup',
        element:<SignupForm />
      },
      {
        path:'/footer',
        element:<Footer />
      }
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={routerPages}/>
    </StrictMode>
  </Provider>
)
