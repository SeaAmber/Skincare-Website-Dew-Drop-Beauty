import ProductGrid from "./ProductGrid";
import { useQuery } from '@tanstack/react-query'
import Filters from './Filters'
import { useState } from "react";
import { productsService } from "../services/ProductService";




// const fetchProducts = async ({ queryKey }) => {
//   const [key, filters] = queryKey;
//   const category = filters.categories;

//   // const url = category
//   //   ? `https://dummyjson.com/products/category/${category}`
//   //   : `https://dummyjson.com/products`;

//   // if(Filters.sort) {
//   //   const {field, direction} = filters.sort;
//   //   url =+ `?sortBy=${field}&order=${direction}`;
//   // }

// let url = "https://dummyjson.com/products";

//   // If category is selected
//   if (filters.category) {
//     url += `/category/${filters.category}`;
//   }

//   // ⭐ Sorting (DummyJSON format)
//   if (filters.sort) {
//     url += `?sortBy=price&order=${filters.sort}`;
//   }

//   const res = await fetch(url);
//   const data = await res.json();
//   return data.products;



//  try{
//    const { data } = await axios.get(url);
//   return data.products;
//  } catch(error) {
// console.log(error);
// }
// }; // You don't need this logic because it is extracted away.



export default function Products() {
    //Category is originally set to empty because at first no category is selected.
    const [filters, setFilters] = useState({
        categories: '' ,
        sort: 'asc'
    });

    const {data, error, isLoading} = useQuery({
  queryKey: [ 'items', filters ],
  queryFn: () => productsService.getProducts(filters),
    })

    if(isLoading) return <div>Loading products...</div>;
    if(error) return <div>Error when fetching the products</div>;

    return (
        <main className='grow flex bg-gray-100'>
    <Filters filters={filters} onFilter={setFilters} />
        <ProductGrid products={data?.products ?? []} />
       </main>
    );
}