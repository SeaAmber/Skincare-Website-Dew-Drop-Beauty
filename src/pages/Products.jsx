import ProductGrid from "../components/ProductGrid";
import Filters from '../components/Filters'
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
    //Category is originally set to empty because at first no category is selected.
    const [filters, setFilters] = useState({
        categories: '' ,
        sort: 'asc'
    });

    const {data, error, isLoading} = useProducts(filters)

    if(error) return <div>Error when fetching the products</div>;

    return (
        <main className='grow flex bg-gray-100'>
    <Filters filters={filters} onFilter={setFilters} />
        <ProductGrid products={data?.products ?? []} loading={isLoading}/>
       </main>
    );
}