import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { Steps } from "./Steps";

describe("autenticacion", () => {
  it("muestra la pantalla de autenticación", () => {
    render(<App />);

    expect(
      screen.getByText(/Introduce la contraseña para acceder:/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});

describe("listado de pasos", () => {
  it("muestra una kata", () => {
    // Arrange

    // Act
    render(<Steps />);

    // Assert
    expect(screen.getByText(/Fizz Buzz/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /estado completado/i })
    ).toBeInTheDocument();
  });

  it("muestra el detalle de una kata", () => {
    render(<Steps />);
    openKata(/Random Quote Machine - en solitario/i);

    expect(screen.getByText(/Kata en Coding Dojo/i)).toBeInTheDocument();
    expect(screen.getByText(/go to repo/i)).toBeInTheDocument();
  });

  it("si una kata no tiene descripción, informa al usuario", () => {
    render(<Steps />);
    openKata(/Kata Fizz Buzz - En pairing con el tutor/i);

    expect(
      screen.getByText(
        /Falta el enunciado de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("si una kata no tiene acompañamiento, informa al usuario", () => {
    render(<Steps />);
    openKata(/Kata Roman Numerals/i);

    expect(
      screen.getByText(
        /Falta el acompañamiento de la kata, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("si una kata no tiene estado, informa al usuario", () => {
    render(<Steps />);
    openKata(/Kata Random Quote Machine - En pairing con el tutor/i);

    expect(
      screen.getByText(
        /Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles/i
      )
    ).toBeInTheDocument();
  });

  it("si una kata no tiene repositorio, informa al usuario", () => {
    render(<Steps />);
    openKata(/Kata Roman Numerals/i);

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
