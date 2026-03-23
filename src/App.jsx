import { useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid';
import Filters from './components/Filter';

const products = [
  {id: 1,title: "HydraGlow Moisturizer",price: 32.99,image: "/src/assets/hydraglow.jpg"},
  {id: 2,title: "Pure Radiance Cleanser",price: 50.00,image: "/src/assets/pureradiance.jpg"},
  {id: 3,title: "Velvet Veil Serum",price: 60.00,image: "/src/assets/velvetveil.jpg"},
  {id: 4,title: "BlossomSkin Sunscreen",price: 90.00,image: "/src/assets/blossomskin.jpg"}
];


export default function App() {
 const [filteredProducts, setFilteredProducts] = useState(products);


const handleFilter = (filterType) => {
  if(filterType === 'Under90') {
setFilteredProducts(products.filter(product => product.price < 90));

  } else {
      setFilteredProducts(products);

  }
}




  return (
 <div className='flex flex-col min-h-screen'>
  <Header/>


<main className='grow flex  bg-gray-100' >
 <Filters onFilter={handleFilter}/>
<section className='grow p-4'>
<ProductGrid products={filteredProducts}/>
</section>
</main>

  <Footer/>
 </div>
  )

}


