import { Link, NavLink } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import logo from '../assets/images/Header.png';
import menu from '../assets/icons/Menu.png';
import cart from '../assets/icons/Add-to-cart.png';
import search from '../assets/icons/Search.png';
import user from '../assets/icons/User.png';
import { Input } from '../components/ui/input';

function Navbar() {
  return (
    <nav className="flex items-center gap-x-4 px-6 py-4 sm:gap-x-6 md:justify-between  md:px-20">
      <img
        src={menu}
        alt="hamburger menu "
        className="cursor-pointer lg:hidden"
      />
      <Link to={'/'}>
        <img
          src={logo}
          alt="the company logo"
          className="w-[111px] cursor-pointer"
          width={111}
          height={70}
        />
      </Link>
      <ul className="hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to={'/'}
            className={
              'relative  block text-sm  font-medium uppercase text-shopii-black-500 after:absolute after:block after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-shopii-black-900 after:duration-300 after:content-[""] hover:font-semibold after:hover:scale-x-100'
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <select value={'hillld'} placeholder="jddshik" onChange={() => {}}>
            <option>otionone</option>
          </select>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={
              'relative block text-sm font-medium uppercase text-shopii-black-500 after:absolute after:block after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-shopii-black-900 after:duration-300 after:content-[""] hover:font-semibold after:hover:scale-x-100'
            }
          >
            {' '}
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={
              'relative block text-sm font-medium uppercase text-shopii-black-500 after:absolute after:block after:h-1 after:w-full after:origin-center after:scale-x-0 after:bg-shopii-black-900 after:duration-300 after:content-[""] hover:font-semibold after:hover:scale-x-100'
            }
          >
            contact
          </NavLink>
        </li>
      </ul>
      <div className=" flex items-center gap-6">
        <form action="">
          <div className="flex items-center gap-3 rounded-md border border-input p-3 py-0 sm:gap-4 sm:px-4 md:gap-6">
            <img src={search} alt="search icon" className="w-4 md:w-8" />
            <Input
              type={'text'}
              className="border-none p-2 text-sm capitalize focus:bg-none focus:ring-0 focus-visible:bg-none focus-visible:ring-0 sm:text-base md:p-4"
              placeholder="search products"
            />
          </div>
        </form>
        <Link to={'cart'}>
          <img src={cart} alt="the cart icon" className="cursor-pointer" />
        </Link>
        <img
          src={user}
          alt="the user icon"
          className="hidden cursor-pointer md:block"
        />
      </div>
    </nav>
  );
}

export default Navbar;
