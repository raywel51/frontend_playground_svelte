export const load = async ({ fetch }: { fetch: WindowOrWorkerGlobalScope['fetch'] }) => {
   const fakestoreapi = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      return products;
   }

   return {
      products: await fakestoreapi() // Ensure to await the result here
   };
}
