import React from "react";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import ContactForm from "./ContactForm";

import {
  describe,
  test,
  expect,
} from "vitest";

describe("Contact Form Integration", () => {
  test("submits form successfully", () => {
    render(<ContactForm />);

    fireEvent.change(
      screen.getByPlaceholderText("Name"),
      {
        target: {
          value: "Shrenika",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Email"),
      {
        target: {
          value: "abc@gmail.com",
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Message"),
      {
        target: {
          value:
            "This is a valid message",
        },
      }
    );

    fireEvent.click(
      screen.getByText(
        /send message/i
      )
    );

    expect(
      screen.getByText(
        /thank you/i
      )
    ).toBeInTheDocument();
  });
});