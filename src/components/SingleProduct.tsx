import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

export type ProductProps = {
  product_title: string;
  product_photos: string[];
  product_id: string;
  offer: { price: string };
};

type SingleProductProps = { product: ProductProps };

function SingleProduct({ product }: SingleProductProps) {
  const {
    product_title,
    product_photos,
    product_id,
    offer: { price },
  } = product;

  return (
    <div>
      <Link to={`product/${product_id}?${product_title}`}>
        <div className="flex h-64  items-center justify-center overflow-hidden rounded-md">
          <img
            src={product_photos[0]}
            alt={product_title}
            width={248}
            height={312}
            className="w-44 hover:scale-110 sm:w-full"
          />
        </div>
        <h2 className="mb-3 mt-6 to-shopii-black-900 text-left text-base font-medium capitalize ">
          {product_title}
        </h2>
      </Link>
      <div className="flex flex-wrap-reverse items-center justify-start  gap-1 md:flex-nowrap lg:gap-6">
        <Badge variant={'outline'} className=" uppercase ">
          in stock
        </Badge>
        <p className="text-shopii-black-600 md:text-sm lg:text-base">{price}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
