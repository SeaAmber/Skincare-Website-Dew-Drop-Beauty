import { useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";


export const CartProvider = ({children}) => {
const [shopItems, setShopItems] = useState([]);
const addItem = (product) => {
setShopItems((currentItems) => {
    const existingItem = currentItems.find(item => item.id === product.id)

if(existingItem) {
    return currentItems.map((item) => 
    item.id===product.id ? {...item, quantity: item.quantity +1} : item
);
    
}

    return [...currentItems, {...product, quantity: 1}]
})
}

return  (
<CartContext.Provider value = {{shopItems, addItem}}>{children}</CartContext.Provider>
)
};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}