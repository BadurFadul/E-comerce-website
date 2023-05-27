import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Product from './pages/Product'
import Default from './pages/Default'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Card from './pages/Card'
import SingleProduct from './pages/SingleProduct'
import Hero from './components/Hero'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Default/>,
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
        element: <Card open={false} handleClose={function (): void {
          throw new Error('Function not implemented.')
        } }/>
      },
      {
        path: "/home",
        element: <Home/>
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

