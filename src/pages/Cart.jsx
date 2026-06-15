import { use } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router"

export default function Cart() {
   const{shopItems,removeItems,updateQty,cartTotal} = use(CartContext)
    return (
    <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
<div className="divide-y divide-gray-200">
        {shopItems.map(shopItem => (
            <div key={shopItem.id} className="p-6 flex-item-center gap-6">
<img
src={shopItem.images}
 alt={shopItem.title} 
className="w-24 h-24 object-contain"
/>
       <div className="flex-1">
    <h3 className="text-lg font-semibold">{shopItem.title}</h3>
    <p className="text-gray-600">{shopItem.price}</p>
     </div>   
     <div className="flex items-center gap-3">
       <button className="p-1 rounded-md hover:bg-blue-300"
       onClick={()=> updateQty(shopItem.id, shopItem.quantity - 1)}
       >-
       </button>
       <span className="w-8 text-center font-semibold">{shopItem.quantity}</span>

        <button className="p-1 rounded-md hover:bg-blue-300"
       onClick={()=> updateQty(shopItem.id, shopItem.quantity + 1)}
       >+
       </button>
       <button className="font-semibold gap-3 text-right hover:text-blue-800"
       onClick={() => removeItems(shopItem.id)}
       >
        Remove
       </button>
        </div>  
    </div>
                  ))}
</div>
      <div className="p-6 bg-gray-250">
<div className="flex justify-between items-center mb-6">
<span className="text-2xl font-semibold">Total: </span>
<span className="text-2xl font-bold">${cartTotal.toFixed(2)} </span>

</div>
          <div className="flex justify-end">
            <Link 
            to='/checkout'
            className="bg-blue-500 font-bold text-white px-8 py-8 rounded-lg hover:bg-blue-800 transition"
            >Proceed to checkout
            </Link>
        </div>
      </div>
        </div>
    </div>
    );
}