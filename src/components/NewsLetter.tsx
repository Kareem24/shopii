import { Button } from './ui/button';
import { Input } from './ui/input';
const NewsLetter = () => {
  return (
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
  );
};

export default NewsLetter;
