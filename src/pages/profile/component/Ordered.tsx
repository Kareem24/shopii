import React from 'react';
import { Button } from '../../../components/ui/button';
import img from '../../../assets/images/clothe1.png';

export default function Ordered() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex items-center gap-8">
          <img src={img} alt="" width={80} height={80} />
          <article className="space-y-2">
            <p className="font-medium capitalize text-shopii-black-900">
              raw black T-Shirt lineup
            </p>
            <p className="text-shopii-black-500 ">
              ordered on 27th of july 2023
            </p>
            <p className="font-medium text-shopii-black-900 ">$70.00</p>
          </article>
        </div>
        <div className="flex items-center gap-6">
          <p className="capitalize underline shadow-shopii-black-900">
            processing
          </p>
          <Button
            variant={'outline'}
            className="border-shopii-black-900 capitalize"
          >
            view item
          </Button>
        </div>
      </div>
    </div>
  );
}
