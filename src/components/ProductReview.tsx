import React from 'react';
import { WriteReview } from './WriteReview';
import Sort from './Sort';
import Review from './Review';
import { Button } from './ui/button';

function ProductReview() {
  return (
    <div>
      <p className="to-shopii-black-900 text-base font-semibold capitalize">
        review
      </p>
      <div className="mb-10 mt-4 flex items-center gap-6">
        <p className="text-3xl font-bold text-shopii-black-900">4.2</p>
        <span className="text-sm text-shopii-black-500">— 54 Reviews</span>
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
  );
}

export default ProductReview;
