import React from 'react'
import { ProductType } from '../types/product'

type ProductManagerProp ={
    products: ProductType[],
    onRemove: (id: number)=> void
}

const ProductManager = ({products ,onRemove}: ProductManagerProp) => {
  return (
    <div>
    <a href='products/add'>add product</a>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
      {products?.map((item, index)=> 
          <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                  <button className="btn btn-danger" onClick={() => onRemove(item.id)} >Remove</button>
              </td>
          </tr>
      )}
  </tbody>
</table>
</div>


  )
}

export default ProductManager