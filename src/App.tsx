import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Product from './pages/Product'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Card from './pages/Card'
import SingleProduct from './pages/SingleProduct'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    errorElement: <NotFound />,
    children:[
      {
        path: "/products",
        element: <Product/>,
        
      },
      {
        path: "/products/:id",
        element: <SingleProduct/>,
        
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/card",
        element: <Card/>
      }
    ]
  }
])

const App = () => {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

