import { Button } from '../components/ui/button';
import image from '../assets/images/clothe1.png';
import Counter from '../components/Counter';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="px-6 pb-40 pt-7 md:px-20 md:pb-56">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr]">
        <div>
          <h3 className="font-semibold uppercase text-shopii-black-900">
            your cart
          </h3>
          <div className="mb-12 mt-[18px] w-full border-b border-shopii-black-100" />
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-wrap items-center gap-8">
              <img
                src={image}
                alt="the alt text for static image"
                width={80}
                height={80}
              />
              <div>
                <p className="font-medium capitalize text-shopii-black-900">
                  Raw Black T-Shirt Lineup
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm *:capitalize *:text-shopii-black-500">
                  <span>color:</span>
                  <span className="h-3 w-3 rounded-full bg-blue-500 hover:border hover:border-green-500" />
                  <span>—</span>
                  <span>Size:M</span>
                </p>
                <p className=" mt-3 text-base font-medium text-shopii-black-900 md:hidden">
                  $22.0
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-8 justify-self-end">
              <p className="hidden text-base font-medium text-shopii-black-900 md:block">
                $22.0
              </p>
              <div className="flex items-center gap-4">
                <Counter className={'w-[6.68rem] px-4 py-1'} />
                <Button variant="secondary">x</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[21.31rem] rounded-md border border-shopii-black-100 px-6 py-8">
          <h4 className="font-semibold capitalize text-shopii-black-900">
            order summary
          </h4>
          <div className="mb-10 mt-6 space-y-3">
            <div className="flex items-center justify-between capitalize">
              <p>subtotal</p>
              <p className="font-medium ">$900</p>
            </div>
            <div className="flex items-center justify-between capitalize">
              <p>shipping</p>
              <p className="font-medium ">FREE</p>
            </div>
            <div className="flex items-center justify-between capitalize">
              <p>tax</p>
              <p className="font-medium ">$3</p>
            </div>
          </div>
          <div className=" w-full border-b border-shopii-black-100" />
          <div className="mb-10 mt-6 flex items-center justify-between capitalize">
            <p className="font-semibold">total</p>
            <p className="font-medium ">$3</p>
          </div>

          <Button
            className="w-full bg-shopii-black-900 capitalize"
            onClick={() => {
              navigate('/checkout');
            }}
          >
            checkout
          </Button>

          <p className="m-auto mt-8 w-max cursor-pointer font-medium text-shopii-black-900 underline">
            continue shopping
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
