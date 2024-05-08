import * as React from 'react';

import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Button } from '../components/ui/button';
import InputForm from './InputForm';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer';

import { Form } from './ui/form';
import star from '../assets/icons/Stars.png';
const reviewSchema = z.object({
  email: z.string().email(),
  fullName: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  review: z
    .string({ required_error: 'please enter your event name' })
    .min(6, { message: 'review must be at least 6 characters long' }),
});

export function WriteReview() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-shopii-black-900">
            Write a review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DrawerTitle className="text-base font-semibold capitalize text-shopii-black-900">
              Write review
            </DrawerTitle>
            <div className="w-full border border-shopii-white-200" />
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="border-shopii-black-900">
          Write a review
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-base font-semibold capitalize text-shopii-black-900">
            Write review
          </DrawerTitle>
          <div className="w-full border border-shopii-white-200" />
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      email: '',
      fullName: '',
      review: '',
    },
  });
  return (
    <Form {...form}>
      <form
        className={cn('grid items-start gap-6', className)}
        onSubmit={form.handleSubmit(() => {
          console.log('helllo');
        })}
      >
        <InputForm
          type="email"
          label="Email"
          name="email"
          control={form.control}
        />
        <InputForm
          type="text"
          label="Fullname"
          name="fullName"
          control={form.control}
        />
        <InputForm
          isInput={false}
          label="Review"
          name="review"
          control={form.control}
        />

        <img src={star} alt="the stars rating" />
        <Button type="submit" className={'bg-shopii-black-900 capitalize'}>
          Submit your review
        </Button>
      </form>
    </Form>
  );
}
