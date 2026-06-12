import { NavLink } from "react-router";
import checkoutIcon from '../assets/checkout.png'

export default function Navbar () {
     return (
    <header className='bg-blue-200 text-black p-4 flex justify-between items-center'>
      <NavLink to='/' className='hover: opacity-80 transition-opacity'>
      <h1 className='text-2xl font-bold'>DewDrop Beauty</h1>
      </NavLink>
      <NavLink to='/cart' className="p-2 hover:bg-green-400 transition-colors rounded-full">
       <img src={checkoutIcon} alt='Checkout' className='h-6 w-6' />
      </NavLink>
    </header>
  );
} 