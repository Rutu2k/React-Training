import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

it("renders Login Component", () => {
  render(<Login />);
  const firtName = screen.getByText(/First Name/i);
  expect(firtName).toBeInTheDocument();
});

it("checks if submit button is not disabled", () => {
  render(<Login />);
  const submitButton = screen.getByText(/Submit/i);
  expect(submitButton).toBeEnabled();
});
