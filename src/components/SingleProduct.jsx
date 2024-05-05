import { Link } from 'react-router-dom';

function SingleProduct({ product }) {
  const {
    product_title,
    product_photos,
    product_id,
    offer: { price },
  } = product;
  return (
    <div>
      <Link to={`product/${product_id}?${product_title}`}>
        <img
          src={product_photos[0]}
          alt={product_title}
          width={248}
          height={312}
          className="w-44 rounded-md sm:w-full"
        />
        <h2 className="mb-3 mt-6 to-shopii-black-900 text-left text-base font-medium capitalize ">
          {product_title}
        </h2>
      </Link>
      <div className="flex flex-wrap-reverse items-center justify-start  gap-1 md:flex-nowrap lg:gap-6">
        <p className="rounded-3xl border p-1 text-xs uppercase text-shopii-black-900  md:whitespace-nowrap lg:text-base ">
          in stock
        </p>
        <p className="text-shopii-black-600 md:text-sm lg:text-base">{price}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
