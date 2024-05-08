import { useForm } from 'react-hook-form';
import { Form } from '../components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from '../components/InputForm';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/icons/Google.png';
const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
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
            type={'password'}
            label={'Password'}
            name={'password'}
            control={form.control}
          />
          <Link to={'/forget-password'}>
            <span className="block text-right text-sm font-medium capitalize text-shopii-black-600">
              forgot password?
            </span>
          </Link>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-center text-sm font-medium text-shopii-black-600">
        {" Don't"} have an account?{' '}
        <Link to={'/sign-up'}>
          <span className="font-bold underline">Sign up</span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
