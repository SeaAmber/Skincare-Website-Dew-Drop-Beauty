import { useParams } from "react-router";
import { useProduct } from "../hooks/useProduct"
import { use, useState } from "react";
import { CartContext } from "../context/CartContext";
import styled from "@emotion/styled"
import {keyframes} from "@emotion/react"

const fadeIn = keyframes`
from {
opacity: 0;

transform: translateY(-10px)
}
to {
opacity: 1;
transform: translateY(0)

}
`

const NotificationWrapper = styled.div `
animation: ${fadeIn} 0.5s ease-out;
position: absolute;
top: 1rem;
right: 6rem;
background-color: #10b981;
color: white;
padding: 0.5rem 1rem;
border-radius: 8px;
`

export default function Product() {
    const {id} =  useParams();
    const {data, error, isLoading} = useProduct(id)
    const {addItem}  = use(CartContext);
    const [showNotification, setShowNotification] = useState(false);



  // ⭐ FIX #1 — Prevent rendering before data exists
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error while fetching product</div>;
  if (!data) return <div>No product found</div>;

const handleAddCart = () => {
addItem(data);
setShowNotification(true);
setTimeout(() => setShowNotification(false), 2000);
};

  return (
    <div className="p-8 max-w-4xl mx-auto">
         {showNotification && <NotificationWrapper>Item added to the cart</NotificationWrapper>}
      {/* ⭐ FIX #2 — Your grid div was closed too early */}
      <div className="grid md:grid-cols-2 gap-8 min-h-[70vh]">

        {/* LEFT SIDE — IMAGE */}
        <div className="flex flex-col justify-center">
          <img
            // ⭐ FIX #3 — DummyJSON uses thumbnail or images[0], NOT image
            src={data.thumbnail || data.images?.[0]}
            alt={data.title}
            className="w-full h-96 object-contain mb-8"
          />
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>

          <div className="mb-4">
            <span className="bg-blue-100 text-black-800 text-sm font-medium px-2 py-0">
              {data.category}
            </span>
          </div>

          <p className="text-gray-600 mb-6 text-lg">{data.description}</p>

          {/* ⭐ FIX #4 — Your map was missing a return */}
          <div className="flex flex-col  mb-6">
            <div className="flex text-amber-400 mb-5">
               <div className="flex text-amber-400">
  {[...Array(5)].map((_, i) => {
    const rating = Math.round(data?.rating?.rate || 0);

    return (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-solid" : "fill-current"
        }`}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
      </svg>
    );
  })}
</div>

            
            <span className="ml-2 text-gray-600">
              ({data.rating.count} reviews)
            </span>
          </div>

          <div className="mt-auto">
            <p className="text-3xl font-bold text-blue-600 mb-8">
              ${data.price}
            </p>

            <button onClick={handleAddCart} className="w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-blue-400">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
  )}
