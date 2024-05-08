import { Input } from '../components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { cn } from '@/lib/utils';
import { Textarea } from '../components/ui/textarea';

// interface InputLabelProps {
//   label?: string;
//   name: string;
//   type: HTMLInputTypeAttribute;
//   control: any;
//   className?: string;
//   placeholder?: string;
//   isInput?: boolean;
//   id?: string;
// }

export default function EventInput({
  name,
  label,
  type,
  control,
  className,
  placeholder,
  isInput = true,
  id,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel className={cn('font-medium ')}>{label}</FormLabel>
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
