import { Form } from '../components/ui/form';
import InputForm from '../components/InputForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import img from '../assets/images/clothe1.png';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
const Schema = z.object({
  state: z.string().min(4, { message: 'This input is required ' }),
  city: z.string().min(2, {
    message: 'enter your city name and should be at least 2 characters long',
  }),
  streetAddress: z.string().min(2, { message: 'enter a valid address' }),
  zipCode: z.string().min(2, { message: 'enter a valid zip code' }),
  email: z.string().email(),
  fullName: z.string().min(2, { message: 'your full name' }),
  country: z.string().min(1, { message: 'this input is required' }),
});

export default function Checkout() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      state: '',
      zipCode: '',
      city: '',
      fullName: '',
      country: '',
      email: '',
      streetAddress: '',
    },
  });
  return (
    <Form {...form}>
      <form
        className="grid gap-x-6 gap-y-8 px-6 pb-40 pt-16  sm:px-7 md:grid-cols-[2fr_1fr] md:divide-x lg:px-44 "
        onSubmit={form.handleSubmit(() => console.log('hello'))}
      >
        <div className="md:pr-28">
          <h3 className="mb-16 text-base font-semibold capitalize text-shopii-black-900">
            shipping address
          </h3>
          <div className="space-y-4">
            <InputForm
              label={'street address'}
              type={'text'}
              control={form.control}
              className={'capitalize'}
              name={'streetAddress'}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputForm
                label={'state'}
                type={'text'}
                control={form.control}
                className={'capitalize'}
                name={'state'}
              />
              <InputForm
                label={'city'}
                type={'text'}
                control={form.control}
                className={'capitalize'}
                name={'city'}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputForm
                label={'zipcode'}
                type={'text'}
                control={form.control}
                className={'capitalize'}
                name={'zipCode'}
              />
              <InputForm
                label={'country'}
                type={'text'}
                control={form.control}
                className={'capitalize'}
                name={'country'}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputForm
                label={'fullname'}
                type={'text'}
                control={form.control}
                className={'capitalize'}
                name={'fullName'}
              />
              <InputForm
                label={'email'}
                type={'text'}
                control={form.control}
                className={'capitalize'}
                name={'email'}
              />
            </div>
          </div>
        </div>
        <div className="md:pl-16">
          <h3 className="mb-10 text-base font-semibold capitalize text-shopii-black-900 md:mb-16">
            your order
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <img
                src={img}
                className="h-10 w-10 rounded-full"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <Button
              variant="outline"
              className="capitalize"
              type="button"
              onClick={() => navigate('/cart')}
            >
              edit cart
            </Button>
          </div>
          <div className="mb-10 mt-16 space-y-3">
            <div className="flex items-center justify-between capitalize">
              <p>subtotal</p>
              <p className="font-medium ">$900</p>
            </div>
            <div className="flex items-center justify-between capitalize">
              <p>shipping</p>
              <p className="font-medium ">FREE</p>
            </div>
            <div className="flex items-center justify-between capitalize">
              <p>tax</p>
              <p className="font-medium ">$3</p>
            </div>
          </div>
          <div className=" w-full border-b border-shopii-black-100" />
          <div className="mb-10 mt-6 flex items-center justify-between capitalize">
            <p className="font-semibold">total</p>
            <p className="font-medium ">$3</p>
          </div>

          <Button className="w-full capitalize ">place order</Button>
        </div>
      </form>
    </Form>
  );
}
