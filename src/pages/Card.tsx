import React from 'react'

import useAppSelector from '../hooks/useAppSelector'

const Card = () => {
  const {items, loading, error} = useAppSelector(state => state.cardReducer)

  return (
    <div>
      {items.map(item => (
        <div>
          <p>{item.product.title}</p>
          <p>{item.quantity}</p>
        </div>
        
      ))}
    </div>
  )
}

export default Card