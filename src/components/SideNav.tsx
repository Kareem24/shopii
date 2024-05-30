import Colour from './Colour';
import Sizes from './Sizes';

export default function SideNav() {
  return (
    <div className="hidden rounded-sm border border-shopii-black-100 px-[18px] py-6 md:block">
      <h3 className="mb-4 font-inter font-medium capitalize">categories</h3>
      <ul className="space-y-3 divide-y divide-shopii-black-100 last:border-none">
        <li className="space-x-2">
          <input
            type="checkbox"
            name="perfume"
            id="perfume"
            className="accent-shopii-black-100 "
          />
          <label htmlFor="perfume" className="capitalize text-shopii-black-600">
            {' '}
            perfume
          </label>
        </li>
        <li className=" space-x- pt-3">
          <input
            type="checkbox"
            name=""
            id="trouser"
            className="accent-shopii-black-100 "
          />
          <label htmlFor="trouser" className="capitalize text-shopii-black-600">
            {' '}
            trouser
          </label>
        </li>
        <li className="block space-x-2 pt-3">
          <input
            type="checkbox"
            name=""
            id="hat"
            className="accent-shopii-black-100 "
          />
          <label htmlFor="hat" className="capitalize text-shopii-black-600">
            {' '}
            hat
          </label>
        </li>
        <li className="block space-x-2 pt-3">
          <input
            type="checkbox"
            name=""
            id="handbag"
            className="accent-shopii-black-100 "
          />
          <label htmlFor="handbag" className="capitalize text-shopii-black-600">
            {' '}
            handbag
          </label>
        </li>
        <li className="block space-x-2 pt-3">
          <input
            type="checkbox"
            name=""
            id="plate"
            className="accent-shopii-black-100 "
          />
          <label htmlFor="plate" className="capitalize text-shopii-black-600">
            {' '}
            plate
          </label>
        </li>
        <li className="block space-x-2 pt-3">
          <input
            type="checkbox"
            name=""
            id="milk"
            className="accent-shopii-black-100 "
          />
          <label htmlFor="milk" className="capitalize text-shopii-black-600">
            {' '}
            milk
          </label>
        </li>
      </ul>
      <div className=" my-10">
        <p className="font-medium uppercase text-shopii-black-900">Colors</p>
        <Colour />
      </div>
      <div>
        <p className="font-medium uppercase text-shopii-black-900">sizes</p>
        <Sizes />
      </div>
      <div>range</div>
    </div>
  );
}
