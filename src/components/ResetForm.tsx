import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from './ui/form';
import InputForm from './InputForm';

import { passwordRegex } from '../lib/data';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

const Schema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'password must be more than 8 characters long' })
      .regex(passwordRegex, {
        message:
          'password must contain at least one uppercase, one lowercase, one number and one special character',
      }),
    confirmPassword: z
      .string()
      .min(4, { message: 'password must be more than 4 characters long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  });
type ResetFormProps = {
  btnName: string;
  className?: string | undefined;
  btnClass?: string | undefined;
};

export default function ResetForm({
  btnName,
  className = '',
  btnClass = '',
}: ResetFormProps) {
  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <Form {...form}>
      <form
        className={cn(' max-w-80 space-y-6', className)}
        onSubmit={form.handleSubmit(() => console.log('check your mail'))}
      >
        <InputForm
          label={'New password'}
          type={'password'}
          name={'password'}
          control={form.control}
        />
        <InputForm
          label={'Confirm password'}
          type={'password'}
          name={'confirmPassword'}
          control={form.control}
        />
        <Button className={cn(btnClass, 'capitalize')}>{btnName}</Button>
      </form>
    </Form>
  );
}
