import { 
  ButtonHTMLAttributes, 
  ReactNode 
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: 'primary' | 'secondary' | 'action' | 'danger';
  readonly className?: string;
}

export function Button({ 
  children, 
  variant   = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {

  const baseClass = [
    "font-semibold",
    "px-4",
    "py-2",
    "rounded-xl",
    "shadow",
    "transition-colors",
  ];
  let variantClasses: string[] = [];

  switch (variant) {
    case 'secondary':
      variantClasses = [
        'bg-gray-200',
        'hover:bg-gray-300',
        'text-gray-800',
      ];
      break;

    case 'action':
      variantClasses = [
        'bg-[var(--global-color-border)]',
        'hover:brightness-90',
        'text-[var(--global-color-accent)]',
        'focus:ring-[var(--global-color-accent)]',
        'shadow-sm',
        'rounded',
      ];
      break;

    case 'danger':
      variantClasses = [
        'bg-red-400',
        'hover:bg-red-500',
        'text-white',
        'shadow-sm',
        'rounded',
      ];
      break;

    case 'primary':
    default:
      variantClasses = [
        'bg-[var(--global-color-accent)]',
        'hover:brightness-90',
        'text-[var(--global-color-bg)]',
      ];
      break;
  }

  return (
    <button
      className={
        [
          ...baseClass,
          ...variantClasses,
          className
        ].filter(Boolean).join(" ")
      }
      {...props}
    >
      {children}
    </button>
  );
}
