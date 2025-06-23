import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "./NumberInput";

describe("NumberInput", () => {
  describe("Given NumberInput is rendered with a placeholder and value", () => {
    describe("When nothing happens", () => {
      it("Then should render input with correct placeholder and value", () => {
        // Arrange
        render(<NumberInput value={"5"} onChange={() => {}} min={1} max={12} placeholder="MM" />);

        // Act
        const input = screen.getByPlaceholderText("MM");

        // Assert
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(5);
      });
    });
  });

  describe("Given NumberInput is rendered with an onChange handler", () => {
    describe("When the value changes", () => {
      it("Then should call onChange with the new value", () => {
        // Arrange
        const handleChange = vi.fn();
        render(<NumberInput value={""} onChange={handleChange} min={1} max={31} placeholder="DD" />);

        // Act
        const input = screen.getByPlaceholderText("DD");
        fireEvent.change(input, { target: { value: "7" } });

        // Assert
        expect(handleChange).toHaveBeenCalledWith(7);
      });
    });
  });

  describe("Given NumberInput is rendered with an empty value", () => {
    describe("When nothing happens", () => {
      it("Then should have a null value", () => {
        // Arrange
        render(<NumberInput value={""} onChange={() => {}} min={1900} max={2100} placeholder="YYYY" />);

        // Act
        const input = screen.getByPlaceholderText("YYYY");

        // Assert
        expect(input).toHaveValue(null);
      });
    });
  });
});

