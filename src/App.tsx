import React from 'react'
import useAppSelector from './hooks/useAppSelector'
import Product from './pages/Product'

const App = () => {
  //const products = useAppSelector((state) => state.getAllProducts)
  //console.log(products)

  return (
    <div>
      <Product/>
    </div>
  )
}

export default App

