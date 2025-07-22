import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: 'primary' | 'secondary' | 'action' | 'danger';
  readonly className?: string;
}

function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  let variantClass = '';
  switch (variant) {
    case 'secondary':
      variantClass = 'bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-xl shadow';
      break;
    case 'action':
      variantClass = 'px-4 py-2 bg-[var(--global-color-border)] hover:brightness-90 text-[var(--global-color-accent)] font-semibold rounded shadow-sm transition-colors focus:ring-[var(--global-color-accent)]';
      break;
    case 'danger':
      variantClass = 'px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-semibold rounded shadow-sm transition-colors';
      break;
    case 'primary':
    default:
      variantClass = 'bg-[var(--global-color-accent)] hover:brightness-90 text-[var(--global-color-bg)] font-semibold px-4 py-2 rounded-xl shadow';
      break;
  }
  return (
    <button className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

export default Button;
