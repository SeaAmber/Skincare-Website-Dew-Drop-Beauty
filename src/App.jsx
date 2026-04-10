import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Filters from './components/Filter';
import Products from './components/Products';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
   
const queryClient = new QueryClient

 export default function App() {
const handleFilter = (filterType) => {
//   if(filterType === 'Under90') {
// setFilteredProducts(products.filter(product => product.price < 90));

//   } else {
//       setFilteredProducts(products);

//   }
}

  return (
 <div className='flex flex-col min-h-screen'>
  <Header/>


<main className='grow flex  bg-gray-100' >
 <Filters onFilter={handleFilter}/>
 <QueryClientProvider client={queryClient}>
 <Products/>
 </QueryClientProvider>
</main>

  <Footer/>
 </div>
  )

}


