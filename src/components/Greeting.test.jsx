import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("render default greetings", () => {
    render(
      <>
        <Greeting />
      </>
    );
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });
  it("render greetings with name", () => {
    render(
      <>
        <Greeting name={"Gokul"} />
      </>
    );
    const text = screen.getByText("Hello, Gokul!");
    expect(text).toBeInTheDocument();
  });
});
