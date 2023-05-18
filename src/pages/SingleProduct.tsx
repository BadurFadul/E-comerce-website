import { useParams } from 'react-router-dom'

import useAppSelector from '../hooks/useAppSelector'


export const SingleProduct = () => {
    const {id} = useParams()
    const productsingle = useAppSelector(state => state.productReducer)
    const product = productsingle.products.find(product => product.id == id);

    if (!product) return <div>Product not found</div>;

  return (
    <div>
        <h2>{product.category.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category.name}</p>
    </div>
  )
}

export default SingleProduct