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
    openKata(/Random Quote Machine - en solitario/i);

    // Assert
    expect(screen.getByText(/Kata en Coding Dojo/i)).toBeInTheDocument();
    expect(screen.getByText(/go to repo/i)).toBeInTheDocument();
  });

  it("si una kata no tiene descripción, informa al usuario", () => {
    // Arrange

    // Act
    render(<App />);
    openKata(/Kata Fizz Buzz - En pairing con el tutor/i);

    // Assert
    expect(
      screen.getByText(
        /Falta el enunciado de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("si una kata no tiene acompañamiento, informa al usuario", () => {
    // Arrange

    // Act
    render(<App />);
    openKata(/Kata Roman Numerals/i);

    //Assert
    expect(
      screen.getByText(
        /Falta el acompañamiento de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("si una kata no tiene estado, informa al usuario", () => {
    // Arrange

    // Act
    render(<App />);
    openKata(/Kata Random Quote Machine - En pairing con el tutor/i);

    // Assert
    expect(
      screen.getByText(
        /Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("si una kata no tiene repositorio, informa al usuario", () => {
    // Arrange

    // Act
    render(<App />);
    openKata(/Kata Roman Numerals/i);

    //Assert
    expect(
      screen.getByText(/Esta kata no tiene un repositorio asociado/i)
    ).toBeInTheDocument();
  });
});

function openKata(name: RegExp) {
  userEvent.click(
    screen.getByRole("button", {
      name,
    })
  );
}
