import React ,{useContext, useState}from 'react'
import { List, ShoppingCart, X } from 'phosphor-react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav,setNav]= useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }

    
  return (
 

    <div className="w-full h-[80px] flex justify-between items-center  px-4 bg-[#3460a1] text-white shadow-xl  z-50">
     <h1 className='font-bold text-2xl'><Link to='/'>ShopNow</Link></h1>


     <ul className='  hidden md:flex items-center gap-8  text-xl font-bold'>
        <li><Link to='/'> Home</Link></li>
        <li>Electronics</li>
        <li>Clothes</li>
        
        <li > <Link to='/cart' ><ShoppingCart size={32}/></Link></li>
     </ul>
        

     <div  onClick={handleNav} className='md:hidden z-10'>
     {!nav ? <List size={32}/>:<X size={32} /> }
     </div>

      {/* mobile menu */}
      <ul className={!nav ? "hidden" : "absolute left-0 top-0 h-screen w-full flex flex-col gap-8 justify-center items-center bg-[#3460a1] text-gray-300 text-3xl font-bold"}>
      <li onClick={handleNav}> <Link to='/'> Home</Link></li>
        <li>Electronics</li>
        <li>Clothes</li>
        <li onClick={handleNav}> <Link to='/cart'>Cart</Link>
          </li>
      </ul>


        
     
    </div>
  )
}

export default Navbar
