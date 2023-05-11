import React, { useEffect } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import { getAllProducts, getProductById } from '../redux/reducers/productReducer'
import useAppSelector from '../hooks/useAppSelector'



const Product = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.productReducer)

    useEffect(() =>{
        dispatch(getAllProducts())
    },[])

  return (
    <div>
       {products.map(product => (
        <div key={product.id}>
          <h2>{product.category.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Product