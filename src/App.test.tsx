import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("listado de pasos", () => {
  it("muestra una kata sin descripción", () => {
    render(<App />);
    const kataTitle = screen.getByText(/kata roman numerals - en solitario/i);
    const kataState = screen.getByRole("img", { name: /estado completado/i });
    expect(kataTitle).toBeInTheDocument();
    expect(kataState).toBeInTheDocument();
  });

  it("muestra una kata con detalle", () => {
    render(<App />);
    expect(screen.queryByText(/Kata en Coding Dojo/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(/kata roman numerals - en solitario/i));
    expect(screen.getByText(/Kata en Coding Dojo/i)).toBeInTheDocument();
    expect(screen.getByText(/go to repo/i)).toBeInTheDocument();
  });
});
