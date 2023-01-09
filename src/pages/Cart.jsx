import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { ShopContext } from '../context/Shopcontext'
import { PRODUCTS } from '../products'

const Cart = () => {
  const {cartItems,totalAmount}=useContext(ShopContext);
  const totalamount= totalAmount()

  return (
    <div>
      <div>
        <h1 className='text-center font-bold text-4xl underline m-6'>Items in the Cart</h1>
        <div className='p-6'>
          {PRODUCTS.map((product)=> {
             if(cartItems[product.id]!==0){
                   return <CartItem data={product}/>
              }
           
            })}
        </div>
        {totalamount > 0 ? 
        <div className='text-center'>
          <p className='font-bold text-3xl'>Total amount: ${totalamount}</p>
          <button className=' m-4 w-[150px] px-2 py-1 rounded-xl bg-[#3460a1] text-white font-bold'><Link to='/'>Shop more</Link></button>
          <button className='  m-4  w-[150px] px-2 py-1 rounded-xl bg-[#3460a1] text-white font-bold'><Link to='/cart/thankyou'>Checkout</Link></button>
        </div>
        :
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-4xl text-red-500  m-6'>Your Cart is empty!!!!</h1>
        <button className=' m-4 w-[150px] px-2 py-1 rounded-xl bg-[#3460a1] text-white font-bold'><Link to='/'>Shop Now</Link></button>
     </div> }
      </div>
    </div>
  )
}

export default Cart
