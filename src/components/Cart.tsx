import React from 'react'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className="inline-block mt-2 hover:text-purple-600 duration-300 relative">
        <a href="">Cart<span className ="absolute font-lg top-2 left-8 px-2 rounded-full bg-purple-600 text-white">0</span
        ></a>
    </div>
  )
}

export default Cart