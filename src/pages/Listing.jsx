import Sort from '../components/Sort';
import SideNav from '../components/SideNav';
import { Badge } from '../components/ui/badge';
import Products from '../components/ui/Products';
import { Button } from '../components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function Listing() {
  return (
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
        <Products />
        <Pagination className="mt-16">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" showText={false} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" showText={false} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
