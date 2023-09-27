import React from 'react'
import Displays from './Display'
import { Items } from './Item'

const Cart = () => {
  return (
    <div style={{display:'flex',marginTop:'200px',marginBottom:'200px'}}>
      <Displays />
      <Items />
    </div>
  )
}

export default Cart