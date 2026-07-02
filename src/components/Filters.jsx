import PropTypes from "prop-types"
import { useCategories } from "../hooks/useCategories";



const SkeletonFilters = () => {
  const skeletons = Array.from({ length: 25 });

  return (
    <aside className="w-1/4  p-4 bg-white pb-4 animate-pulse">
      {/* Sort Title */}
      <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>

      {/* Sort Dropdown */}
      <div className="h-10 w-full bg-gray-200 rounded mb-6"></div>

      {/* Categories Title */}
      <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>

      {/* 30 Skeleton Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="h-8 w-24 bg-gray-200 rounded-full"
          ></div>
        ))}
      </div>
    </aside>
  );
};


export default function Filters({filters, onFilter}) {
    const {data, error, isLoading} = useCategories()

   if(isLoading) return <SkeletonFilters />;
   if(error) return <div>Error when fetching the categories</div>;


    return (
    // <aside className='w-2/4 p-4 bg-white pb-4'>
    <aside className="w-full md:w-1/4 p-4 bg-white pb-4">

        <div className='mb-4'>
            <h3 className='text-lg font-semibold mb-4'>Sort By</h3>
              <select 
             onChange={(e) => onFilter((prev) => ({...prev, sort:e.target.value}))}
           className="w-full border rounded-md"
            > 

            
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>  
        </div>


     <div className='mb-4'>
        <h3 className='font-semibold mb-4'>Categories</h3>
        <div className='flex flex-wrap gap-2'>
             <button 
            onClick={() => 
       onFilter((prev) => ({...prev, categories: ''}))}

            className={`px-2 py-2 rounded-lg capitalize ${
              filters.categories === '' 
              ? 'bg-blue-500 text-white'
              : 'bg-orange-200 hover:bg-orange-400'

            }`}
            >
               All Products
             </button> 
        
        



 

         {data?.map(category => (
            <button key={category.slug} 
            // onClick={() => onFilter((prev) => ({...prev, filters}))}
            onClick={() => onFilter(prev => ({ ...prev, categories: category.slug }))}
              className={`px-2 py-2  rounded-lg capitalize ${
             filters.categories === category.slug
              ? 'bg-blue-500 text-white'
             : 'bg-orange-200 hover:bg-orange-400'

            }`}
             >
                {category.name}
             </button>
         ))}
         </div>
    </div>
</aside>
    );
}



Filters.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        sort: PropTypes.string,
        maxPrice:PropTypes.number,
    }),
    onFilter: PropTypes.func.isRequired,
};