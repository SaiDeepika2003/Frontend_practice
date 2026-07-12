import React from 'react'

const ProductItem = (props) => {

  const {product}=props

  return (
    <React.Fragment>
      <div className='col-md-3 border p-3 text-center'>
          <img src={product.image} width='200px' height='200px'/>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button className='btn btn-sm btn-warning'>Add to Cart</button>
      </div>
    </React.Fragment>
  )
}

export default ProductItem
