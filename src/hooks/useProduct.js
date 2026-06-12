import { useQuery } from "@tanstack/react-query"
import { productsService } from "../services/ProductService"


export const useProduct = (id) => {
     return useQuery({
      queryKey: [ 'item', id ],
      queryFn: () => productsService.getProduct(id),
        })
}