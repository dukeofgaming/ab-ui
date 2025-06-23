import React, { useState } from "react";
import NumberInput from "./NumberInput";
import Button from "./Button";

const AgeVerification = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [verified, setVerified] = useState(null);
  const [error, setError] = useState("");
  

  const handleVerify = () => {
    setError("");
    if (!month || !day || !year) {
      setVerified(null);
      setError("Please enter your full date of birth.");
      return;
    }
    const now = new Date();
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }
    setVerified(age >= 18);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", maxWidth: 320, margin: "0 auto", padding: 24, border: "1px solid #eee", borderRadius: 8, background: "#fafafa" }}>
      <h2>Age Verification</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <NumberInput 
            value={month} 
            onChange={v => setMonth(v === "" ? "" : Math.max(1, Math.min(12, Number(v))))} 
            min={1} 
            max={12} 
            style={{ width: 60 }} 
            placeholder="MM" 
        />
        <NumberInput 
            value={day} 
            onChange={v => setDay(v === "" ? "" : Math.max(1, Math.min(31, Number(v))))} 
            min={1} 
            max={31} 
            style={{ width: 60 }} 
            placeholder="DD" 
        />
        <NumberInput 
            value={year} 
            onChange={v => setYear(v === "" ? "" : Number(v))} 
            min={1900} 
            max={new Date().getFullYear()} 
            style={{ width: 80 }} 
            placeholder="YYYY" 
        />
      </div>

      <Button onClick={handleVerify}>Verify Age</Button>

      {error && (
        <div style={{ marginTop: 16, color: 'red' }}>{error}</div>
      )}

      {verified !== null && !error && (
        <div style={{ marginTop: 16, color: verified ? "green" : "red" }}>
          {verified ? "Access granted!" : "You must be at least 18 years old."}
        </div>
      )}
    </div>
  );
};

export default AgeVerification;
