import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'


const Product = (props) => {
    const { id,productName,price,productImage}=props.data;

    const {addToCart,cartItems}=useContext(ShopContext);

    const cartItemsAmount = cartItems[id];

    
  return (
    <div  className='m-6 shadow-lg rounded-xl '>
        
      <img src={productImage} alt='' className='w-[400px] h-[400px]'/>
      <div className='flex flex-col items-center justify-center'>
        <p className='font-bold'>{productName}</p>
        <p>${price}</p>
        <button className='px-4 py-2 my-3 bg-[#3460a1] rounded-lg text-xl text-gray-200' onClick={()=>addToCart(id)}>Add to Cart{cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
      </div>
     
    </div>
  )
}

export default Product
