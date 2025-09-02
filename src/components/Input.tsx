import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  readonly className? : string;
  readonly mode?      : 'text' | 'multiline' | 'number';
  readonly rows?      : number; // for textarea
}


const baseClass = [
  "bg-canvas",
  "border",
  "border-outline",
  "focus:ring-2",
  "focus:ring-accent",
  "focus:outline-none",
  "placeholder:text-accent/80",
  "placeholder:italic",
  "px-4",
  "py-2",
  "rounded-xl",
  "shadow-sm",
  "text-content",
];

export function Input({ 
  className   = "", 
  mode        = "text", 
  rows        = 3, 
  ...props    
}: InputProps) {

  if (mode === "multiline") {
    return (
      <textarea
        className={[
          ...baseClass,
          className
        ].filter(Boolean).join(" ")}
        rows={rows}
        {
          ...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)
        }
      />
    );
  }

  const inputType = mode === "number" ? "number" : "text";

  return (
    <input
      type={inputType}
      className={[
        ...baseClass,
        className
      ].filter(Boolean).join(" ")}
      {...props}
    />
  );
}


