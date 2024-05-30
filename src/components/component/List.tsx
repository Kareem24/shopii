import SingleProduct, { ProductProps } from '../SingleProduct';

const List = ({ products }:{products:ProductProps[]}) => {
  return (
    <>
      {products.map((product:ProductProps) => (
        <SingleProduct product={product} key={product.product_id} />
      ))}
    </>
  );
};
