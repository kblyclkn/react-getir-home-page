import React from 'react'
import { useState, useEffect } from 'react'
import Title from "./ui/Title"
import Product from "../api/product.json"
import Productitem from './ui/Productitem';

function Favorites() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(Product)
  },[])

  return (
    <div>
      <Title>Favoriler</Title>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden'>
        {products.length && products.map((product,index) => <Productitem key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default Favorites