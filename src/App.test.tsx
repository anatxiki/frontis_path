import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { katas } from "./katas.json";

describe("listado de pasos", () => {
  it("muestra una kata sin detalle", () => {
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

  it("muestra una kata sin descripción", () => {
    const myKata = katas[1];
    render(<App />);
    const kataSummary = myKata.title + " - " + myKata.pairing;
    userEvent.click(screen.getByText(kataSummary));
    expect(
      screen.getByText(
        /Falta el enunciado de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });
});
