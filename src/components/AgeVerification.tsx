import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const MIN_AGE = 18;

export interface AgeVerificationProps {
  readonly minAge?: number;
}

export default function AgeVerification({
  minAge = MIN_AGE
}: AgeVerificationProps) {

  const [month, setMonth]       = useState<number | "">("");
  const [day, setDay]           = useState<number | "">("");
  const [year, setYear]         = useState<number | "">("");
  const [verified, setVerified] = useState(false);
  const [error, setError]       = useState("");

  const handleVerify = () => {
    if (month === "" || day === "" || year === "") {
      setError("Please enter your full date of birth.");
      setVerified(false);
      return;
    }
    const dob = new Date(Number(year), Number(month) - 1, Number(day));
    const now = new Date();
    const age = now.getFullYear() - dob.getFullYear() - (
      now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate()) ? 1 : 0
    );
    if (age >= minAge) {
      setVerified(true);
      setError("");
    } else {
      setVerified(false);
      setError(`You must be at least ${minAge} years old.`);
    }
  };

  return (
    <div>
      <Input
        mode="number"
        value={month}
        onChange={e => setMonth(e.target.value === "" ? "" : Number(e.target.value))}
        placeholder="MM"
        min={1}
        max={12}
      />
      <Input
        mode="number"
        value={day}
        onChange={e => setDay(e.target.value === "" ? "" : Number(e.target.value))}
        placeholder="DD"
        min={1}
        max={31}
      />
      <Input
        mode="number"
        value={year}
        onChange={e => setYear(e.target.value === "" ? "" : Number(e.target.value))}
        placeholder="YYYY"
        min={1900}
        max={2100}
      />
      <Button onClick={handleVerify}>Verify Age</Button>
      {verified && <div>Access granted!</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}