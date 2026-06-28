import { Link } from "react-router";
import checkmark from '../assets/check.png'

export default function CheckoutSuccess() {
    return <div className="p-8 max-w-4xl mx-auto text-center">
        
        <div className="mb-8">
         <img 
         src={checkmark}
          alt="Checkout Success" 
          className="w-16 h-16 mx-auto"
         />
        </div>

        <h1 className="text-2xl font-bold mb-4">Order Placed Successfully</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. We will send you an email with your order details.</p>
    <Link 
    to='/'
    className="bg-blue-600 text-white px-6 py-5 rounded-lg hover:bg-blue-800 transition-colors"
    >
    Continue Shopping
    </Link>
    </div>
}