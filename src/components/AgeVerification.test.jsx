import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AgeVerification from "./AgeVerification";

function fillDate(month, day, year) {
  fireEvent.change(screen.getByPlaceholderText("MM"), { target: { value: month } });
  fireEvent.change(screen.getByPlaceholderText("DD"), { target: { value: day } });
  fireEvent.change(screen.getByPlaceholderText("YYYY"), { target: { value: year } });
}

describe("AgeVerification", () => {
  it("shows error if fields are empty", () => {
    render(<AgeVerification />);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/please enter your full date of birth/i)).toBeInTheDocument();
  });

  it("denies access if under 18", () => {
    render(<AgeVerification />);
    // Use a date less than 18 years ago
    const now = new Date();
    const year = (now.getFullYear() - 10).toString();
    fillDate("1", "1", year);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/must be at least 18 years old/i)).toBeInTheDocument();
  });

  it("grants access if 18 or older", () => {
    render(<AgeVerification />);
    const now = new Date();
    const year = (now.getFullYear() - 20).toString();
    fillDate("1", "1", year);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/access granted/i)).toBeInTheDocument();
  });
});
