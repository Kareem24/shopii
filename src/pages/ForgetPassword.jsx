import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../components/ui/form';
import InputForm from '../components/InputForm';
import { Button } from '../components/ui/button';

const Schema = z.object({
  email: z.string().email(),
});

const ForgetPassword = () => {
  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      email: '',
    },
  });
  return (
    <div className="px-6 py-40  md:px-20">
      <div className="m-auto max-w-80">
        <p className=" text-shopii-black-900">
          Please enter the email address associated with your account. {"We'll"}
          promptly send you a link to reset your password.
        </p>
        <Form {...form}>
          <form
            className=" mt-6  space-y-6"
            onSubmit={form.handleSubmit(() => console.log('check your mail'))}
          >
            <InputForm label={'Email'} type={'email'} name={'email'} />
            <Button className="w-full">Send Reset Link</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
