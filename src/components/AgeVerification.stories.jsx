import React from "react";
import AgeVerification from "./AgeVerification";

export default {
  title: "Components/AgeVerification",
  component: AgeVerification,
};

export const Default = () => <AgeVerification />;

export const MinAge18 = () => <AgeVerification minAge={18} />;
MinAge18.storyName = 'Minimum Age 18';

export const MinAge21 = () => <AgeVerification minAge={21} />;
MinAge21.storyName = 'Minimum Age 21';
