import { use } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {
   const{shopItems} = use(CartContext)
    return <div>
        {shopItems.map(shopItem => <p>{shopItem.title}</p>)}
    </div>
}