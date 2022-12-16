import React from 'react'
import { PRODUCTS } from "../products";
import Product from './Product';

const Home = () => {
  return (
    <div className='flex flex-wrap mt-20'>
       {PRODUCTS.map((product,id)=>
        <Product  key={product.id}data={product}/>


       )}
    </div>
  )
}

export default Home
