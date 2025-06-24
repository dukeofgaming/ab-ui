import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("Given the Button is rendered with a label", () => {
    describe("When nothing happens", () => {
      it("Then should render the button with the correct label", () => {
        // Arrange
        render(<Button>Click Me</Button>);

        // Assert
        expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
      });
    });
  });

  describe("Given the Button is rendered with an onClick handler", () => {
    describe("When the button is clicked", () => {
      it("Then should call the onClick handler", () => {
        // Arrange
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click</Button>);

        // Act
        fireEvent.click(screen.getByRole("button"));

        // Assert
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("Given the Button is rendered with custom styles", () => {
    describe("When nothing happens", () => {
      it("Then should apply the custom styles", () => {
        // Arrange
        render(<Button style={{ background: "red" }}>Styled</Button>);

        // Assert
        expect(screen.getByRole("button")).toHaveStyle({ background: "red" });
      });
    });
  });
});
