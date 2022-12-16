import React from 'react'
 import { CheckCircle } from 'phosphor-react'

 import Confetti from 'react-confetti'

const Thankyou = () => {
  
  return (
    <div>
    <div className='w-[30%] h-[250px] flex flex-col justify-center gap-8 text-center mx-auto shadow shadow-black rounded-xl my-20'>
      
        <h1 className='font-bold text-3xl '>Thank you for shopping</h1>
        <CheckCircle size={50} className='mx-auto text-green-700 animate-zoom' />
        <button className=' px-2 py-2 rounded-xl bg-[#3460a1] text-white font-bold w-[40%] mx-auto'> Shop Again</button>
        <Confetti/>
      
    </div>
    </div>
  )
}

export default Thankyou;
