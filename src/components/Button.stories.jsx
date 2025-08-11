import React from "react";
import { Button } from './Button';

export default {
  title       : "Components/Elements/Button",
  component   : Button,
  tags        : ['autodocs'],
  parameters  : {
    layout: 'centered',
    design: {
      type  : 'figma',
      url   : 'https://www.figma.com/design/lwNVL3ceJV5Ih2l1QnODI1/AB-UI-Design-System?node-id=769-157&m=dev',
    }
  }
};

export const Default = () => (
  <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
);

export const CustomStyle = () => (
  <Button onClick={() => alert("Styled button clicked!")} style={{ background: "#28a745" }}>
    Success
  </Button>
);
