import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Product from './pages/Product'
import Default from './pages/Default'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Card from './pages/Card'
import SingleProduct from './pages/SingleProduct'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Default/>,
    errorElement: <NotFound />,
    children:[
      {
        path: "/", // This will be treated as your homepage
        element: <Home/>,
      },
      {
        path: "products",
        element: <Product/>,
        
      },
      {
        path: "products/:id",
        element: <SingleProduct/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "card",
        element: <Card open={false} handleClose={function (): void {
          throw new Error('Function not implemented.');
        } }/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  }
])

const App = () => {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

