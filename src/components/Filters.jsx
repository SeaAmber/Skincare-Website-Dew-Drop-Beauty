import PropTypes from "prop-types"
import { useQuery } from '@tanstack/react-query'
import { productsService } from "../services/ProductService";


// const fetchCategories = async () => {
// try{
//     const {data} = await  axios.get(
//      'https://dummyjson.com/products/category-list'
// );
//    return data;
// }catch(error) {
//     console.log(error);
// }
// };



export default function Filters({filters, onFilter}) {
   const {data, error, isLoading} = useQuery({
  queryKey: [ 'categories' ],
  queryFn: () => productsService.getCategories(),
    })

   if(isLoading) return <div>Loading categories...</div>;
   if(error) return <div>Error when fetching the categories</div>;


    return (
    <aside className='w-1/4 p-4 bg-white pb-4'>
        <div className='mb-4'>
            <h3 className='text-lg font-semibold mb-4'>Sort By</h3>
              <select 
             onChange={(e) => onFilter((prev) => ({...prev, sort:e.target.value}))}
           className="w-full p-2 border rounded-md"
            > 

            className='w-full p-2 border rounded-md'
            
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>  
        </div>


     <div className='mb-4'>
        <h3 className='text-2xl font-semibold mb-4'>Categories</h3>
        <div className='flex flex-wrap gap-2'>
             <button 
            onClick={() => 
       onFilter((prev) => ({...prev, categories: ''}))}
//      onClick={() => {
    
//     onFilter({ categories: "" });
//     console.log("UI: All Products clicked");
//     console.log("Sending categories:", "");
//   }}
            className={`px-3 py-1 rounded-full capitalize ${
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
              className={`px-3 py-1 rounded-full capitalize ${
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