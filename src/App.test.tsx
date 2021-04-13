import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("listado de pasos", () => {
  it("muestra una kata", () => {
    // Arrange

    // Act
    render(<App />);

    // Assert
    expect(screen.getByText(/Fizz Buzz/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /estado completado/i })
    ).toBeInTheDocument();
  });

  it("muestra el detalle de una kata", () => {
    // Arrange

    // Act
    render(<App />);
    userEvent.click(
      screen.getByRole("button", {
        name: /Random Quote Machine - en solitario/i,
      })
    );

    // Assert
    expect(screen.getByText(/Kata en Coding Dojo/i)).toBeInTheDocument();
    expect(screen.getByText(/go to repo/i)).toBeInTheDocument();
  });

  it("muestra una kata sin descripción", () => {
    // Arrange

    // Act
    render(<App />);
    userEvent.click(
      screen.getByRole("button", {
        name: /Kata Fizz Buzz - En pairing con el tutor/i,
      })
    );

    // Assert
    expect(
      screen.getByText(
        /Falta el enunciado de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("muestra una kata sin acompañamiento", () => {
    // Arrange

    // Act
    render(<App />);
    userEvent.click(
      screen.getByRole("button", {
        name: /Kata Roman Numerals/i,
      })
    );

    //Assert
    expect(
      screen.getByText(
        /Falta el acompañamiento de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("muestra una kata sin estado", () => {
    // Arrange

    // Act
    render(<App />);
    userEvent.click(
      screen.getByRole("button", {
        name: /Kata Random Quote Machine - En pairing con el tutor/i,
      })
    );

    // Assert
    expect(
      screen.getByText(
        /Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("muestra una kata sin repo", () => {
    // Arrange

    // Act
    render(<App />);
    userEvent.click(
      screen.getByRole("button", {
        name: /Kata Roman Numerals/i,
      })
    );

    //Assert
    expect(
      screen.getByText(/Esta kata no tiene un repositorio asociado/i)
    ).toBeInTheDocument();
  });
});
