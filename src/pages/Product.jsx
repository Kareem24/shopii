import { useParams } from 'react-router-dom';
import { products } from '../lib/data';
import share from '../assets/icons/Share.png';
import star from '../assets/icons/Star.png';
import heart from '../assets/icons/Heart.png';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Bold, Italic, Underline } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import Review from '../components/Review';
import SingleProduct from '../components/SingleProduct';
export default function Product() {
  const [showDetails, setShowDetails] = useState('details');
  const { id } = useParams();

  const {
    product_title,
    offer: { price },
    product_photos,
  } = products.find((item) => item.product_id === id);

  return (
    <div className="px-6 md:px-20">
      <section className="grid gap-6  py-10 md:grid-cols-2 md:py-14 ">
        <img src={product_photos[0]} alt={product_title} />
        <div>
          <div className=" flex items-center justify-between ">
            <h1 className="text-2xl font-bold capitalize text-shopii-black-900">
              {product_title}
            </h1>
            <img src={share} alt=" share link or folder icon" />
          </div>
          <div className=" mb-6 mt-3 flex items-center gap-4">
            <div className="  flex w-max items-center gap-4 rounded-[100px] bg-shopii-white-100 px-4 py-1">
              <img src={star} alt="a star icon " />
              <p className="space-x-2 text-xs font-medium text-shopii-black-500 ">
                <span>4.2</span>
                <span>-</span>
                <span>54 reviews</span>
              </p>
            </div>
            <p className="rounded-3xl border p-1 text-xs uppercase text-shopii-black-900  md:whitespace-nowrap lg:text-base ">
              in stock
            </p>
          </div>
          <p className="text-lg font-semibold text-shopii-black-900">{price}</p>
          <div className="mb-4 mt-8">
            <p className="mb-[10px] text-sm font-medium uppercase text-shopii-black-500 ">
              Available Colors
            </p>
            <div>
              <div className="h-10 w-10 rounded-full bg-red-500 hover:border hover:border-green-500"></div>
            </div>
          </div>
          {/* <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup> */}
          <div>
            <p className="mb-[10px] text-sm font-medium uppercase text-shopii-black-500">
              select size
            </p>
            <div className="flex items-center gap-2 ">
              <p className=" flex h-12 w-12 items-center justify-center rounded-sm border border-shopii-black-100 p-4 uppercase hover:border-shopii-black-900">
                s
              </p>
              <p className=" flex h-12 w-12 items-center justify-center rounded-sm border border-shopii-black-100 p-4 uppercase  hover:border-shopii-black-900">
                m
              </p>
              <p className=" flex h-12 w-12 items-center justify-center rounded-sm border border-shopii-black-100 p-4 uppercase hover:border-shopii-black-900 ">
                xl
              </p>
              <p className=" flex h-12 w-12 items-center justify-center rounded-sm border border-shopii-black-100 p-4 uppercase hover:border-shopii-black-900">
                xll
              </p>
            </div>
          </div>
          <div className="mb-10 mt-8">
            <p className="mb-[10px] text-sm font-medium uppercase text-shopii-black-500">
              quantity
            </p>
            <div className="flex w-[10.25rem] justify-between rounded-md border border-shopii-black-900 px-4 py-3">
              <button className="text-lg font-medium text-shopii-black-500">
                +
              </button>
              <p className="text-lg font-medium text-shopii-black-500">1</p>
              <button className="text-lg font-medium text-shopii-black-500">
                -
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[6fr_1fr] gap-6">
            <Button className="w-full">Add to cart</Button>
            <div className="flex h-10 w-12 items-center justify-center rounded-sm border border-shopii-black-100 px-4 py-0 uppercase hover:border-shopii-black-900">
              <img src={heart} alt=" favorite icon " width={24} height={24} />
            </div>
          </div>
          <p className="mt-4 font-medium uppercase text-shopii-black-500">
            — Free shipping on orders $100+
          </p>
        </div>
      </section>
      <div className="grid py-10 md:grid-cols-[1fr_3fr] md:gap-8 md:py-14">
        <div className=" flex items-center justify-center gap-6 md:block">
          <p
            className={cn(
              'flex cursor-pointer items-center space-x-2 px-6 py-2 capitalize',
              showDetails === 'details' && 'rounded-lg bg-shopii-white-100 ',
            )}
            onClick={() => setShowDetails('details')}
          >
            <img src={star} alt="review icon" />
            <span>details</span>
          </p>
          <p
            onClick={() => setShowDetails('review')}
            className={cn(
              'flex cursor-pointer items-center space-x-2 px-6 py-2 capitalize',
              showDetails === 'review' && 'rounded-lg bg-shopii-white-100 ',
            )}
          >
            <img src={star} alt="review icon" />
            <span>reviews</span>
          </p>
        </div>
        <div className="w-full">
          {showDetails === 'details' && (
            <div>
              <p className="text-base font-semibold capitalize text-shopii-black-900">
                details
              </p>
              <p className="mb-10 mt-6 text-shopii-black-500 md:mb-14">
                Elevate your everyday style with our {"Men's"} Black T-Shirts,
                the ultimate wardrobe essential for modern men. Crafted with
                meticulous attention to detail and designed for comfort, these
                versatile black tees are a must-have addition to your
                collection.
                <br />
                The classic black color never goes out of style. Whether{' '}
                {"you're"} dressing up for a special occasion or keeping it
                casual, these black t-shirts are the perfect choice,
                effortlessly complementing any outfit.
              </p>
              <ul className="ml-8 list-disc space-y-6">
                <li className="text-sm capitalize text-shopii-black-500">
                  premium quality
                </li>
                <li className="text-sm capitalize text-shopii-black-500">
                  versatile wardrobe staple
                </li>
                <li className="text-sm capitalize text-shopii-black-500">
                  Available in various sizes{' '}
                </li>
                <li className="text-sm capitalize text-shopii-black-500">
                  tailored fit
                </li>
              </ul>
            </div>
          )}
          {showDetails === 'review' && (
            <div>
              <p className="to-shopii-black-900 text-base font-semibold capitalize">
                review
              </p>
              <div className="mb-10 mt-4 flex items-center gap-6">
                <p className="text-3xl font-bold text-shopii-black-900">4.2</p>
                <span className="text-sm text-shopii-black-500">
                  — 54 Reviews
                </span>
              </div>
              <Button variant={'outline'} className="border-shopii-black-900">
                {' '}
                Write a review
              </Button>
              <div className="place-content-end text-right">
                <select name="" id="" className="my-4 uppercase">
                  <option value="">sort by </option>
                </select>
              </div>
              <div className="border-shopii-white-200 h-1 w-full border-b"></div>
              <div>
                <Review />
                <Review />
                <Review />
              </div>
              <Button variant="outline" className="m-auto mt-16 block">
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </div>
      <section className=" px-6 py-12 text-left md:px-20">
        <h3 className=" text-2xl font-bold capitalize text-shopii-black-900">
          you might also like
        </h3>
        <p className=" mb-14 mt-2 font-medium  uppercase text-shopii-black-300">
          similar product
        </p>
        <div className="grid grid-cols-2 justify-center gap-5 sm:justify-normal md:grid-cols-4 md:gap-6">
          {/* {products?.slice(0, 8 */}
          {products.map((product) => (
            <SingleProduct product={product} key={product.product_id} />
          ))}
        </div>
      </section>
    </div>
  );
}
