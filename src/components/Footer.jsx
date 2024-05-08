import { Button } from './ui/button';
import { Input } from './ui/input';
import footer from '../assets/images/Footer.png';
import payment from '../assets/images/Payments.png';
import youtube from '../assets/icons/Youtube.png';
import instagram from '../assets/icons/Instagram.png';

function Footer() {
  return (
    <>
      <footer>
        <div className="grid gap-6 bg-shopii-white-100 px-6 py-12 sm:grid-cols-2 md:px-20">
          <div className="mb-6 space-y-4 sm:mb-0 sm:space-y-6">
            <h2 className="text-2xl font-bold text-shopii-black-900">
              Join Our Newsletter
            </h2>
            <p className="text-base text-shopii-black-500 ">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center gap-x-4 sm:justify-self-end">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-transparent"
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 px-6 py-12 md:grid-cols-3 md:px-20 ">
          <div>
            <img src={footer} alt="" />
            <small className="mb-8 mt-3 block text-shopii-black-500 md:w-[272px]">
              DevCut is a YouTube channel for practical project-based learning.
            </small>
            <div className="flex items-center space-x-4">
              <img
                src={instagram}
                alt="instagram icon"
                width={24}
                height={24}
              />
              <img src={youtube} alt=" youtube icon" width={24} height={24} />
            </div>
          </div>
          <div className="order-3 col-span-2 grid grid-cols-3 gap-14  sm:gap-x-16 md:order-2 md:col-span-1">
            <div>
              <p className="mb-8 font-medium uppercase text-shopii-black-300 sm:mb-10">
                Support
              </p>
              <ul className="space-y-4">
                <li className="font-medium text-shopii-black-500">FAQ</li>
                <li className="font-medium capitalize text-shopii-black-500">
                  term of use{' '}
                </li>
                <li className="font-medium capitalize text-shopii-black-500">
                  privacy policy
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-8 font-medium uppercase text-shopii-black-300 sm:mb-10">
                company
              </p>
              <ul className="space-y-4">
                <li className="font-medium text-shopii-black-500">About us</li>
                <li className="font-medium capitalize text-shopii-black-500">
                  contact
                </li>
                <li className="font-medium capitalize text-shopii-black-500">
                  career
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-8 font-medium uppercase text-shopii-black-300 sm:mb-10">
                Shop
              </p>
              <ul className="space-y-4">
                <li className="font-medium text-shopii-black-500">
                  My Account
                </li>
                <li className="font-medium capitalize text-shopii-black-500">
                  checkout
                </li>
                <li className="font-medium capitalize text-shopii-black-500">
                  cart
                </li>
              </ul>
            </div>
          </div>
          <div className="md:order-3">
            <p className="mb-8 font-medium uppercase text-shopii-black-300 sm:mb-10">
              accepted payment
            </p>
            <img
              src={payment}
              alt="the image of the payment accepted ,mastercard and verve"
            />
          </div>
        </div>
        <div className="px-6 pb-8 text-center md:px-20">
          <div className="mb-6 mt-24 h-1 w-full border-b border-shopii-white-200"></div>
          <small className="text-sm text-shopii-black-300">
            © 2023 DevCut. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
