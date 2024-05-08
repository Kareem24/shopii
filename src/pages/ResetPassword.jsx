import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../components/ui/form';
import InputForm from '../components/InputForm';
import { Button } from '../components/ui/button';
export const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);
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
function ResetPassword() {
  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <div className="px-6 py-40  md:px-20">
      <Form {...form}>
        <form
          className=" m-auto  mt-6 max-w-80 space-y-6"
          onSubmit={form.handleSubmit(() => console.log('check your mail'))}
        >
          <InputForm
            label={'New password'}
            type={'password'}
            name={'password'}
          />
          <InputForm
            label={'Confirm password'}
            type={'password'}
            name={'confirmPassword'}
          />
          <Button className="w-full">Send Reset Link</Button>
        </form>
      </Form>
    </div>
  );
}

export default ResetPassword;
