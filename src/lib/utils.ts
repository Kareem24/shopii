import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { boolean, string } from 'zod';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
