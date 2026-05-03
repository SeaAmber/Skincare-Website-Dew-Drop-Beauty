import { httpClient }  from './httpClient';
import { HttpService } from './HttpService';


class ProductsService extends HttpService {
    constructor() {
        super(httpClient)
    }

    async getProducts( filters = {}) {
        let url = "/products";

  // If category is selected
  if (filters.category) {
    url += `/category/${filters.category}`;
  }

  // ⭐ Sorting (DummyJSON format)
  if (filters.sort) {
    url += `?sortBy=price&order=${filters.sort}`;
  }

// //   const res = await fetch(url);
//   const data = await res.json();
//  return data.products;

  return this.get(url);

}

    async getCategories() {
     return this.get('products/categories')  
    }
    
}

export const productsService = new ProductsService(httpClient);
