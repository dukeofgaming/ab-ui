import { 
  ButtonHTMLAttributes, 
  ReactNode 
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children   : ReactNode;
  readonly variant?   : 'action' | 'neutral' | 'destructive';
  readonly className? : string;
}

export function Button({ 
  children, 
  variant   = 'action', 
  className = '', 
  ...props 
}: ButtonProps) {

  const baseClasses = [
    "font-semibold",
    "px-4",
    "py-2",
    "rounded-xl",
    "shadow",
    "transition-colors",
    'hover:contrast-200',
  ];

  let variantClasses: string[] = [];

  switch (variant) {
    case 'neutral':
      variantClasses = [
        'bg-neutral-300',
        'text-black/95'
      ];
      break;

    case 'destructive':
      variantClasses = [
        'bg-destructive',
        'text-white',
      ];
      break;

    case 'action':
    default:
      variantClasses = [
        'bg-accent',
        'text-white',
      ];
      break;
  }

  return (
    <button
      className={
        [
          ...baseClasses,
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
