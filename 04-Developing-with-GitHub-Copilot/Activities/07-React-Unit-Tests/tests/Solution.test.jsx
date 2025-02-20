import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaymentPortal from "../client/PaymentPortal";

describe("PaymentPortal", () => {
  test("renders the form with all input fields", () => {
    render(<PaymentPortal />);
    const fields = ["name", "zip", "cardNumber", "expMonth", "expYear", "cvc"];
    fields.forEach((field) => {
      expect(screen.getByTestId(`${field}-input`)).toBeInTheDocument();
    });
  });

  test("shows error messages for invalid inputs", () => {
    render(<PaymentPortal />);
    const fields = [
      { name: "name", value: "" },
      { name: "zip", value: "123" },
      { name: "cardNumber", value: "123456789012345" },
      { name: "expMonth", value: "" },
      { name: "expYear", value: "" },
      { name: "cvc", value: "12" },
    ];

    fields.forEach(({ name, value }) => {
      const input = screen.getByTestId(`${name}-input`);
      fireEvent.change(input, { target: { value } });
      fireEvent.blur(input);
    });

    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Invalid zip code.")).toBeInTheDocument();
    expect(screen.getByText("Invalid credit card number.")).toBeInTheDocument();
    expect(
      screen.getByText("Expiration month is required.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Expiration year is required.")
    ).toBeInTheDocument();
    expect(screen.getByText("Invalid CVC number.")).toBeInTheDocument();
  });

  test("submits the form when all inputs are valid", () => {
    render(<PaymentPortal />);
    const fields = [
      { name: "name", value: "John Doe" },
      { name: "zip", value: "12345" },
      { name: "cardNumber", value: "1234567812345678" },
      { name: "expMonth", value: "12" },
      { name: "expYear", value: "2025" },
      { name: "cvc", value: "123" },
    ];

    fields.forEach(({ name, value }) => {
      const input = screen.getByTestId(`${name}-input`);
      fireEvent.change(input, { target: { value } });
      fireEvent.blur(input);
    });

    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    expect(screen.queryByText("Name is required.")).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid zip code.")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Invalid credit card number.")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Expiration month is required.")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Expiration year is required.")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid CVC number.")).not.toBeInTheDocument();
  });
});
