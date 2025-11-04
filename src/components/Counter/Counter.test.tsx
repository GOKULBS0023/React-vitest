import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("increment count on button click", async () => {
    render(
      <>
        <Counter />
      </>
    );
    const button = screen.getByRole("button", { name: /increment/i });
    const counterValue = screen.getByTestId("counter-value");

    expect(counterValue.textContent).toEqual("0");
    await userEvent.click(button);
    expect(counterValue.textContent).toEqual("1");
    await userEvent.click(button);
    expect(counterValue.textContent).toEqual("2");
  });
});
