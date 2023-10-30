import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import Header from './component/Header/Header.jsx';
import Home from './component/Home/Home.jsx';
import Main from './component/Layout/Main';
import OrderReview from './component/OrderReview/OrderReview';
import Grandpa from './component/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
      element:<Home/>,
      loader:()=> fetch('tsharts.json')
      },{
        path:'orderReview',
        element: <OrderReview/>
      },{
        path:'/grandpa',
        element:<Grandpa/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
