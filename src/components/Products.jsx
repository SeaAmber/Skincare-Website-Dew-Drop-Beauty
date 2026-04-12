import ProductGrid from "./ProductGrid";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import Filters from './Filters'
import { useState } from "react";


// const fetchProducts =  async ({queryKey}) => {
// console.log(queryKey);
// const [key, filters] = queryKey
//    try{const {data} = await  axios.get('https://dummyjson.com/products');
//    return data.products;
// }catch(error) {
//     console.log(error);
// }
// };

const fetchProducts = async ({ queryKey }) => {
     console.log(queryKey);

  const [key, filters] = queryKey;
  const category = filters.categories;

  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products`;

  const { data } = await axios.get(url);
  return data.products;
};



export default function Products() {
    //Category is originally set to empty because at first no category is selected.
    const [filters, setFilters] = useState({
        categories: '' ,
    });

    const {data, error, isLoading} = useQuery({
  queryKey: [ 'items', filters ],
  queryFn: fetchProducts,
    })

    if(isLoading) return <div>Loading products...</div>;
    if(error) return <div>Error when fetching the products</div>;

    return (
        <main className='grow flex bg-gray-100'>
        {/* <Filters onFilter={setFilters} /> */}
        <Filters onFilter={(newFilters) =>
  setFilters(prev => ({ ...prev, ...newFilters }))
} />

       <ProductGrid products={data ?? []} />
       </main>
    );
}