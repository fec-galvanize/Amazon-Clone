import React from 'react'
import Cart from './Cart'
import ProdImage from './ProdImage'

import style from '../../styles/ProdInfo.module.css'
const ProductInfo = () => {
  return (
    <div className={`${style.container}`}>
        <ProdImage />

        <Cart />
    </div>
  )
}

export default ProductInfo