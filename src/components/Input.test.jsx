import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "./Input";

describe("Input", () => {

  describe("Given the Input is rendered with a value and placeholder", () => {

    describe("When nothing happens", () => {
      it("Then it should display the value and placeholder", () => {
        render(<Input value="foo" placeholder="Enter text" onChange={() => {}} />);
        const input = screen.getByPlaceholderText("Enter text");
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue("foo");
      });
    });

  });

  describe("Given the Input is rendered with onChange", () => {

    describe("When the user types", () => {

      it("Then it should call onChange", () => {
        const handleChange = vi.fn();
        render(<Input value="" onChange={handleChange} placeholder="Type" />);
        const input = screen.getByPlaceholderText("Type");
        fireEvent.change(input, { target: { value: "bar" } });
        expect(handleChange).toHaveBeenCalled();
      });

    });

  });

  describe("Given the Input is rendered as a textarea", () => {

    describe("When nothing happens", () => {
      it("Then it should render a textarea element", () => {
        // Arrange
        render(<Input mode="multiline" value="multiline" onChange={() => {}} placeholder="Multi" />);
        // Act
        const textarea = screen.getByPlaceholderText("Multi");
        // Assert
        expect(textarea.tagName.toLowerCase()).toBe("textarea");
        expect(textarea).toHaveValue("multiline");
      });
    });

    describe("Given the Input is rendered as a number field", () => {

      describe("When nothing happens", () => {

        it("Then it should render input with correct placeholder and value (number)", () => {
          // Arrange
          render(
            <Input mode="number" value={5} onChange={() => {}} min={1} max={12} placeholder="MM" />
          );

          // Act
          const input = screen.getByPlaceholderText("MM");

          // Assert
          expect(input).toBeInTheDocument();
          expect(input).toHaveValue(5);
        });

        it("Then it should render input with correct placeholder and value (string)", () => {
          // Arrange
          render(
            <Input mode="number" value={"5"} onChange={() => {}} min={1} max={12} placeholder="MM" />
          );

          // Act
          const input = screen.getByPlaceholderText("MM");

          // Assert
          expect(input).toBeInTheDocument();
          expect(input).toHaveValue(5);

        });

        it("Then it should render input with empty value", () => {
          // Arrange
          render(
            <Input mode="number" value={""} onChange={() => {}} min={1} max={12} placeholder="MM" />
          );
          // Act
          const input = screen.getByPlaceholderText("MM");
          // Assert
          expect(input).toBeInTheDocument();
          expect(input).toHaveValue(null); // empty string for number input is null
        });

      });

      describe("When the user types a number", () => {

        it("Then it should call onChange with the new number value", () => {
          // Arrange
          const handleChange = vi.fn();
          function Wrapper() {
            const [value, setValue] = React.useState(5);
            return (
              <Input
                mode="number"
                value={value}
                onChange={e => {
                  handleChange(e);
                  setValue(Number(e.target.value));
                }}
                placeholder="MM"
                min={1}
                max={12}
              />
            );
          }
          render(<Wrapper />);
          // Act
          const input = screen.getByPlaceholderText("MM");
          fireEvent.change(input, { target: { value: "7" } });
          // Assert
          expect(handleChange).toHaveBeenCalled();
          expect(input).toHaveValue(7);
        });

        it("Then it should call onChange with empty string when input cleared", () => {
          // Arrange
          const handleChange = vi.fn();
          function Wrapper() {
            const [value, setValue] = React.useState(5);
            return (
              <Input
                mode="number"
                value={value}
                onChange={e => {
                  handleChange(e);
                  setValue(e.target.value === "" ? "" : Number(e.target.value));
                }}
                placeholder="MM"
                min={1}
                max={12}
              />
            );
          }
          render(<Wrapper />);
          // Act
          const input = screen.getByPlaceholderText("MM");
          fireEvent.change(input, { target: { value: "" } });
          // Assert
          expect(handleChange).toHaveBeenCalled();
          expect(input).toHaveValue(null); // empty string for number input is null
        });

      });
    });
  });
  
});
