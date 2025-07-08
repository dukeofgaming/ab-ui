import React, { useState } from "react";
import NumberInput from "./NumberInput";

export default {
  title: "Components/NumberInput",
  component: NumberInput,
};

export const Default = () => {
  const [value, setValue] = useState(18);
  return (
    <NumberInput value={value} onChange={setValue} min={0} max={120} />
  );
};

export const WithInitialValue = () => {
  const [value, setValue] = useState(42);
  return (
    <NumberInput value={value} onChange={setValue} min={0} max={120} />
  );
};
