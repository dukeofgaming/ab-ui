import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  readonly className?: string;
  readonly mode?: 'text' | 'multiline' | 'number';
  readonly rows?: number; // for textarea
}


const baseClass =
  "border border-[var(--global-color-border)] bg-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--global-color-accent)] text-base shadow-sm text-[var(--global-color-text)] placeholder-gray-400";

export function Input({ className = "", mode = "text", rows = 3, ...props }: InputProps) {
  if (mode === "multiline") {
    return (
      <textarea
        className={`${baseClass} ${className}`.trim()}
        rows={rows}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  const inputType = mode === "number" ? "number" : "text";
  return (
    <input
      type={inputType}
      className={`${baseClass} ${className}`.trim()}
      {...props}
    />
  );
}

Input.displayName = "Input";

export default Input;
