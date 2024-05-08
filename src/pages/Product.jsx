import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { products } from '../lib/data';
import share from '../assets/icons/Share.png';
import star from '../assets/icons/Star.png';
import heart from '../assets/icons/Heart.png';
import copy_paste from '../assets/icons/copy-paste.png';
import whatsapp from '../assets/icons/Whatsapp.png';
import telegram from '../assets/icons/telegram.png';
import instagram from '../assets/icons/Instagram.png';
import pintrest from '../assets/icons/Pinterest.png';
import facebook from '../assets/icons/Facebook.png';
// import { Copy } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
// import { Bold, Italic, Underline } from 'lucide-react';

// import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import Review from '../components/Review';
import SingleProduct from '../components/SingleProduct';
import { WriteReview } from '../components/WriteReview';
import Sort from '../components/Sort';
import Sizes from '../components/Sizes';
import Colour from '../components/Colour';
import Counter from '../components/Counter';
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
            {/*            <img src={share} alt=" share link or folder icon" />*/}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-none">
                  <img src={share} alt=" share link or folder icon" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="mb-6 text-2xl font-bold text-shopii-black-900">
                    Copy link
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="https://ui.shadcn.com/docs/installation"
                      readOnly
                    />
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="px-3"
                    variant="outline"
                  >
                    <span className="sr-only">Copy</span>
                    {/*
                    <Copy className="h-4 w-4" />
                  */}
                    <img
                      src={copy_paste}
                      alt="copy and paste icon"
                      className="h-4 w-4"
                    />
                  </Button>
                </div>
                <DialogFooter className="block sm:justify-start">
                  <h2 className="mb-6 block text-2xl font-bold text-shopii-black-900">
                    Share
                  </h2>
                  <div className=" flex items-center gap-4">
                    <img
                      src={whatsapp}
                      className="h-6 w-6 cursor-pointer transition duration-300 hover:scale-110"
                      alt="whatsapp icon "
                    />
                    <img
                      src={pintrest}
                      className="h-6 w-6 cursor-pointer transition duration-300 hover:scale-110"
                      alt="pintrest icon"
                    />
                    <img
                      src={telegram}
                      className="h-6 w-6 cursor-pointer transition duration-300 hover:scale-110"
                      alt="telegram icon "
                    />
                    <img
                      src={facebook}
                      className="h-6 w-6 cursor-pointer transition duration-300 hover:scale-110 "
                      alt="facebook icon"
                    />
                    <img
                      src={instagram}
                      className="h-6 w-6 cursor-pointer transition duration-300 hover:scale-110"
                      alt=" instagram icon"
                    />
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
            <Colour />
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
            <Sizes />
          </div>
          <div className="mb-10 mt-8">
            <p className="mb-[10px] text-sm font-medium uppercase text-shopii-black-500">
              quantity
            </p>
            <Counter className={'w-[10.25rem] px-4 py-3'} />
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
              {/* <Button variant={'outline'} className="border-shopii-black-900">
                {' '}
                Write a review
              </Button> */}
              <WriteReview />
              <div className="place-content-end text-right">
                <Sort />
              </div>
              <div className="h-1 w-full border-b border-shopii-white-200"></div>
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
