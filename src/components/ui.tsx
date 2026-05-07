'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Check, ArrowRight } from 'lucide-react';

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(...inputs);
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ children, variant, size, loading, disabled }: ButtonProps) {
  const className = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-700',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
    outline: 'bg-transparent border border-zinc-200 text-zinc-900 hover:bg-zinc-50',
    ghost: 'bg-transparent text-zinc-900 hover:bg-zinc-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg',
        className[variant ?? 'primary'],
        size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-md',
        loading ? 'opacity-50 cursor-not-allowed' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      )}
    >
      {loading ? <Check className="animate-spin" /> : children}
    </button>
  );
}