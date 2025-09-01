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

export const Action = () => (
  <Button 
    onClick={() => alert("Button clicked!")}
  >
    Action
  </Button>
);

export const Neutral = () => (
  <Button 
    variant="neutral"
    onClick={() => alert("Styled button clicked!")}
  >
    Neutral
  </Button>
);

export const Destructive = () => (
  <Button 
    variant="destructive"
    onClick={() => alert("Styled button clicked!")}
  >
    Destructive
  </Button>
);

