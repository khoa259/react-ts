import React from 'react'
import { ProductType } from './types/product'

type ProductManagerProp ={
    products: ProductType[]
    //onRemove: (id: number)=> void
}

const ProductManager = ({products}: ProductManagerProp) => {
  return (
  <div>
    <div>ProductManager</div>
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index)=> 
              <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                      {/* <button onClick={() => onRemove(item.id)}>Remove</button> */}
                  </td>
              </tr>
          )}
            </tbody>
      </table>
    </div>
  </div>
  )
}

export default ProductManager