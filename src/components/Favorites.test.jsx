import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Favorites from "./Favorites";
import { describe, test, expect } from "vitest";

describe("Favorites", () => {
  test("shows empty favorites message", () => {
    render(
      <BrowserRouter>
        <Favorites
          favorites={[]}
          theme="light"
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText(
        /no favorites yet/i
      )
    ).toBeInTheDocument();
  });
});