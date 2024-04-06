import { describe, expect, it, vi } from "vitest";
import TestComponent from "./TestComponent";
import { render, screen } from "@testing-library/react";

describe("TestComponent", () => {
  it("Testing component rendering", async () => {
    const props = {
      value: "testing",
      onChange: vi.fn(),
      items: ["testing", "clase", "react"],
    };

    render(<TestComponent {...props} />);
    const element = await screen.findByText("testing");

    expect(element).toBeInTheDocument();
  });
  it("Testing function", () => {
    const getColors = () => {
      return ["yellow", "red", "blue"];
    };

    expect(getColors()).toContain("blue");
  });

  it("Testing second function", () => {
    const getColors = () => {
      return ["yellow", "red", "blue"];
    };
    const removeColorFromArray = (array, color) => {
      return array.filter((element) => element !== color);
    };
    const result = removeColorFromArray(getColors(), "blue");

    expect(result).to.not.contain("blue");
  });

  it("Testing function with object", () => {
    const createUser = (name, age) => ({ name, age });

    const expectedUser = {
      name: "Nadia",
      age: 50,
    };

    const result = createUser("Nadia", 50);

    expect(expectedUser).toStrictEqual(result);
  });
});
