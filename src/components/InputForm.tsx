import { Input } from './ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';
import { HTMLInputTypeAttribute } from 'react';

interface InputLabelProps {
  label?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  control: any;
  className?: string;
  placeholder?: string;
  isInput?: boolean;
  id?: string;
}

export default function EventInput({
  name,
  label,
  type,
  control,
  className,
  placeholder,
  isInput = true,
  id,
}: InputLabelProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel className={cn('font-medium capitalize ')}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            {isInput ? (
              <Input
                className={className}
                type={type}
                placeholder={placeholder}
                {...field}
                id={id}
              />
            ) : (
              <Textarea
                className={className}
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
