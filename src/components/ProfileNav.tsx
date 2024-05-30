import { Link, NavLink } from 'react-router-dom';

import user from '../assets/icons/profile.png';
import cart from '../assets/icons/profile-cart.png';
import key from '../assets/icons/Key.png';
import bus from '../assets/icons/address.png';
import heart from '../assets/icons/Heart.png';
import logout from '../assets/icons/log-out.png';

export default function ProfileNav() {
  return (
    <div className="profile flex w-max flex-col gap-4 *:flex *:items-center  *:gap-4 *:px-4 *:py-2 *:text-sm *:font-medium *:capitalize md:*:px-6 ">
      <NavLink to={'profile/order'}>
        <img src={cart} alt="" />
        <span className="hidden md:block">order</span>
      </NavLink>
      <NavLink to={'profile/wishlist'}>
        <img src={heart} alt="" />
        <span className="hidden md:block">whishlist</span>
      </NavLink>
      <NavLink to={'profile/shipping-address'}>
        {' '}
        <img src={bus} alt="" />
        <span className="hidden md:block">Address</span>
      </NavLink>
      <NavLink to={'profile/password'}>
        <img src={key} alt="" />
        <span className="hidden md:block">password</span>
      </NavLink>
      <NavLink to={'profile/account-details'}>
        <img src={user} alt="" />
        <span className="hidden md:block">Account details</span>
      </NavLink>
      <NavLink to={'profile/wishlist'}>
        <img src={logout} alt="" />
        <span className="hidden md:block">logout</span>
      </NavLink>
    </div>
  );
}
