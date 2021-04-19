import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("autenticacion", () => {
  it("muestra la pantalla de autenticación", () => {
    render(<App />);

    expect(
      screen.getByText(/Introduce la contraseña para acceder:/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("al introducir la contraseña correcta dirige a los pasos", () => {
    render(<App />);

    userEvent.type(screen.getByLabelText(/password/i), "B1k0M4nd4&n0TuB4nd4");
    userEvent.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText(/Pasos del learning path/i)).toBeInTheDocument();
  });

  it("al introducir la contraseña incorrecta, muestra una advertencia", () => {
    render(<App />);

    userEvent.type(screen.getByLabelText(/password/i), "1234");
    userEvent.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText(/Contraseña incorrecta/i)).toBeInTheDocument();
  });
});
