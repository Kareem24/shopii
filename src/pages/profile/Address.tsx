import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../../components/ui/form';
import InputForm from '../../components/InputForm';
import { Button } from '../../components/ui/button';

const Schema = z.object({
  state: z.string().min(4, { message: 'This input is required ' }),
  city: z.string().min(2, {
    message: 'enter your city name and should be at least 2 characters long',
  }),
  streetAddress: z.string().min(2, { message: 'enter a valid address' }),
  zipCode: z.string().min(2, { message: 'enter a valid zip code' }),

  country: z.string().min(1, { message: 'this input is required' }),
});
function Address() {
  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      state: '',
      zipCode: '',
      city: '',
      country: '',
      streetAddress: '',
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => console.log('hello'))}>
        <div>
          <div className="space-y-4">
            <InputForm
              label={'street address'}
              type={'text'}
              control={form.control}
              className={'capitalize'}
              name={'streetAddress'}
            />
            <div className="grid gap-4 md:grid-cols-2">
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
            <div className="grid gap-4 md:grid-cols-2">
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
          </div>
          <Button className="mt-16" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default Address;
