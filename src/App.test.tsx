import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("listado de pasos", () => {
  it("muestra una kata", () => {
    render(<App />);
    const kataTitle = screen.getByText(/kata roman numerals - en solitario/i);
    const kataState = screen.getByRole("img", { name: /estado completado/i });
    expect(kataTitle).toBeInTheDocument();
    expect(kataState).toBeInTheDocument();
  });
});
