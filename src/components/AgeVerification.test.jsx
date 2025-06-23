import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AgeVerification from "./AgeVerification";

function getYearsAgo(years) {
  const now = new Date();
  return {
    month: "1",
    day: "1",
    year: (now.getFullYear() - years).toString(),
  };
}

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

  it("denies access if under 18 (default)", () => {
    render(<AgeVerification />);
    const { month, day, year } = getYearsAgo(10);
    fillDate(month, day, year);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/must be at least 18 years old/i)).toBeInTheDocument();
  });

  it("grants access if 18 or older (default)", () => {
    render(<AgeVerification />);
    const { month, day, year } = getYearsAgo(20);
    fillDate(month, day, year);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/access granted/i)).toBeInTheDocument();
  });

  it("denies access if under custom minAge", () => {
    render(<AgeVerification minAge={21} />);
    const { month, day, year } = getYearsAgo(20);
    fillDate(month, day, year);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/must be at least 21 years old/i)).toBeInTheDocument();
  });

  it("grants access if meets custom minAge", () => {
    render(<AgeVerification minAge={21} />);
    const { month, day, year } = getYearsAgo(22);
    fillDate(month, day, year);
    fireEvent.click(screen.getByRole("button", { name: /verify/i }));
    expect(screen.getByText(/access granted/i)).toBeInTheDocument();
  });
});
