import PropTypes from "prop-types"
import { useQuery } from '@tanstack/react-query'
import axios from "axios";


const fetchCategories = async () => {
try{const {data} = await  axios.get(
     'https://dummyjson.com/products/category-list'
);
   return data;
}catch(error) {
    console.log(error);
}
};



export default function Filters({onFilter}) {
   const {data, error, isLoading} = useQuery({
  queryKey: [ 'categories' ],
  queryFn: fetchCategories ,
    })

   if(isLoading) return <div>Loading categories...</div>;
   if(error) return <div>Error when fetching the categories</div>;


    return (
    <aside className='w-1/4 p-4 bg-white pb-4'>
    <div className='text-large font-semibold mb-4'>
        <h3 className='text-2xl'>Categories</h3>
        <div className='flex flex-wrap gap-2'>
            <button 
            className='px-3 py-1 rounded-full bg-orange-200 hover:bg-orange-400'
            >
               All Products
             </button>
         
         {data?.map(category => (
            <button key={category} 
             onClick={() => onFilter({categories:category})}
             className='px-3 py-1 rounded-full bg-orange-200 hover:bg-orange-400 capitalize'
             >
                {category}
             </button>
         ))}
         </div>
    </div>
</aside>
    );
}



Filters.propTypes = {
    onFilter: PropTypes.func.isRequired,
};