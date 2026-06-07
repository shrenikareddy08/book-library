import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";
import { describe, test, expect } from "vitest";

describe("SearchBar", () => {
  test("renders search input", () => {
    render(
      <BrowserRouter>
        <SearchBar theme="light" />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText(/type book name/i)
    ).toBeInTheDocument();
  });
});