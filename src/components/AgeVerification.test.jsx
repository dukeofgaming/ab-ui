import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AgeVerification } from "./AgeVerification";

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
  describe("Given the AgeVerification is rendered", () => {
    let onPass, onFail;
    
    beforeEach(() => {
      onPass = vi.fn();
      onFail = vi.fn();
      render(<AgeVerification onPass={onPass} onFail={onFail} />);
    });

    describe("When the user does not fill any fields and clicks verify", () => {
      it("Then should show an error for missing date of birth", () => {
        // Act
        fireEvent.click(screen.getByRole("button", { name: /verify/i }));

        // Assert
        expect(screen.getByText(/please enter your full date of birth/i)).toBeInTheDocument();
      });
    });

    describe("When the user enters a date under 18 years ago and clicks verify", () => {
      it("Then should deny access and show the correct error, and call onFail", () => {
        const { month, day, year } = getYearsAgo(10);

        // Act
        fillDate(month, day, year);
        fireEvent.click(screen.getByRole("button", { name: /verify/i }));

        // Assert
        expect(screen.getByText(/must be at least 18 years old/i)).toBeInTheDocument();
        expect(onFail).toHaveBeenCalled();
      });
    });

    describe("When the user enters a date at least 18 years ago and clicks verify", () => {
      it("Then should grant access and call onPass", () => {
        const { month, day, year } = getYearsAgo(20);

        // Act
        fillDate(month, day, year);
        fireEvent.click(screen.getByRole("button", { name: /verify/i }));

        // Assert
        expect(screen.getByText(/access granted/i)).toBeInTheDocument();
        expect(onPass).toHaveBeenCalled();
      });
    });
  });

  describe("Given the AgeVerification is rendered with minAge=21", () => {
    let onPass, onFail;
    beforeEach(() => {
      onPass = vi.fn();
      onFail = vi.fn();
      render(<AgeVerification minAge={21} onPass={onPass} onFail={onFail} />);
    });

    describe("When the user enters a date under 21 years ago and clicks verify", () => {
      it("Then should deny access and show the correct error for 21", () => {
        const { month, day, year } = getYearsAgo(20);

        // Act
        fillDate(month, day, year);
        fireEvent.click(screen.getByRole("button", { name: /verify/i }));

        // Assert
        expect(screen.getByText(/must be at least 21 years old/i)).toBeInTheDocument();
      });
    });
    describe("When the user enters a date at least 21 years ago and clicks verify", () => {
      it("Then should grant access for 21", () => {
        const { month, day, year } = getYearsAgo(22);

        // Act
        fillDate(month, day, year);
        fireEvent.click(screen.getByRole("button", { name: /verify/i }));

        // Assert
        expect(screen.getByText(/access granted/i)).toBeInTheDocument();
      });
    });
  });
});
