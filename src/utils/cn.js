import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging tailwind classes and handling conditional classes.
 * Combines clsx for conditional logic and tailwind-merge for overriding conflicting classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
