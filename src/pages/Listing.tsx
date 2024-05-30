import Sort from '../components/Sort';
import SideNav from '../components/SideNav';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

import NewsLetter from '../components/NewsLetter';
import { useQuery } from '@tanstack/react-query';
import Products from '@/components/ui/Products';
import PaginationComponent from '@/components/component/PaginationComponent';
import { fetchProducts } from '@/api/api';

export default function Listing({ query }: { query: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(query),
  });

  return (
    <>
      <div className="md:px20 grid grid-cols-[1fr_4fr] gap-5 px-6 pb-32 pt-6">
        <Button className="md:hidden " variant="outline">
          fil
        </Button>
        <SideNav />
        <div>
          <p className="font-medium capitalize text-shopii-black-900 ">
            applied filter
          </p>
          <div className="mb-7 mt-3 flex items-center gap-x-4">
            <Badge
              variant="outline"
              className={
                'item-center flex gap-x-2  border-shopii-black-100 text-base capitalize text-black *:font-normal'
              }
            >
              perfume
              <span className="cursor-pointer ">x</span>
            </Badge>
            <Badge
              variant="outline"
              className={
                'item-center flex gap-x-2  border-shopii-black-100 text-base capitalize text-black *:font-normal'
              }
            >
              size:m
              <span className="cursor-pointer ">x</span>
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium capitalize text-shopii-black-500">
              show 1-9 out of 36 result
            </p>
            <Sort />
          </div>
          {isError && <p>the was an error</p>}
          {isLoading ? <p>loading</p> : <Products products={data.data} />}
          <PaginationComponent />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
