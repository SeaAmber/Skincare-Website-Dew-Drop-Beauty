import { use } from "react"
import { CartContext } from "../context/CartContext"
import CartSummary from "../components/CartSummary";

export default function Checkout() {
const{shopItems,cartTotal} = use(CartContext)
    
  if (shopItems.length === 0) return (
<div className="p-8 max-w-4xl mx-auto min-h-screen">
<h1 className="text-2xl font-bold mb-6">Your cart is empty</h1>
<div className="bg-white p-6 rounded shadow">
    <p className="text-gray-600">Add some items to your cart before checking out.</p>
</div>
</div>
    );

function handleCheckout(){}



 return (
<div className="p-8 max-w-4xl max-auto">
    <h1 className="text-2xl font-bold mb-6"></h1>
    <div className="grid md:grid-cols-2 gap-8">
    {/* <CheckoutForm onSubmit={handleCheckout}/> */}
    <CartSummary shopItems={shopItems} cartTotal={cartTotal } />
    </div>
</div>

)}
