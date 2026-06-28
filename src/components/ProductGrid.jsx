import PropTypes from "prop-types";
import { Link } from "react-router";


const SkeletonProductGrid = () => {
  const skeletons = Array.from({ length: 30 });

  return (
    <div className=" w-2/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 animate-pulse">
      {skeletons.map((_, index) => (
        <div key={index} to={`/products/${index.id}`} className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition-shadow">
          <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
          <div className="w-1/3 h-4 bg-gray-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};







export default function ProductGrid({ products, loading }) {
 if(loading) return <SkeletonProductGrid />;

   return <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
    {products.map((product) => (

         <Link key={product.id} to={`/products/${product.id}`} className='p-4 bg-white rounded shadow'>
            <div className="p-4 bg-white rounded shadow hover:shadow-xl transition-shadow duration-300">
        <img src={product.images[0]} alt={product.title}
        className='h-40 mx-auto mb-4 object-contain'
         />
        <h2 className='text-lg font-semibold'>{product.title}</h2>
        <p className='text-gray-700 mt-2'>${product.price}</p>
       </div>
       </Link>
  ))}
   </div>
  }
    
    


ProductGrid.propTypes= {
products: PropTypes.arrayOf(
    PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        image:PropTypes.string.isRequired,
    })
).isRequired,
loading: PropTypes.bool
};