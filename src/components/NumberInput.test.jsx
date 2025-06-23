import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "./NumberInput";

describe("NumberInput", () => {
  it("renders with placeholder and value", () => {
    render(<NumberInput value={"5"} onChange={() => {}} min={1} max={12} placeholder="MM" />);
    const input = screen.getByPlaceholderText("MM");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(5);
  });

  it("calls onChange with new value", () => {
    const handleChange = vi.fn();
    render(<NumberInput value={""} onChange={handleChange} min={1} max={31} placeholder="DD" />);
    const input = screen.getByPlaceholderText("DD");
    fireEvent.change(input, { target: { value: "7" } });
    expect(handleChange).toHaveBeenCalledWith(7);
  });

  it("handles empty value", () => {
    render(<NumberInput value={""} onChange={() => {}} min={1900} max={2100} placeholder="YYYY" />);
    const input = screen.getByPlaceholderText("YYYY");
    expect(input).toHaveValue(null);
  });
});

