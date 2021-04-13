import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { katas } from "./katas.json";

describe("listado de pasos", () => {
  it("muestra una kata sin detalle", () => {
    render(<App />);
    const kataTitle = screen.getByRole("button", {
      name: /Random Quote Machine - en solitario/i,
    });
    const kataState = screen.getByRole("img", { name: /estado completado/i });
    expect(kataTitle).toBeInTheDocument();
    expect(kataState).toBeInTheDocument();
  });

  it("muestra una kata con detalle", () => {
    render(<App />);
    expect(screen.queryByText(/Kata en Coding Dojo/i)).not.toBeInTheDocument();
    userEvent.click(
      screen.getByRole("button", {
        name: /Random Quote Machine - en solitario/i,
      })
    );
    expect(screen.getByText(/Kata en Coding Dojo/i)).toBeInTheDocument();
    expect(screen.getByText(/go to repo/i)).toBeInTheDocument();
  });

  it("muestra una kata sin descripción", () => {
    const myKata = katas[1];
    render(<App />);
    const kataSummary = "Kata " + myKata.title + " - " + myKata.pairing;
    userEvent.click(
      screen.getByRole("button", {
        name: kataSummary,
      })
    );
    expect(
      screen.getByText(
        /Falta el enunciado de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("muestra una kata sin acompañamiento", () => {
    const myKata = katas[2];
    render(<App />);
    const kataSummary = "Kata " + myKata.title;
    userEvent.click(
      screen.getByRole("button", {
        name: kataSummary,
      })
    );
    expect(
      screen.getByText(
        /Falta el acompañamiento de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("muestra una kata sin estado", () => {
    const myKata = katas[3];
    render(<App />);
    const kataSummary = "Kata " + myKata.title + " - " + myKata.pairing;
    userEvent.click(
      screen.getByRole("button", {
        name: kataSummary,
      })
    );
    expect(
      screen.getByText(
        /Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("muestra una kata sin repo", () => {
    const myKata = katas[2];
    render(<App />);
    const kataSummary = "Kata " + myKata.title;
    userEvent.click(
      screen.getByRole("button", {
        name: kataSummary,
      })
    );
    expect(
      screen.getByText(/Esta kata no tiene un repositorio asociado/i)
    ).toBeInTheDocument();
  });
});
