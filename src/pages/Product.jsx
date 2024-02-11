import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums'
import { ShopContext } from '../context/ShopContext'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DiscriptionBox from '../components/DescriptionBox/DiscriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
// import Shop from './Shop'

function Product() {
  const {all_product} = useContext(ShopContext) 
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProducts/>
    </div>

  )
}

export default Product