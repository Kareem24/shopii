import { useState } from 'react';

import { Button } from '../components/ui/button';
import icon2 from '../assets/icons/Icon-Box.png';
import icon from '../assets/icons/Icon-Box2.png';
import icon3 from '../assets/icons/Icon-Box3.png';
import SingleProduct, { ProductProps } from '../components/SingleProduct';
import NewsLetter from '../components/NewsLetter';
import Card from '@/components/Card';
import { cn } from '@/lib/utils';
import Products from '@/components/ui/Products';
import { products } from '@/lib/data';

function Home() {
  // const [productList, setProductList] = useState('latest');
  return (
    <>
      <main className="bg-shopii-white-100 px-6 py-12 md:px-20">
        <h1 className="font-inter text-2xl font-semibold text-shopii-black-800">
          Fresh Arrival online
        </h1>
        <p className="mb-12 mt-3 font-inter text-base capitalize text-shopii-black-600">
          Discover Our Newest Collection Today.
        </p>
        <Button className="bg-shopii-black-900 font-medium capitalize text-white">
          {' '}
          view collections
        </Button>
      </main>
      <section className="grid gap-6 px-11 py-16 sm:grid-cols-2 md:grid-cols-3 md:px-20">
        <Card
          img={icon2}
          title={'free shipping'}
          description={
            "Upgrade your style today and get FREE shipping on all orders! Don't miss out."
          }
        />
        <Card
          img={icon}
          title={'Satisfaction Guarantee'}
          description={
            'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.'
          }
        />
        <Card
          img={icon3}
          title={'Secure Payment'}
          description={
            'Your security is our priority. Your payments are secure with us.'
          }
        />
      </section>
      <section className=" px-6 py-12 text-center md:px-20">
        <p className=" font-medium uppercase text-shopii-black-300  ">
          shop now
        </p>
        <h3 className="mb-14 mt-2 text-2xl font-bold capitalize text-shopii-black-900">
          best selling
        </h3>
        <Products products={[]} />
      </section>
      <section className=" grid bg-shopii-white-100 px-6 py-12 md:grid-cols-2 md:px-20">
        <div>
          <h2 className="font-inter text-2xl font-semibold text-shopii-black-800">
            Browse Our Fashion Paradise!
          </h2>
          <p className="mb-12 mt-3 font-inter text-base capitalize text-shopii-black-600">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <Button className="bg-shopii-black-900 font-medium capitalize text-white">
            {' '}
            start browsing
          </Button>
        </div>
      </section>{' '}
      <div className=" px-6 py-12 text-center md:px-20">
        <div className="mb-7 flex items-center justify-center gap-6 text-center">
          <p
            className={cn(
              ' cursor-pointer capitalize text-shopii-black-900',
              productList === 'featured' &&
                'rounded-3xl border px-4 py-1 text-sm font-bold md:whitespace-nowrap md:px-2',
            )}
            onClick={() => setProductList('featured')}
          >
            featured{' '}
          </p>
          <p
            className={cn(
              ' cursor-pointer capitalize text-shopii-black-900',
              productList === 'latest' &&
                'rounded-3xl border px-4 py-1 text-sm font-bold md:whitespace-nowrap md:px-2',
            )}
            onClick={() => setProductList('latest')}
          >
            latest
          </p>
        </div>
        <div className="grid grid-cols-2 justify-center gap-5 sm:justify-normal md:grid-cols-4 md:gap-6">
          {/* {products?.slice(0, 8 */}
          {products.map((product) => (
            <SingleProduct product={product} key={product.product_id} />
          ))}
        </div>
      </div>
      <NewsLetter />
    </>
  );
}

export default Home;
