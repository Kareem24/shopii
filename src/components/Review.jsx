import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import stars from '../assets/icons/Stars.png';

export default function Review() {
  return (
    <article className=" item-center flex gap-6 px-2 py-8 md:justify-between">
      <Avatar className="bg-shopii-white-200 flex h-4 w-4 items-center justify-center rounded-full p-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium text-shopii-black-900">
          Emily davies
        </p>
        <p className="mb-4 mt-[6px] text-sm font-medium uppercase text-shopii-black-500">
          1 week ago
        </p>
        <p className="text-shopii-black-500">
          this company always go above and beyound to satisfy thier customers
        </p>
      </div>
      <div>
        <img src={stars} alt="" />
      </div>
    </article>
  );
}
