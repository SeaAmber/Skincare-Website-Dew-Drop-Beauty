import { useState } from "react";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../hooks/useProducts";

export default function Shop() {
  const { data: products, isLoading } = useProducts();

  const [filters, setFilters] = useState({
    categories: "",   
    sort: "asc",      
  });

  
  const onFilter = (updateFn) => {
    setFilters((prev) => updateFn(prev));
  };

  const filteredProducts = products?.filter((product) => {
    if (!filters.categories) return true;   
     return product.category === filters.categories;
  });

  // LOGIC LAYER: Sort products based on selected sort order
  const sortedProducts = filteredProducts?.sort((a, b) => {
    return filters.sort === "asc"
      ? a.price - b.price   
      : b.price - a.price;  
  });

  return (
    <div className="flex flex-col md:flex-row gap-6">
      
      {/* UI LAYER: Filters sidebar */}
      <aside className="w-full md:w-1/4">
        <Filters filters={filters} onFilter={onFilter} />
      </aside>

      {/* UI LAYER: Product grid showing filtered + sorted products */}
      <main className="w-full md:w-3/4">
        <ProductGrid products={products} loading={isLoading} />
      </main>

    </div>
  );
}
