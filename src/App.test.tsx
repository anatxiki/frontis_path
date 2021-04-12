import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("muestra el logo de biko", () => {
  render(<App />);
  const logoBiko = screen.getByRole("img", { name: "Logo de Biko" });
  expect(logoBiko).toBeInTheDocument();
});

test("muestra el título de los pasos", () => {
  render(<App />);

  const pathTitle = screen.getByText(/pasos del learning path/i);
  expect(pathTitle).toBeInTheDocument();
});
