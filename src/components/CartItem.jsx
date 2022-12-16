import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'

const CartItem = (props) => {
   const {id,productName,productImage,price} = props.data;
   const {cartItems,addToCart,removeFromCart,updateCartItemsCount} =useContext(ShopContext);
  return (
    <div className='flex shadow-lg shadow-black m-4 p-4 w-[40%] mx-auto rounded-2xl'>
        <img className='w-[150px]' src={productImage} alt='/'/>
        <div className='flex flex-col gap-6 m-2'>
            <p className='font-bold text-2xl'>{productName}</p>
            <p className='text xl font-bold'>${price}</p>
            <div >
                <button className='border px-4 font-bold rounded ' onClick={()=>removeFromCart(id)}>-</button>
                <input value={cartItems[id]} className='w-[100px] text-center border font-bold' onChange={(e)=>updateCartItemsCount(Number(e.target.value),id)}/>
                <button className='border px-4 font-bold  rounded' onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
      
    </div>
  )
}

export default CartItem
