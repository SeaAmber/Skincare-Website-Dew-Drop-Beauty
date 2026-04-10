import { Suspense, use } from "react";
import ProductGrid from "./ProductGrid";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'

const fetchProducts =  async () => {
   try{const {data} = await  axios.get('https://dummyjson.com/products');
   return data.products;
}catch(error) {
    alert('Error fetching products');
    console.log(error);
}
};

const productsPromise = fetchProducts()


export default function Products() {
    const {data, error, isLoading} = useQuery({
  queryKey: [ 'items' ],
  queryFn: fetchProducts,
    })

    return (
       <section className='grow p-4'>
        <Suspense fallback={<div>Loading products...</div>}>
       <ProductGrid products={data ?? []} />

       </Suspense>
       </section> 
    );
}