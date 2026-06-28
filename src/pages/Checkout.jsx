import { use } from "react"
import { CartContext } from "../context/CartContext"
import CartSummary from "../components/CartSummary";
import CheckoutForm from "../components/CheckoutForm";
import { useCheckout } from "../hooks/useCheckout";
import { useNavigate } from "react-router";

export default function Checkout() {
const{shopItems,cartTotal,clearCart} = use(CartContext)
const {mutateAsync: submitCheckout} = useCheckout();
const navigate = useNavigate()

  if (shopItems.length === 0) return (
<div className="p-8 max-w-4xl mx-auto min-h-screen">
<h1 className="text-2xl font-bold mb-6">Your cart is empty</h1>
<div className="bg-white p-6 rounded shadow">
    <p className="text-gray-600">Add some items to your cart before checking out.</p>
</div>
</div>
    );

 async function handleCheckout(formData){
    try{
        const orderData = {
    userId: 1,
    date: new Date().toISOString(),
    products: shopItems,
  

    customer: {
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        zipCode: formData.get('zipCode'),

    },
    };
   await submitCheckout(orderData)
  clearCart();
   navigate('/checkout/success');
    } catch(error) {
    console.log(`Checkout failed ${error}`);
    alert('failed to process the checkout');
    }
}



 return (
<div className="p-8 max-w-4xl max-auto">
    <h1 className="text-2xl font-bold mb-6"></h1>
    <div className="grid md:grid-cols-2 gap-8">
     <CheckoutForm onSubmit={handleCheckout}/> 
    <CartSummary shopItems={shopItems} cartTotal={cartTotal } />
    </div>
</div>

)}
