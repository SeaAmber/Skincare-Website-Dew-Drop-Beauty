import PropTypes from "prop-types"

export default function CartSummary({shopItems, cartTotal}) {
return (
<div className="bg-gray-50 p-6 rounded-lg">
<h2 className="text-lg font-semibold">Order Summary</h2>
<div className="space-y-4">
{shopItems.map(shopItem => (
    <div key={shopItem.id} className="flex justify-between text-sm">
    


      <div className="flex items-center gap-2">
              <img 
                src={shopItem.thumbnail} 
                alt={shopItem.title} 
                className="w-10 h-10 rounded"
              />
              
    <span>{shopItem.title}(x{shopItem.quantity})</span>
    </div>
    <span>${shopItem.price}</span>
    </div>
))}

<div className="border-t pt-2">
<div className="flex justify-between font-semibold">
    <span>Total: </span>
     <span>${cartTotal}</span>
</div>
</div>
</div>

</div>
)

CartSummary.propTypes = {
    shopItems: PropTypes.arrayOf(
       PropTypes.shape({
id: PropTypes.number.isRequired,
title: PropTypes.string.isRequired,
quantity: PropTypes.number.isRequired,
thumbnail: PropTypes.string,
       })
    ) .isRequired,
    cartTotal: PropTypes.number.isRequired,
}}