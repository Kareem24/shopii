import React from 'react';
import SingleProduct, { ProductProps } from '../SingleProduct';

function Products({ products }: { products: ProductProps[] }) {
  if (!products) return <h1>no products</h1>;
  return (
    <div className="grid grid-cols-2 justify-center gap-5 sm:justify-normal md:grid-cols-4 md:gap-6">
      {/* {products?.slice(0, 8 */}
      {products?.map((product) => (
        <SingleProduct product={product} key={product.product_id} />
      ))}
    </div>
  );
}

export default Products;
