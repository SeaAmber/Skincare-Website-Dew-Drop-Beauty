import ProductGrid from "./ProductGrid";
import { useQuery } from '@tanstack/react-query'
import Filters from './Filters'
import { useState } from "react";
import { productsService } from "../services/ProductService";

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