import { NavLink } from "react-router";
import checkoutIcon from '../assets/checkout.png'
import { CartContext } from "../context/CartContext";
import { use } from "react";

export default function Navbar () {
  const {cartCount} = use(CartContext)
     return (
    <header className='bg-blue-200 text-black p-4 flex justify-between items-center'>
      <NavLink to='/' className='hover: opacity-80 transition-opacity'>
      <h1 className='text-2xl font-bold'>DewDrop Beauty</h1>
      </NavLink>
      <NavLink to='/cart' className="p-2 hover:bg-green-400 transition-colors rounded-full relative">
       <img src={checkoutIcon} alt='Checkout' className='h-6 w-6' />
      {cartCount > 0 &&(<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>)} 
      </NavLink>
    </header>
  );
} 