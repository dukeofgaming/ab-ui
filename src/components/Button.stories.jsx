import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => (
  <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
);

export const CustomStyle = () => (
  <Button onClick={() => alert("Styled button clicked!")} style={{ background: "#28a745" }}>
    Success
  </Button>
);
