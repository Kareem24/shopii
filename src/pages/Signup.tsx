import { useForm } from 'react-hook-form';
import { Form } from '../components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from '../components/InputForm';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/icons/Google.png';
import { passwordRegex } from '../lib/data';
const signUpSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  password: z
    .string()
    .min(8, { message: 'Name must be at least 4 characters long' })
    .regex(passwordRegex, {
      message:
        'password must contain at least one uppercase, one lowercase, one number and one special character',
    }),
});

function Signup() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });
  return (
    <div className="px-6 py-40  md:px-20  ">
      <div className="m-auto mb-8 max-w-80 space-y-8">
        <Button
          variant="outline"
          className="m-auto flex w-full items-center gap-4 border-shopii-white-200 "
        >
          <img src={googleIcon} alt="google icon for login" />
          <span className="font-medium text-shopii-black-500">
            Continue With google
          </span>
        </Button>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-full bg-shopii-black-100" />
          <p className="uppercase text-shopii-black-500">or</p>
          <div className="h-[1px] w-full bg-shopii-black-100" />
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => {
            console.log('form validated');
          })}
          className="m-auto max-w-80 space-y-4"
        >
          <InputForm
            type={'email'}
            label={'Email'}
            name={'email'}
            control={form.control}
          />
          <InputForm
            type={'text'}
            label={'Name'}
            name={'name'}
            control={form.control}
          />
          <InputForm
            type={'password'}
            label={'Password'}
            name={'password'}
            control={form.control}
          />
          <p className="text-center text-sm font-medium capitalize text-shopii-black-600">
            By creating an account you agree with our Terms of Service, Privacy
            Policy,
          </p>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-center text-sm font-medium text-shopii-black-600">
        Already have an account?
        <Link to={'/login'}>
          <span className="font-bold underline">Login</span>
        </Link>
      </p>
    </div>
  );
}

export default Signup;
