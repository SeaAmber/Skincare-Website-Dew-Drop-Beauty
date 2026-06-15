import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";
import Products from "../pages/Products";


export const CartProvider = ({children}) => {
const [shopItems, setShopItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
localStorage.setItem('cart', JSON.stringify(shopItems));
}, [shopItems]);


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

const removeItems = (productId) => {
    setShopItems((currentItems)=>
currentItems.filter(shopItem => shopItem.id!== productId)
);
};

const updateQty = (productId, quantity) => {
    setShopItems(currentItems => currentItems.map(shopItem => 
        shopItem.id === productId ? {... shopItem, quantity: Math.max(0, quantity)} 
        :shopItem
    )
    .filter(shopItem => shopItem.quantity > 0)
);
};

let cartCount = 0;
for (const shopItem of shopItems) {
cartCount += shopItem.quantity
}

let cartTotal = 0;
for (const shopItem of shopItems) {
cartTotal += shopItem.price * shopItem.quantity
}


return  (
<CartContext.Provider value = {{shopItems, addItem, removeItems,updateQty,cartCount,cartTotal}}>{children}</CartContext.Provider>
)
};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}