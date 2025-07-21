import React from "react";

interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  readonly value: number | "";
  readonly onChange: (value: number | "") => void;
}

function NumberInput({ value, onChange, ...props }: NumberInputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={e => onChange(e.target.value === "" ? "" : Number(e.target.value))}
      {...props}
      style={{ padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc", ...(props.style || {}) }}
    />
  );
}

export default NumberInput;
