import React from 'react'
import Cart from './Cart'
import ProdImage from './ProdImage'
import Middle from './middle/Middle'

import style from '../../styles/ProdInfo.module.css'
const ProductInfo = () => {
  return (
    <div className={`${style.container}`}>
        <ProdImage />
        <Middle />
        <Cart />
    </div>
  )
}

export default ProductInfo